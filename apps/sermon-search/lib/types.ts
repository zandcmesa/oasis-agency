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
