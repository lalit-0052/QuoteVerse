const url = "https://dummyjson.com/quotes/random";
const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
    const data = await getQuote();

    if (!data) {
        document.getElementById("quote").innerText = "UNABLE TO FETCH A QUOTE.";
        document.getElementById("author").innerText = "";
        return;
    }

    document.getElementById("quote").innerText = `"${data.quote}"`;
    document.getElementById("author").innerText = `- ${data.author}`;
});

async function getQuote() {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Network response was not OK");
        }

        const data = await res.json();

        return {
            quote: data.quote,
            author: data.author
        };

    } catch (err) {
        console.error(err);
        return null;
    }

    
}

