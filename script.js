const quotes = {
    "- Jim Rohn": '"Either you run the day, or the day runs you."',
    "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right."',
    "- Frank Sinatra": '"The best revenge is massive success."',
    "- Zig Ziglar": '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."',
    "- Aristotle": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
    "- Jesus": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
    "- Ralph Waldo Emerson": '"The only person you are destined to become is the person you decide to be."',
    "- Henry David Thoreau": '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
    "- Erma Bombeck": '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
    "- Booker T. Washington": '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."'
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
