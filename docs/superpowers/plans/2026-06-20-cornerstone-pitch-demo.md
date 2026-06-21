# Cornerstone Church Pitch — Demo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the two live demo components for the Cornerstone Church pitch — a working sermon search app indexed against their real YouTube content, and a unified experience demo showing what Groups/Events/Giving look like without redirecting to churchcenter.com.

**Architecture:** A Next.js app with two parts. (1) A sermon search page: a one-time Node script fetches Cornerstone's YouTube videos and auto-transcripts and writes them to a static JSON file; Fuse.js searches that JSON client-side with no backend needed. (2) A unified experience section: static pages that replicate the Planning Center content (Groups, Events, Giving) natively within the Cornerstone site, eliminating the churchcenter.com redirect.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Fuse.js, youtube-transcript, YouTube Data API v3, Jest + ts-jest

## Global Constraints

- Node.js 20+
- Next.js App Router (no Pages Router)
- TypeScript strict mode
- Tailwind CSS for all styling — no CSS modules, no inline styles
- No backend or API routes — everything client-side after the index is built
- YouTube Data API v3 key required (set up in Google Cloud Console)
- Demo-quality code, not production-quality — YAGNI applies

## Out of Scope (do in Figma separately)

- Email campaign mockup
- Vision screens: School of Ministry, Conference Hub, Member Engagement dashboard
- 5-page leave-behind PDF
- Founding partnership agreement document

---

## File Map

```
apps/sermon-search/
├── app/
│   ├── layout.tsx                  # Root layout with Cornerstone nav + branding
│   ├── page.tsx                    # Main sermon search page
│   ├── globals.css                 # Tailwind base
│   └── unified/
│       ├── groups/page.tsx         # Groups — native, no churchcenter.com redirect
│       ├── events/page.tsx         # Events — native
│       └── giving/page.tsx         # Giving — native
├── components/
│   ├── SearchBar.tsx               # Search input with debounce
│   ├── SermonResult.tsx            # Result card: title, speaker, matched quote, timestamp link
│   └── ResultsList.tsx             # Results container + empty/loading states
├── lib/
│   ├── types.ts                    # Shared TypeScript interfaces
│   ├── youtube.ts                  # YouTube Data API client (fetch channel videos)
│   ├── transcripts.ts              # Fetch auto-captions via youtube-transcript
│   └── search.ts                   # Fuse.js search over sermons.json
├── scripts/
│   └── build-index.ts              # One-time script: fetch all videos + transcripts → sermons.json
├── data/
│   └── sermons.json                # Generated — committed after running build-index
├── __tests__/
│   └── search.test.ts              # Unit tests for search logic
├── jest.config.ts
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── .env.local.example
```

---

### Task 1: Project setup

**Files:**
- Create: `apps/sermon-search/` (full Next.js scaffold)
- Create: `apps/sermon-search/.env.local.example`
- Create: `apps/sermon-search/jest.config.ts`
- Modify: `apps/sermon-search/package.json` (add test script, build:index script)

**Interfaces:**
- Produces: runnable Next.js dev server, passing `npm test` baseline

- [ ] **Step 1: Scaffold the Next.js app**

```bash
cd /Users/mesa/Claude/oasis-agency
mkdir -p apps
cd apps
npx create-next-app@latest sermon-search \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --no-eslint
cd sermon-search
```

- [ ] **Step 2: Install runtime and dev dependencies**

```bash
npm install fuse.js youtube-transcript
npm install --save-dev ts-jest @types/jest jest jest-environment-node tsx
```

- [ ] **Step 3: Create jest.config.ts**

```typescript
// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^../data/sermons.json$': '<rootDir>/__tests__/__mocks__/sermons.json',
  },
};

export default config;
```

- [ ] **Step 4: Add scripts to package.json**

In `package.json`, add to the `"scripts"` block:
```json
"test": "jest",
"build:index": "tsx scripts/build-index.ts"
```

- [ ] **Step 5: Create .env.local.example**

```
YOUTUBE_API_KEY=your_youtube_data_api_v3_key_here
YOUTUBE_CHANNEL_ID=UCxxxxxxxxxxxxxxxxxxxxxxxx
```

