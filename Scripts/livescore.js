function renderScore() {
    var date = document.getElementById("date").value;
    console.log(date);
    fetch(`https://cricket-live-data.p.rapidapi.com/fixtures-by-date/${date}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "cricket-live-data.p.rapidapi.com",
            "x-rapidapi-key": "485ca3c6b5msh79ff5cbe55d35c9p1793acjsnf5da2d1c2de9"
        }
    })
    .then(response => response.json())
    .then(response => {
        // console.log(response.results.length);
        for(var i=0; i<response.results.length; i++) {
            if(response.results[i].series_id==833) {
                console.log(response.results[i]);
            }
            var cardsRendering = document.getElementById("rendercardscores");
            cardsRendering.innerHTML += `

            `;
        }
    })
}


