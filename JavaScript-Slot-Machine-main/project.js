const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = { A: 2, B: 4, C: 6, D: 8 };
const SYMBOL_VALUES = { A: 5, B: 4, C: 3, D: 2 };

// === Введення даних з валідацією ===
const promptValidatedNumber = (message, condition) => {
  while (true) {
    const input = parseFloat(prompt(message));
    if (!isNaN(input) && condition(input)) return input;
    console.log("Invalid input, try again.");
  }
};

const deposit = () =>
  promptValidatedNumber("Enter a deposit amount: ", (amount) => amount > 0);

const getNumberOfLines = () =>
  promptValidatedNumber(
    "Enter the number of lines to bet on (1-3): ",
    (lines) => lines >= 1 && lines <= 3
  );

const getBet = (balance, lines) =>
  promptValidatedNumber(
    "Enter the bet per line: ",
    (bet) => bet > 0 && bet <= balance / lines
  );

// === Генерація ігрових даних ===
const generateSymbols = () =>
  Object.entries(SYMBOLS_COUNT).flatMap(([symbol, count]) =>
    Array(count).fill(symbol)
  );

const spinReels = () => {
  const symbols = generateSymbols();
  return Array.from({ length: COLS }, () => {
    const reelSymbols = [...symbols];
    return Array.from({ length: ROWS }, () => {
      const idx = Math.floor(Math.random() * reelSymbols.length);
      return reelSymbols.splice(idx, 1)[0];
    });
  });
};

const transpose = (reels) =>
  Array.from({ length: ROWS }, (_, i) => reels.map((reel) => reel[i]));

// === Вивід та підрахунок виграшів ===
const printRows = (rows) => rows.forEach((row) => console.log(row.join(" | ")));

const calculateWinnings = (rows, bet, lines) =>
  rows
    .slice(0, lines)
    .reduce(
      (total, row) =>
        row.every((symbol) => symbol === row[0])
          ? total + bet * SYMBOL_VALUES[row[0]]
          : total,
      0
    );

// === Основна логіка гри ===
const game = () => {
  let balance = deposit();

  while (balance > 0) {
    console.log(`You have a balance of $${balance}`);
    const lines = getNumberOfLines();
    const bet = getBet(balance, lines);

    balance -= bet * lines;
    const reels = spinReels();
    const rows = transpose(reels);

    printRows(rows);
    const winnings = calculateWinnings(rows, bet, lines);

    balance += winnings;
    console.log(`You won $${winnings}`);

    if (balance <= 0) {
      console.log("You ran out of money!");
      break;
    }

    const playAgain = prompt("Do you want to play again (y/n)? ");
    if (playAgain.toLowerCase() !== "y") break;
  }
};

game();