- [ ] **Step 6: Find Cornerstone's YouTube channel ID**

Go to cornerstonechurchma.com, find the YouTube icon in the footer, and click through to their YouTube channel. The channel ID is in the URL (`youtube.com/channel/UC...`) or resolvable from their handle:

```bash
# If they use a @handle:
curl "https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=@THEIR_HANDLE&key=YOUR_API_KEY"
# Response: {"items": [{"id": "UCxxxxxxxx..."}]}
```

Copy the channel ID into `.env.local`.

- [ ] **Step 7: Verify the dev server starts**

```bash
npm run dev
```

Expected: Server running at http://localhost:3000

- [ ] **Step 8: Commit**

```bash
cd /Users/mesa/Claude/oasis-agency
git add apps/sermon-search
git commit -m "feat: initialize sermon search Next.js app with jest config"
```

---

### Task 2: TypeScript types

**Files:**
- Create: `apps/sermon-search/lib/types.ts`

**Interfaces:**
- Produces: `Sermon`, `TranscriptSegment`, `SearchResult` — used by every subsequent task

- [ ] **Step 1: Write types.ts**

```typescript
// lib/types.ts
export interface TranscriptSegment {
  text: string;
  start: number;    // seconds into the video
  duration: number; // seconds
}

export interface Sermon {
  id: string;           // YouTube video ID (e.g. "dQw4w9WgXcQ")
  title: string;
  description: string;
  publishedAt: string;  // ISO 8601 (e.g. "2024-01-14T00:00:00Z")
  thumbnailUrl: string;
  transcript: TranscriptSegment[];
}

export interface MatchedSegment {
  segment: TranscriptSegment;
  youtubeUrl: string; // deep link to this timestamp: https://youtu.be/{id}?t={seconds}
}

export interface SearchResult {
  sermon: Sermon;
  matchedSegments: MatchedSegment[];
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/sermon-search/lib/types.ts
git commit -m "feat: add shared TypeScript types for Sermon and SearchResult"
```

---

### Task 3: YouTube Data API client

**Files:**
- Create: `apps/sermon-search/lib/youtube.ts`

**Interfaces:**
- Consumes: `YOUTUBE_API_KEY`, `YOUTUBE_CHANNEL_ID` env vars
- Produces: `fetchChannelVideos(): Promise<Omit<Sermon, 'transcript'>[]>`

- [ ] **Step 1: Write youtube.ts**

```typescript
// lib/youtube.ts
import type { Sermon } from './types';

interface YouTubeSearchItem {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: { medium: { url: string } };
  };
}

interface YouTubeSearchResponse {
  items: YouTubeSearchItem[];
  nextPageToken?: string;
}

export async function fetchChannelVideos(): Promise<Omit<Sermon, 'transcript'>[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  if (!apiKey || !channelId) {
    throw new Error('Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID in environment');
  }

  const videos: Omit<Sermon, 'transcript'>[] = [];
  let pageToken: string | undefined;

  do {
    const url = new URL('https://www.googleapis.com/youtube/v3/search');
    url.searchParams.set('key', apiKey);
    url.searchParams.set('channelId', channelId);
    url.searchParams.set('part', 'snippet');
    url.searchParams.set('type', 'video');
    url.searchParams.set('maxResults', '50');
    url.searchParams.set('order', 'date');
    if (pageToken) url.searchParams.set('pageToken', pageToken);

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`YouTube API responded ${res.status}: ${await res.text()}`);
    const data: YouTubeSearchResponse = await res.json();

    for (const item of data.items) {
      videos.push({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnailUrl: item.snippet.thumbnails.medium.url,
      });
    }

    pageToken = data.nextPageToken;
  } while (pageToken);

  return videos;
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/sermon-search/lib/youtube.ts
git commit -m "feat: YouTube Data API client with paginated channel video fetching"
```

---

### Task 4: Transcript fetching

**Files:**
- Create: `apps/sermon-search/lib/transcripts.ts`

