"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

const quotes = [
    {
        quote: "All hands! Abandon ship!",
        author: "Captain Picard",
    },
    {
        quote: "Doh!",
        author: "Homer Simpson",
    },
    {
        quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
        author: "Eric Schmidt",
    },
    {
        quote: "I think, therefore I am.",
        author: "René Descartes",
    },
    {
        quote: "To be, or not to be: that is the question.",
        author: "William Shakespeare",
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt ",
    },
    {
        quote: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Everything has beauty, but not everyone sees it.",
        author: "Confucius",
    },
    {
        quote: "If you are going through hell, keep going.",
        author: "Sir Winston Churchill",
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu",
    },
    {
        quote: "I’d rather be dead than cool.",
        author: "Kurt Cobain",
    },
    {
        quote: "We are all apprentices in a craft where no one ever becomes a master.",
        author: "Ernest Hemmingway",
    },
    {
        quote: "There is nothing to writing. All you do is sit down at a typewriter and bleed.",
        author: "William Faulkner",
    },
    {
        quote: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
        author: "Stephen King",
    },
    {
        quote: "All animals are equal, but some animals are more equal than others.",
        author: "George Orwell",
    },
    {
        quote: "Programming isn't about what you know. It's about what you can figure out.",
        author: "Chris Pine",
    },
    {
        quote: "Code never lies, comments sometimes do.",
        author: "Ron Jeffries",
    },
    {
        quote: "Everybody should learn to program a computer because it teaches you how to think.",
        author: "Steve Jobs",
    },
    {
        quote: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
        author: "Linus Torvalds",
    },
    {
        quote: "The universe is change; our life is what our thoughts make it.",
        author: "Marcus Aurelius",
    },
    {
        quote: "Be tolerant with others, and strict with yourself.",
        author: "Marcus Aurelius",
    },
    {
        quote: "Think of yourself as dead. You have lived your life. Now take what's left and live it properly.",
        author: "Marcus Aurelius",
    },
]


function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 60000);
}

async function getRandomImage() {
    const endpoint = "http://localhost:8080/api/v1/getRandomImage";
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.data;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
    } catch (error) {
        console.error(error);
    }
}

loopThroughQuotes();
getRandomImage();