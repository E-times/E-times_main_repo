fetch("https://imdb8.p.rapidapi.com/title/find?q=pushpa", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "485ca3c6b5msh79ff5cbe55d35c9p1793acjsnf5da2d1c2de9"
	}
})
.then(response => response.json())
.then(response => {
    console.log(response.results[0].image);
    document.getElementById("render").innerHTML+=`
        <img src="${response.results[0].image.url}" height="440px" width="440px" />
    `;
})
.catch(err => {
	console.error(err);
});