---
title: "TIL: RSS feed for a YouTube channel"
date: 2025-11-03
tags: til, rss
---

If you are like me and you're trying to move away from platform-owned feeds of information, here's how to get the RSS feed for a YouTube channel:

1. Go to the channel's page and inspect it (right click on the page, wording may change with browsers)
2. Search for `channel_id`, it will be in a `link` tag with `title="RSS"`
3. Copy the URL you see in the `href` attribute of said `link` tag. It will look like: `https://www.youtube.com/feeds/videos.xml?channel_id=[CHANNEL_ID]`
4. Paste that bad boy in your RSS reader of choice
5. Enjoy updates from your favourite channels without having YouTube bombard you with recommendations 👍

I could have sworn this was a less hidden feature in the past. Also, there are probably some clever RSS readers out there that if you paste the URL for the channel's page, they will look for this tag automatically. YMMV.