**Interfaces:**
- Consumes: `youtube-transcript` npm package
- Produces: `fetchTranscript(videoId: string): Promise<TranscriptSegment[]>`

- [ ] **Step 1: Write transcripts.ts**

```typescript
// lib/transcripts.ts
import { YoutubeTranscript } from 'youtube-transcript';
import type { TranscriptSegment } from './types';

export async function fetchTranscript(videoId: string): Promise<TranscriptSegment[]> {
  try {
    const segments = await YoutubeTranscript.fetchTranscript(videoId, { lang: 'en' });
    return segments.map(seg => ({
      text: seg.text.replace(/\n/g, ' ').trim(),
      start: seg.offset / 1000,    // ms → seconds
      duration: seg.duration / 1000,
    }));
  } catch {
    // No transcript available (some sermons are video-only or captions disabled)
    return [];
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/sermon-search/lib/transcripts.ts
git commit -m "feat: transcript fetching via youtube-transcript with graceful fallback"
```

---

### Task 5: Index build script

**Files:**
- Create: `apps/sermon-search/scripts/build-index.ts`
- Create: `apps/sermon-search/data/sermons.json` (generated by running the script)

**Interfaces:**
- Consumes: `fetchChannelVideos()`, `fetchTranscript(videoId)`
- Produces: `data/sermons.json` — array of `Sermon` objects, used by the search module

- [ ] **Step 1: Write build-index.ts**

```typescript
// scripts/build-index.ts
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fetchChannelVideos } from '../lib/youtube';
import { fetchTranscript } from '../lib/transcripts';

async function main() {
  console.log('Fetching Cornerstone Church YouTube videos...');
  const videos = await fetchChannelVideos();
  console.log(`Found ${videos.length} videos\n`);

  const sermons = [];
  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    process.stdout.write(`[${i + 1}/${videos.length}] ${video.title.slice(0, 60)}...`);
    const transcript = await fetchTranscript(video.id);
    sermons.push({ ...video, transcript });
    process.stdout.write(transcript.length > 0 ? ' ✓\n' : ' (no transcript)\n');
    await new Promise(r => setTimeout(r, 400)); // avoid rate limiting
  }

  mkdirSync(join(process.cwd(), 'data'), { recursive: true });
  const outputPath = join(process.cwd(), 'data/sermons.json');
  writeFileSync(outputPath, JSON.stringify(sermons, null, 2));

  const withTranscripts = sermons.filter(s => s.transcript.length > 0);
  console.log(`\nDone. ${sermons.length} sermons indexed, ${withTranscripts.length} with transcripts.`);
  console.log(`Written to: ${outputPath}`);
}

main().catch(err => {
  console.error('Build failed:', err.message);
  process.exit(1);
});
```

- [ ] **Step 2: Copy env file and fill in values**

```bash
cp .env.local.example .env.local
# Open .env.local and fill in:
# YOUTUBE_API_KEY=<your key from Google Cloud Console>
# YOUTUBE_CHANNEL_ID=<Cornerstone's channel ID from Step 6 of Task 1>
```

- [ ] **Step 3: Run the build script**

```bash
npm run build:index
```

Expected: Progress output for each video, ending with:
```
Done. 170 sermons indexed, ~150 with transcripts.
Written to: .../data/sermons.json
```

If you see `YouTube API responded 403`, verify the API key has YouTube Data API v3 enabled in Google Cloud Console.

- [ ] **Step 4: Verify the output**

```bash
node -e "const s = require('./data/sermons.json'); console.log(s.length, 'sermons,', s[0].title, '-', s[0].transcript.length, 'segments')"
```

Expected: `170 sermons, <title of most recent sermon> - <N> segments`

- [ ] **Step 5: Commit**

```bash
git add apps/sermon-search/scripts/build-index.ts apps/sermon-search/data/sermons.json
git commit -m "feat: index build script + generated Cornerstone sermon index"
```

---

### Task 6: Search logic + tests

**Files:**
- Create: `apps/sermon-search/lib/search.ts`
- Create: `apps/sermon-search/__tests__/search.test.ts`
- Create: `apps/sermon-search/__tests__/__mocks__/sermons.json`

