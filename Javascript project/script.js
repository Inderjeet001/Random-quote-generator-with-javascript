const quoteBox = document.getElementById("quote-box");
const text = document.getElementById("text");
const author = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Dwayne Johnson"
  },
  {
    text: "Dream bigger. Do bigger.",
    author: "Robin Sharma"
  }
];

function getRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  text.textContent = randomQuote.text;
  author.textContent = randomQuote.author;
}

newQuoteButton.addEventListener("click", getRandomQuote);

getRandomQuote();