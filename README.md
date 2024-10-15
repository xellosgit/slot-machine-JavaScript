# 🎰 Slot Machine Game

## Project Overview
This is a **console-based slot machine game** built with Node.js. The game allows users to deposit money, place bets on multiple lines, spin the slot machine, and win or lose based on the generated symbols. The game continues as long as the user has a positive balance and chooses to play again.

---

## Features
1. **Deposit Money**: Users can deposit an initial amount to start the game.
2. **Select Betting Lines**: Players can choose how many lines to bet on (1-3).
3. **Place Bets**: A bet per line is placed, validated against the user’s available balance.
4. **Spin the Reels**: Random symbols are generated for each reel.
5. **Check Winnings**: If all symbols on a line match, the player wins based on the symbol value.
6. **Play Again or Exit**: After each round, players can decide to continue or end the game.

---

## Technologies Used
- **Node.js**: Runtime environment for running JavaScript on the server.
- **prompt-sync**: A library for capturing synchronous input from the command line.

---

## How It Works
1. **Input Validation**: All inputs (like deposit amount, bet, and number of lines) are checked for validity. Invalid inputs prompt the user to try again.
2. **Randomized Symbols**: The slot machine randomly selects symbols for each reel based on predefined symbol counts.
3. **Transpose Reels to Rows**: The reels are transformed into rows for easier display and evaluation of results.
4. **Calculate Winnings**: Matching symbols on selected lines award winnings, which are added to the user’s balance.
5. **Game Loop**: The game continues until the user either runs out of money or chooses to quit.

---
