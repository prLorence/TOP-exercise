# Tic-Tac-Toe

---

**During the creation of this game, there were two bugs that I encountered:**

1. When the one of the players win, it announces the winner, but when I pressed play again, it displays the next turn but the game don't run, so it's most likely it's a display bug.

    *The fix:*

    I moved `runGame` to public scope of the module, and set it to `false` so pressing play button would only activate it.

2. This is similar to the first bug, when the game results into a tie, and then press the play button again, the next turn will also display.

    *The fix:*

    I redeclared the variable and conditions of `tieResult` from `evalResult()` into `play()`, I feel like this is not the most optimized or recommended solution, but it works. I'll revisit this project when my skills have gone up to intermediate.

What have I learned or understood:

- When using module pattern, return only what's needed to be displayed onto DOM.
- It's okay to use brute force solutions (dumbest solutions you can think of.), as long as it works, it works.
- I definitely understood how closures work, but I should still practice on it.
- I learned how to plan strategically, but I should still improve on it.

**[Live Demo](https://prlorence.github.io/TOP-exercise/tic-tac-toe/)** here 
