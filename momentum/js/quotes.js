const quotes = [
    {
        quote: "The only limits in life are the ones we set for ourselves.",
        author: "Unknown",

    },
    {
        quote: "Embrace the unknown, for it is the birthplace of opportunity.",
        author: "Lao Tzu",

    },
    {
        quote: "In the end, we only regret the chances we didn't take.",
        author: "Lewis Carroll",

    },
    {
        quote: "To see the world, one must first find the courage to open their eyes.",
        author: "Paulo Coelho",

    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",

    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",

    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",

    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker",

    },
    {
        quote: "You cannot change what you are, only what you do.",
        author: "Philip Pullman",

    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",

    }
]

const quoteSpan = document.querySelector("#quote span:first-child");
const authorSpan = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quoteSpan.innerText = todaysQuote.quote;
authorSpan.innerText = todaysQuote.author;