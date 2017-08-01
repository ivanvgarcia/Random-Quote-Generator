var quotes = [
	"If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
	"Spend your money on the things money can buy. Spend your time on the things money can't buy.",
	"Everyone may be ordinary, but they're not normal.",
	"Whiskey, like a beautiful woman, demands appreciation. You gaze first, then it's time to drink.",
	"If you can love someone with your whole heart, even one person, then there's salvation in life. Even if you can't get together with that person.",
	"I can bear any pain as long as it has meaning.",
	"That's what the world is, after all: an endless battle of contrasting memories.",
	"You can hide memories, but you can't erase the history that produced them."
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