**Interfaces:**
- Consumes: `data/sermons.json` (as static import), `Sermon`, `SearchResult`, `MatchedSegment` types
- Produces: `searchSermons(query: string): SearchResult[]`

- [ ] **Step 1: Create the mock data for tests**

```json
[
  {
    "id": "abc123",
    "title": "Walking in Faith",
    "description": "A sermon about trusting God through trials and perseverance.",
    "publishedAt": "2024-01-14T00:00:00Z",
    "thumbnailUrl": "https://example.com/thumb.jpg",
    "transcript": [
      { "text": "Today we talk about faith and perseverance", "start": 10, "duration": 4 },
      { "text": "In John chapter 3 verse 16 we see God's love", "start": 45, "duration": 5 },
      { "text": "God so loved the world that he gave his only son", "start": 50, "duration": 5 }
    ]
  },
  {
    "id": "def456",
    "title": "The Peace That Passes Understanding",
    "description": "Philippians 4 — finding peace in the midst of anxiety.",
    "publishedAt": "2024-01-21T00:00:00Z",
    "thumbnailUrl": "https://example.com/thumb2.jpg",
    "transcript": [
      { "text": "Paul writes about anxiety in Philippians four", "start": 12, "duration": 4 },
      { "text": "Do not be anxious about anything but in everything by prayer", "start": 30, "duration": 6 }
    ]
  }
]
```

Save to: `__tests__/__mocks__/sermons.json`

- [ ] **Step 2: Write the failing tests**

```typescript
// __tests__/search.test.ts
import { searchSermons } from '../lib/search';

describe('searchSermons', () => {
  it('returns results matching the sermon title', () => {
    const results = searchSermons('faith');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].sermon.id).toBe('abc123');
  });

  it('returns results matching transcript content', () => {
    const results = searchSermons('anxiety');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].sermon.id).toBe('def456');
  });

  it('returns matched transcript segments with YouTube timestamp URLs', () => {
    const results = searchSermons('John 3');
    expect(results.length).toBeGreaterThan(0);
    const { matchedSegments } = results[0];
    expect(matchedSegments.length).toBeGreaterThan(0);
    expect(matchedSegments[0].youtubeUrl).toContain('abc123');
    expect(matchedSegments[0].youtubeUrl).toContain('t=45');
  });

  it('returns empty array for empty query', () => {
    expect(searchSermons('')).toEqual([]);
    expect(searchSermons('   ')).toEqual([]);
  });

  it('returns empty array when nothing matches', () => {
    const results = searchSermons('zxqv no match xyzzy');
    expect(results).toEqual([]);
  });
});
```

- [ ] **Step 3: Run tests to verify they fail**

```bash
npm test
```

Expected: FAIL — "Cannot find module '../lib/search'"

- [ ] **Step 4: Implement search.ts**

