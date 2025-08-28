---
title: A Tricky Technical Test
date: 2025-04-17
tags: software
---
I recently had to do a technical test for a job that had such a well thought detail that I thought it was worth sharing. I won't share the name of the company nor the details of the test to respect their privacy.

The test asked you to get some data from a website (x-y coordinates and a unicode character), parse it and print it to the screen to form a message. Nothing crazy. I've done my fair share of technical tests and leet code problems, so whenever a problem feels easy I know there is a tricky detail hidden in the instructions. **Always** read the instructions twice before starting and a couple more times while you're solving the problem. Things that didn't make sense or looked innocent might change once you're in the thick of it.

The tricky detail in this test was in the example data they gave you. If you've done any [Advent of Code](https://adventofcode.com/) you've seen this pattern: the first example is simple, you can almost solve it in your head, but the second example is a relatively big chunk of input data to discourage you from brute forcing the problem. In this case the initial example printed on the screen a letter F:

```
█▀▀▀
█▀▀ 
█
```

But the big example printed this message:
```
   ███████░  ██░    ███░ ██░           ███░
 ███░    ██░ ██░  ███░   ███░   ███░   ██░ 
███░         ██░███░      ██░  █████░ ███░ 
██░          ████░        ███░ ██░██░ ██░  
███░         ██░███░       ██░██░ ██░██░   
 ███░    ██░ ██░  ███░     ████░   ████░   
   ███████░  ██░    ███░    ██░     ██░    
```

That looks like a good solution, right? The evil in the choice of this letters is that they are all symmetrical with respect to the horizontal axis, except the W, which when you flip it looks like an M:

```
   ███████░  ██░    ███░    ██░     ██░    
 ███░    ██░ ██░  ███░     ████░   ████░   
███░         ██░███░       ██░██░ ██░██░   
██░          ████░        ███░ ██░██░ ██░  
███░         ██░███░      ██░  █████░ ███░ 
 ███░    ██░ ██░  ███░   ███░   ███░   ██░ 
   ███████░  ██░    ███░ ██░           ███░
```

Why does this matter? At some point in the instructions, the test told me to pay attention to the orientation of the X and Y axis, but because I assumed it would be the classic (for computers) "X goes right, Y goes down", I didn't notice the Y axis increased up (like in maths). Luckily for me, I also tested the initial example and got:

```
█   
█▀▀ 
█▀▀▀
```

Which told me everything there was to know about my mistake.

I still can't decide if this detail is evil or genius. I've had to design problems like this in the past and it never occurred to me to get this clever. I imagine in our current AI-assisted programming world, little tricks like this will help you filter out the vibe coders.
