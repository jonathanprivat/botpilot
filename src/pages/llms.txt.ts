import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const llmsTxt = `# BotPilot
> Hands-free Instagram engagement for Android

BotPilot is an on-device Android app that automates Instagram engagement. It runs directly on the user's phone using the Accessibility Service — not in the cloud. No passwords are shared and no data leaves the device.

## Key Facts
- Platform: Android 10+
- Price: Free
- Root required: No
- Cloud required: No
- Password required: No

## Four Modes
- Stories: Opens story circles, watches them, reacts with emojis, likes, replies with random GIFs
- Feed: Scrolls home/following feed, likes posts, drops GIF comments, likes other people's comments
- Location: Searches any Instagram location and browses tagged posts and stories
- Hashtag: Searches any hashtag, browses the post grid, and engages with content

## Interaction Controls
- Likes: Adjustable rate slider (0-100%)
- GIF Reacts: Posts random trending GIF from Instagram's built-in picker as comments
- Comment Likes: Opens comments, scrolls past pinned, likes 1-3 random comments
- Emoji Reacts: Taps random emoji reaction on stories (laughing, love, fire, surprised, crying, clapping)
- Max Items: Cap total items processed per session
- Smart Speed Modes: Ultra Fast (0.5-1.2s), Fast (1-2.5s), Normal (2-4s), Slow (4-7s), Super Slow (7-12s)

## Privacy & Security
- Never requires Instagram password
- Uses the real Instagram app already logged in on the phone
- Works with two-factor authentication
- No screenshots taken
- No server connections made
- No analytics sent anywhere

## Links
- Website: https://botpilot.org
`;

  return new Response(llmsTxt.trim(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