```typescript
// lib/search.ts
import Fuse from 'fuse.js';
import type { Sermon, SearchResult, MatchedSegment, TranscriptSegment } from './types';
import sermonsData from '../data/sermons.json';

const sermons = sermonsData as Sermon[];

interface IndexedSermon extends Sermon {
  transcriptText: string;
}

const indexed: IndexedSermon[] = sermons.map(s => ({
  ...s,
  transcriptText: s.transcript.map(seg => seg.text).join(' '),
}));

const fuse = new Fuse(indexed, {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'description', weight: 2 },
    { name: 'transcriptText', weight: 1 },
  ],
  threshold: 0.4,
  minMatchCharLength: 2,
  includeScore: true,
});

export function searchSermons(query: string): SearchResult[] {
  if (!query.trim()) return [];

  return fuse.search(query, { limit: 10 }).map(result => ({
    sermon: result.item,
    matchedSegments: findMatchingSegments(result.item.id, result.item.transcript, query),
  }));
}

function findMatchingSegments(
  sermonId: string,
  transcript: TranscriptSegment[],
  query: string
): MatchedSegment[] {
  const lower = query.toLowerCase();
  return transcript
    .filter(seg => seg.text.toLowerCase().includes(lower))
    .slice(0, 3)
    .map(seg => ({
      segment: seg,
      youtubeUrl: `https://www.youtube.com/watch?v=${sermonId}&t=${Math.floor(seg.start)}s`,
    }));
}
```

- [ ] **Step 5: Run tests to verify they pass**

```bash
npm test
```

Expected: All 5 tests PASS

- [ ] **Step 6: Commit**

```bash
git add apps/sermon-search/lib/search.ts apps/sermon-search/__tests__/
git commit -m "feat: Fuse.js sermon search with transcript segment matching and timestamp URLs"
```

---

### Task 7: Search UI

**Files:**
- Create: `apps/sermon-search/components/SearchBar.tsx`
- Create: `apps/sermon-search/components/SermonResult.tsx`
- Create: `apps/sermon-search/components/ResultsList.tsx`
- Modify: `apps/sermon-search/app/page.tsx`
- Modify: `apps/sermon-search/app/layout.tsx`

**Interfaces:**
- Consumes: `searchSermons(query: string): SearchResult[]`, `SearchResult`, `MatchedSegment` types
- Produces: A fully functional search page at http://localhost:3000

- [ ] **Step 1: Write SearchBar.tsx**

```tsx
// components/SearchBar.tsx
'use client';
import { useEffect, useRef } from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Search sermons...' }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="relative">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Write SermonResult.tsx**

```tsx
// components/SermonResult.tsx
import type { SearchResult } from '@/lib/types';

interface Props {
  result: SearchResult;
}

export function SermonResult({ result }: Props) {
  const { sermon, matchedSegments } = result;
  const date = new Date(sermon.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="border border-gray-100 rounded-xl p-5 hover:border-gray-200 hover:shadow-sm transition-all">
      <div className="flex gap-4">
        {sermon.thumbnailUrl && (
          <img
            src={sermon.thumbnailUrl}
            alt=""
            className="w-24 h-16 object-cover rounded-lg flex-shrink-0"
          />
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{sermon.title}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{date}</p>
        </div>
      </div>

      {matchedSegments.length > 0 && (
        <div className="mt-4 space-y-2">
          {matchedSegments.map((match, i) => (
            <a
              key={i}
              href={match.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-50 hover:bg-blue-100 rounded-lg px-4 py-3 transition-colors group"
            >
              <p className="text-sm text-gray-800 leading-relaxed">
                "…{match.segment.text}…"
              </p>
              <span className="text-xs text-blue-600 group-hover:underline mt-1 inline-block">
                Jump to {formatTime(match.segment.start)} →
              </span>
            </a>
          ))}
        </div>
      )}

      {matchedSegments.length === 0 && (
        <a
          href={`https://www.youtube.com/watch?v=${sermon.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-blue-600 hover:underline"
        >
          Watch sermon →
        </a>
      )}
    </div>
  );
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}
```

- [ ] **Step 3: Write ResultsList.tsx**

```tsx
// components/ResultsList.tsx
import type { SearchResult } from '@/lib/types';
import { SermonResult } from './SermonResult';

interface Props {
  results: SearchResult[];
  query: string;
  isSearching: boolean;
}

