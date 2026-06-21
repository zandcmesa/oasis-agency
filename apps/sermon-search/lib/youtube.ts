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
