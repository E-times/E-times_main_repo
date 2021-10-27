function render() {
	var city = document.getElementById("search").value;
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93f26e3c57081a6210de53b8dcfdfea4`, {
	"method": "GET",
})
.then(response => response.json())
.then(data => {
    console.log(data);
	var temp = data.main.temp;
	temp = temp -  273.15;
	temp = temp.toFixed(2);
	var wea = data.weather[0].main;
	var pressure = data.main.pressure;
	var humidity = data.main.humidity;
	var wind_speed = data.wind.speed;
	var visibility = data.visibility;
	document.getElementById("render").innerHTML= 
	`
	<div class="card row offset-2 col-6" style="margin-bottom: 2%; background-color: #C0C0C0">
		<div class="col-6">
			<div class="row" style="border-bottom: 2px solid gray; margin-bottom: 2%">
				<div class="offset-1 col-4">
					City Name
				</div>
				<div class="col-6" >
					${city}
				</div>
			</div>
			<div class="row" style="border-bottom: 2px solid gray; margin-bottom: 2%">
				<div class="offset-1 col-4">
					Temperature
				</div>
				<div class="col-6" >
					${temp}°C
				</div>
			</div>
			<div class="row" style="border-bottom: 2px solid gray; margin-bottom: 2%">
				<div class="offset-1 col-4">
					Pressure
				</div>
				<div class="col-6" >
					${pressure}
				</div>
			</div>
			<div class="row" style="border-bottom: 2px solid gray; margin-bottom: 2%">
				<div class="offset-1 col-4">
					Humidity
				</div>
				<div class="col-6" >
					${humidity}
				</div>
			</div>
			<div class="row" style="border-bottom: 2px solid gray; margin-bottom: 2%">
				<div class="offset-1 col-4">
					Wind Speed
				</div>
				<div class="col-6">
					${wind_speed}
				</div>
			</div>
			<div class="row" style="border-bottom: 2px solid gray; margin-bottom: 2%">
				<div class="offset-1 col-4">
					Visibility
				</div>
				<div class="col-6">
					${visibility}
				</div>
			</div>
			<div class="row" style="border-bottom: 2px solid gray; margin-bottom: 2%">
				<div class="offset-1 col-4">
					CSS
				</div>
				<div class="col-6">
					${wea}
				</div>
			</div>
		</div>
		<div class="col-6 offset-6 ${wea}" style="margin-left:65%">
		</div>
	</div>
	`;
})
.catch(err => {
	console.error(err);
});
}