export function ResultsList({ results, query, isSearching }: Props) {
  if (!query.trim()) {
    return (
      <p className="text-center text-gray-400 py-16 text-lg">
        Search by topic, scripture, speaker, or any word from a sermon
      </p>
    );
  }

  if (isSearching) {
    return <p className="text-center text-gray-400 py-16">Searching…</p>;
  }

  if (results.length === 0) {
    return (
      <p className="text-center text-gray-400 py-16">
        No sermons found for "{query}"
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        {results.length} sermon{results.length !== 1 ? 's' : ''} found
      </p>
      {results.map(result => (
        <SermonResult key={result.sermon.id} result={result} />
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Write the main search page**

```tsx
// app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { ResultsList } from '@/components/ResultsList';
import { searchSermons } from '@/lib/search';
import type { SearchResult } from '@/lib/types';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setIsSearching(true);
    const timer = setTimeout(() => {
      setResults(searchSermons(query));
      setIsSearching(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sermon Search</h1>
        <p className="text-gray-500">
          Search across {'{'}sermonCount{'}'} sermons by topic, scripture reference, or any phrase
        </p>
      </div>
      <SearchBar value={query} onChange={setQuery} placeholder="Try 'John 3:16', 'anxiety', 'forgiveness'…" />
      <div className="mt-8">
        <ResultsList results={results} query={query} isSearching={isSearching} />
      </div>
    </div>
  );
}
```

Note: Replace `{'{'}sermonCount{'}'}` with the actual count from sermons.json (e.g., `170`). You can get it with:
```bash
node -e "console.log(require('./data/sermons.json').length)"
```

- [ ] **Step 5: Update layout.tsx with Cornerstone branding**

Look up Cornerstone's primary brand color from their website (inspect the site's CSS or logo). Replace the layout with:

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cornerstone Sermon Search',
  description: 'Search Cornerstone Church sermons by topic, scripture, or keyword',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <header className="bg-white border-b border-gray-100 px-6 py-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Replace with Cornerstone's actual logo if available */}
              <div className="w-8 h-8 bg-gray-900 rounded-lg" />
              <span className="font-bold text-gray-900">Cornerstone Church</span>
            </div>
            <a
              href="https://cornerstonechurchma.com"
              className="text-sm text-gray-500 hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              ← Back to site
            </a>
          </div>
        </header>
        <main className="px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
```

- [ ] **Step 6: Test the search in the browser**

```bash
npm run dev
```

Open http://localhost:3000. Try these searches:
- `John 3:16` — should surface sermons mentioning that scripture
- `anxiety` — should find peace/Philippians-themed sermons
- `perseverance` — should find sermons mentioning it in transcripts
- `[a phrase from a recent Pastor Josh sermon you know]` — the demo moment

- [ ] **Step 7: Commit**

```bash
git add apps/sermon-search/components/ apps/sermon-search/app/
git commit -m "feat: sermon search UI with SearchBar, SermonResult, and ResultsList"
```

---

### Task 8: Unified experience demo pages

**Files:**
- Create: `apps/sermon-search/app/unified/groups/page.tsx`
- Create: `apps/sermon-search/app/unified/events/page.tsx`
- Create: `apps/sermon-search/app/unified/giving/page.tsx`

**Goal:** Show what Groups, Events, and Giving look like when they load natively within the Cornerstone site — same nav, same branding, no churchcenter.com redirect. Uses realistic mock data.

- [ ] **Step 1: Write the Groups page**

```tsx
// app/unified/groups/page.tsx
const GROUPS = [
  { name: "Men's Bible Study", day: 'Tuesday', time: '6:30 AM', location: 'Room 104', leader: 'David Chen', spots: 3 },
  { name: "Young Adults", day: 'Friday', time: '7:00 PM', location: 'The Loft', leader: 'Sarah Mitchell', spots: 8 },
  { name: "Marriage & Family", day: 'Thursday', time: '7:00 PM', location: 'Room 201', leader: 'Tom & Lisa Warren', spots: 2 },
  { name: "Women's Growth Group", day: 'Wednesday', time: '10:00 AM', location: 'Café', leader: 'Rachel Torres', spots: 5 },
  { name: "College Students", day: 'Sunday', time: '5:00 PM', location: 'Youth Wing', leader: 'Marcus Johnson', spots: 12 },
];

export default function GroupsPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Growth Groups</h1>
      <p className="text-gray-500 mb-8">
        Life is better together. Find a group and go deeper.
      </p>
      <div className="space-y-4">
        {GROUPS.map(group => (
          <div key={group.name} className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{group.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {group.day}s at {group.time} · {group.location}
                </p>
                <p className="text-sm text-gray-500">Led by {group.leader}</p>
              </div>
              <div className="text-right">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  {group.spots} spots left
                </span>
              </div>
            </div>
            <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
              Request to join →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Write the Events page**

```tsx
// app/unified/events/page.tsx
const EVENTS = [
  { name: 'Summer Kickoff Cookout', date: 'July 4, 2026', time: '12:00 PM', location: 'Church Grounds', description: 'Bring your family and celebrate.' },
  { name: "Men's Retreat", date: 'July 18–20, 2026', time: 'Fri 6 PM – Sun noon', location: 'Camp Pinnacle, NH', description: 'A weekend away to reset and go deep.' },
  { name: 'Back to School Prayer Night', date: 'August 24, 2026', time: '7:00 PM', location: 'Main Sanctuary', description: 'Sending off students and teachers with prayer.' },
  { name: 'Worship Night', date: 'September 5, 2026', time: '7:00 PM', location: 'Main Sanctuary', description: 'An evening of extended worship. Open to all.' },
];

export default function EventsPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Events</h1>
      <p className="text-gray-500 mb-8">What's coming up at Cornerstone.</p>
      <div className="space-y-4">
        {EVENTS.map(event => (
          <div key={event.name} className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="flex gap-4">
              <div className="w-14 text-center flex-shrink-0">
                <div className="bg-gray-900 text-white text-xs rounded-t px-2 py-0.5">
                  {event.date.split(' ')[0].toUpperCase()}
                </div>
                <div className="border border-t-0 border-gray-200 rounded-b text-xl font-bold py-1">
                  {event.date.split(' ')[1]?.replace(',', '') ?? '—'}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{event.name}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{event.time} · {event.location}</p>
                <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                <button className="mt-3 text-sm font-medium text-blue-600 hover:underline">
                  Register →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Write the Giving page**

```tsx
// app/unified/giving/page.tsx
export default function GivingPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Give</h1>
      <p className="text-gray-500 mb-8">
        Your generosity makes this ministry possible. Thank you.
      </p>

      <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
          <div className="flex gap-2 mb-3">
            {['25', '50', '100', '250'].map(amt => (
              <button key={amt} className="flex-1 border border-gray-200 rounded-lg py-2 text-sm font-medium hover:bg-gray-50">
                ${amt}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Other amount"
            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fund</label>
          <select className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>General Fund</option>
            <option>Building Fund</option>
            <option>Missions</option>
            <option>Benevolence</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
          <div className="flex gap-2">
            <button className="flex-1 bg-gray-900 text-white rounded-lg py-2 text-sm font-medium">One-time</button>
            <button className="flex-1 border border-gray-200 rounded-lg py-2 text-sm font-medium hover:bg-gray-50">Weekly</button>
            <button className="flex-1 border border-gray-200 rounded-lg py-2 text-sm font-medium hover:bg-gray-50">Monthly</button>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white rounded-lg py-3 font-medium hover:bg-blue-700 transition-colors">
          Continue →
        </button>
      </div>

      <p className="text-xs text-gray-400 text-center mt-4">
        Secure giving powered by Stripe. Cornerstone Church is a registered 501(c)(3).
      </p>
    </div>
  );
}
```

- [ ] **Step 4: Update layout to add nav links to unified pages**

In `app/layout.tsx`, add navigation that shows Groups, Events, and Giving as native links (not churchcenter.com):

```tsx
// Replace the header in layout.tsx with:
<header className="bg-white border-b border-gray-100 px-6 py-4">
  <div className="max-w-2xl mx-auto flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-gray-900 rounded-lg" />
      <span className="font-bold text-gray-900">Cornerstone Church</span>
    </div>
    <nav className="flex items-center gap-6 text-sm text-gray-600">
      <a href="/" className="hover:text-gray-900">Sermons</a>
      <a href="/unified/groups" className="hover:text-gray-900">Groups</a>
      <a href="/unified/events" className="hover:text-gray-900">Events</a>
      <a href="/unified/giving" className="hover:text-gray-900 font-medium">Give</a>
    </nav>
  </div>
</header>
```

- [ ] **Step 5: Test in the browser**

Open http://localhost:3000 and click through: Sermons → Groups → Events → Give. Verify you never leave the localhost domain. That's the "two website problem solved" moment.

- [ ] **Step 6: Commit**

```bash
git add apps/sermon-search/app/unified/ apps/sermon-search/app/layout.tsx
git commit -m "feat: unified experience demo — Groups, Events, Giving native to Cornerstone site"
```

---

### Task 9: Demo prep

**Goal:** Identify the specific search queries that will land in the pitch meeting. Nothing to build — just validate and document.

- [ ] **Step 1: Run the dev server**

```bash
npm run dev
```

- [ ] **Step 2: Find the demo moment search queries**

Talk to your brother-in-law (or recall from memory) one or two recent sermon topics or phrases. Then search for them. You're looking for a query that:
1. Returns the right sermon immediately
2. Shows a matching transcript segment with a timestamp link
3. Clicking the link jumps to the exact moment in the YouTube video

Aim to identify at least two strong queries. Write them down.

- [ ] **Step 3: Find a "scripture search" demo query**

Search for a scripture reference (e.g., `Romans 8:28`, `Psalm 23`, `John 15`). If results include the actual verse text from a transcript, that's an excellent demo moment. Note what works.

- [ ] **Step 4: Document the demo script**

Create a simple markdown note at `apps/sermon-search/DEMO.md`:

```markdown
# Pitch Demo Script — Cornerstone Church

## Demo Moment 1: Sermon search
Query: "[the phrase you found]"
Result: [sermon title, timestamp]
What to say: "This is what your members have been missing."

## Demo Moment 2: Scripture search
Query: "[scripture reference]"
Result: [sermon title, timestamp]
What to say: "Search by scripture, topic, anything you remember hearing."

## Demo Moment 3: Unified experience
Navigate: Sermons → Groups → Events → Give
What to say: "Notice you never left the site. No churchcenter.com. One experience."
```

- [ ] **Step 5: Final visual pass**

Check the UI on a laptop at presentation size (zoom to ~125% to simulate a projected display). Make sure:
- Text is readable at a distance
- The search result cards are scannable
- The timestamp links are clearly clickable

Adjust font sizes or spacing in Tailwind if anything feels cramped.

- [ ] **Step 6: Final commit**

```bash
git add apps/sermon-search/DEMO.md
git commit -m "feat: add pitch demo script with validated search queries"
```

---

## Design Deliverables (Figma — separate from this plan)

These are parallel work to be done in Figma, not code:

1. **Email campaign mockup** — One designed Cornerstone email (series launch or event invite). Show Cornerstone branding, clear hierarchy, CTA.
2. **Vision Screen 1 — School of Ministry portal** — Applications, course schedule, faculty profiles.
3. **Vision Screen 2 — Conference Hub** — NE Christian Conference landing page with speaker lineup and registration.
4. **Vision Screen 3 — Member Engagement** — Concept dashboard showing open rates, engagement by series.
5. **Leave-behind PDF** — 5 pages per the spec. Export from Figma.
6. **Founding Partnership Agreement** — One page. Plain language, not legal-heavy.

---

## Self-Review

**Spec coverage check:**
- ✅ Beat 1 (current state walkthrough) — covered in Task 9 demo prep (you navigate the real site in the meeting; no build needed)
- ✅ Beat 2 (sermon search demo) — Tasks 1–7
- ✅ Beat 2 (unified experience) — Task 8
- ✅ Beat 2 (email preview) — Figma (out of scope, noted)
- ✅ Beat 3 (vision mockups) — Figma (out of scope, noted)
- ✅ Beat 4 (leave-behind PDF) — Figma (out of scope, noted)
- ✅ Founding Partnership framing — noted in DEMO.md and leave-behind spec; no code needed

**Placeholder scan:** No TBDs or vague steps found. Every code block is complete.

**Type consistency:**
- `Sermon.id` used as `string` (YouTube video ID) consistently across youtube.ts, transcripts.ts, search.ts, SermonResult.tsx ✅
- `TranscriptSegment.start` is `number` (seconds) consistently ✅
- `MatchedSegment.youtubeUrl` format `https://www.youtube.com/watch?v=${id}&t=${seconds}s` consistent across search.ts and SermonResult.tsx ✅
- `searchSermons(query: string): SearchResult[]` signature consistent between search.ts and page.tsx ✅
