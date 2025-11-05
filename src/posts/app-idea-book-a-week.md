---
title: "App idea: book-a-week"
date: 2025-09-23
tags: software, books
---
Update: This post is a stupid idea. [I wrote a counter explaining why](/posts/a-counter-to-my-app-idea/).

I love the little boost of motivation finishing a book gives you. Since I read more than one book at a time (usually 2, nothing crazy), I try to have an even cadence of finishing books to "ride the wave" of motivation. I think this is a neat idea in theory, but in practice it rarely happens. Mostly because my reading habit is all over the place (it's called having a baby).

What I normally do when I start a book is count the pages, divide by a reasonable number (usually 7, 10 if it's a long one) and try to read that many pages every day. My personality type seems to enjoy a concrete goal, and when I get ahead of it, I can feel my motivation go up. 

So today I thought: why don't I build a little tool for this? Now, I know what you're thinking: why don't you use Goodreads? Let me tell you why: I absolutely despise it. I don't care about the social aspect of it, it has terrible UI (maybe it's changed now?) and it's owned by Amazon. Also, I don't need most of its features, I just need to track progress and calculate page counts. How hard can this be?

I'm writing this post to force myself to fully describe the problem and my proposed solution, hopefully it will help me determine if I should build it or not. Let's paint a scenario:

I'm reading two books right now:

1. Las Malas by Camila Sosa Villada
    - I'm on page 90 of 223, I have 133 pages left
    - I'd like to finish it by the end of the week, today is Tuesday so let's say I have 5 days left
    - I should read: `133 / 5 = 26.6` let's say 27 pages a day.
2. Inconmensurable by James Vincent
    - I'm on page 203 of 380, I have 177 pages left
    - I'd like to finish it by the end of next week, so I have `5 + 7 = 12` days left
    - I should read: `177 / 12 = 14.75` let's say 15 pages a day

When I reach my page count on book 1, I can either continue reading to get ahead on that goal or read book 2 to start making a dent on it. Either way, I would update the page counts and the daily goals would update accordingly.

The only data to input are a name, a finish-by date and the number of the last page read (OK, and also the total page count).

I think that's pretty much it. It's an easy enough to build proof of concept that I'm happy to go ahead and build it and see where it takes me, I'm sure I'll come up with more features along the way. I think the sooner I start using it myself, the better (I'm sort of already doing it with pen and paper).

On the technical side of things: I think this tool - which, let's be honest, is a glorified spreadsheet - could work really well as a local-first web application. I would probably want to use it on my phone, so I could make a PWA that you can install on your home screen. It's simple enough that I can build it with good old HTML+CSS+JS, no frameworks, no build steps, the way Tim intended it.

I don't see a reason to not give this a punt and see where it takes me. Thank you for the rubber ducking, I'll keep you blog-posted.
