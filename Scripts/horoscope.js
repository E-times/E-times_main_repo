var sign = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
    function res(sign) {
         
        fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`, {
            "method": "POST",
            "headers": {
            "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
            "x-rapidapi-key": "485ca3c6b5msh79ff5cbe55d35c9p1793acjsnf5da2d1c2de9"
            }
        })
        .then(response => response.json())
        .then((data) => {
             console.log(data);
            // console.log(data);
            // console.log(data.description);
            // console.log(data.compatibility);
            // console.log(data.mood);
            // console.log(data.color);
            // console.log(data.lucky_number);
            // console.log(data.lucky_time);
            var details = document.getElementById("details");
            details.innerHTML += `
                    <div class="row items">
                        <div class="col-12">
                            <div class="card">
                            <div class="card-header">
                                <img src="Assets/${sign}.jfif" width="60px" height="60px" class="image"/>
                                ${sign} &nbsp; ${data.date_range}
                            </div>
                                <div class="card-body">
                                    <p class="card-text"><b>Lucky Color:</b> &nbsp;${data.color}</p>
                                    <p class="card-text"><b>Lucky Number:</b> &nbsp;${data.lucky_number}</p>
                                    <p class="card-text"><b>Lucky Time:</b> &nbsp;${data.lucky_time}</p>
                                    <p class="card-text"><b>Mood:</b> &nbsp;${data.mood}</p>
                                    <p class="card-text"><b>Compatibility:</b> &nbsp;${data.compatibility}</p>
                                    <p class="card-text"><b>Description:</b> &nbsp;${data.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            })
        .catch(err => {
            console.error(err);
        });     
    }
    for(var i=0; i<sign.length; i++) {
        res(sign[i])
    }