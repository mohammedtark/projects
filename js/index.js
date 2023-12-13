function randomText() {
  var quotes = [
    {
      text: "You miss 100% of the shots you don't take.",
      author: "--Wayne Gretzy",
    },
    {
      text: "'It's not what happens to you, but how you react to it that matters.'",
      author: "--Epictetus",
    },
    {
      text: "'Do not take life too seriously. You will not get out alive.'",
      author: "--Elbert Hubbard",
    },
    {
      text: "'Resentment is like drinking poison and waiting for your enemies to die.'",
      author: "--Nelson Mandela",
    },
    {
      text: "'The best revenge is massive success.'",
      author: "--Frank Sinatra",
    },
  ];

  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteOutput").textContent = randomQuote.text;
  document.getElementById("authorOutput").textContent = randomQuote.author;
}
