const quotes = {
    "-George Clooney (July 2006)": '“My father gave me the best advice of my life. He said, ‘Whatever you do, don’t wake up at 65 years old and think about what you should have done with your life.'” ',
    "- J.M. Barrie  (August 1933)": '“Not in doing what you like, but in liking what you do is the secret of happiness.”',
    "-Katherine Mansfield (April 1941)": ' “Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can’t build on it; it’s only good for wallowing.”',
    "-Simone Biles (July/August 2020)": '“I’d rather regret the risks that didn’t work out than the chances I didn’t take at all.”',
    "-Jonathan Winters (June 1990)": '“If your ship doesn’t come in, swim out to it! "',
    "-Robert Mansell (August 1933)": '“A pessimist is one who makes difficulties out of his opportunities; an optimist is one who makes opportunities out of his difficulties.” ',
    "- Archbishop Desmond Tutu (January 2008)": '“My father used to say, ‘Don’t raise your voice. Improve your argument.',
    "-H.G. Wells  (June 1940)": ' “What on earth would a man do with himself if something did not stand in his way?”',
    "- Columbia Record (May 1925)": '"I attribute my success to this: I never gave or took any excuse."',
   
  };


document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

function generate(){
  // grab all the keys in the dictionary (authors) and store in an array
  const authors = Object.keys(quotes);
  // grab a random key (author) and store it in author
  const author = authors[Math.floor(Math.random() * authors.length)];
  // grab the value(quote) that belongs to that key
  const quote = quotes[author]

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
}

window.onload = function(){
  generate()
}
