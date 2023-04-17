function shortenUrl() {
    var longUrl = document.getElementById("long-url").value;
    var apiUrl = "https://api-ssl.bitly.com/v4/shorten";
    var accessToken = "7d5a0907c76038fff6614b85f7f70ced104012f1"; // Replace with your Bitly access token

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + accessToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "long_url": longUrl,
            "domain": "bit.ly"
        })
    })
        .then(response => response.json())
        .then(data => {
            var shortUrl = data.link;
            document.getElementById("short-url").href = shortUrl;
            document.getElementById("short-url").innerHTML = shortUrl;
        })
        .catch(error => console.error(error));
}
