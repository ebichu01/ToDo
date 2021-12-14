const quotes = [
  {
    quote: "The resst of the world may follow the rules But, I  must follow my heart.",
    author: "Coco",
  },
  {
    quote: "No mere hiding, I gotta seize my moment!",
    author: "Coco",
  },
  {
    quote: "Why is my reflection someone I don't know?",
    author: "Mulan",
  },
  {
    quote: "When will my reflection show who I am inside?",
    author: "Mulan",
  },
  {
    quote: "This town ain’t big enough for the two of us.",
    author: "Toy Story",
  },
  {
    quote: "Life is a little bit messy. We all make mistakes.",
    author: "Zootopia",
  },
  {
    quote: "You will always have me.",
    author: "Frozen",
  },
  {
    quote: "All I know is I won’t go speechless.",
    author: "Aladdin",
  },
  {
    quote: "Have you ever had that feeling when you can't stop smiling?",
    author: "Snoopy",
  },
  {
    quote: "Your heart pounds inside your chest?",
    author: "Snoopy",
  },
  {
    quote: "You still have enough time to make your dream come true.",
    author: "Peter Pan",
  },
  {
    quote: "Sometims the right path is not the easiest one.",
    author: "Pocahontas",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() *  quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;