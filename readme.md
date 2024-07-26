# Rock-Paper-Scissors Game

This is a simple implementation of the classic Rock-Paper-Scissors game in JavaScript. The game allows the user to play multiple rounds against the computer and displays the final results.

## Overview

The game is implemented using JavaScript, and the user interacts with it through the browser's console. The game consists of a specified number of rounds (default: 5), where each round involves the user making a choice and the computer randomly selecting a choice. The winner of each round is determined based on the traditional rules of Rock-Paper-Scissors.

## How to Play

1. **Open Your Browser Console:**
   - On macOS: Press `⌥` + `⌘` + `C`
   - On Windows/Linux: Press `Ctrl` + `Shift` + `J`

2. **Play the Game:**
   - When prompted in the console, enter your move using one of the following inputs:
     - `rock` for Rock
     - `paper` for Paper
     - `scissors` for Scissors

3. **Game Mechanics:**
   - The computer will randomly choose between Rock, Paper, or Scissors.
   - The winner of each round is determined based on the following rules:
     - Rock beats Scissors
     - Scissors beat Paper
     - Paper beats Rock

4. **Final Results:**
   - After all rounds are completed, the game will display the final score and announce the winner (or if it's a draw).

## Code Explanation

- **Variables:**
  - `choices`: Array of possible choices: Rock, Paper, Scissors.
  - `rounds`: Number of rounds to be played (default is 5).
  - `humanScore` and `computerScore`: Scores for the user and the computer.

- **Functions:**
  - `getHumanChoice()`: Prompts the user to enter their choice and validates it.
  - `getComputerChoice()`: Randomly selects a choice for the computer.
  - `playRound()`: Plays a single round, updates scores, and logs the result.

- **Game Loop:**
  - A `while` loop runs the `playRound()` function for the number of specified rounds.

- **Final Results:**
  - Displays the final score and determines the overall winner after all rounds are completed.

## Running the Game

1. Copy the provided JavaScript code into a file named `rps.js`.
2. Open a browser and navigate to any webpage.
3. Open the browser's console.
4. Paste and run the code in the console.

## Example

Here’s a snippet of the output you might see in the console:
Enter your move (r/p/s) : r
You : rock
Computer : scissors
You win! ROCK beats SCISSORS.
Enter your move (r/p/s) : p
You : paper
Computer : rock
You win! PAPER beats ROCK.
...
Your Score: 3
Computer's Score: 2
You Win !!!
