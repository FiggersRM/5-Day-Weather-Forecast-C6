var srchInput = document.getElementById("city-input");
var srchBtn = document.getElementById("searchBtn");
var weatherCont = document.getElementById('weatherCont')
var cityHeader = document.getElementById("cityHeader");
var tempP = document.getElementById("tempP");
var windP = document.getElementById("windP");
var hmdtyP = document.getElementById("hmdtyP");

function searchWeather(event) {
  var currentUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    srchInput.value +
    "&units=imperial&appid=a0404608fb364a2756d8033d242aac8c";
  console.log(currentUrl);
  fetch(currentUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.dt);
      var weatherIcon = document.createElement('img');
      weatherIcon.src = "openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
      console.log(weatherIcon);
      // console.log(dayjs(data.list[0].dt_txt).format("M-D-YYYY"));
      cityHeader.innerHTML += ': ' + dayjs.unix(data.dt).format("M-D-YYYY");
      cityHeader.innerHTML += weatherIcon;
      tempP.innerHTML += ' ' + data.main.temp + ' °F';
      windP.innerHTML += ' ' + data.wind.speed + " MPH";
      hmdtyP.innerHTML += ' ' + data.main.humidity + "%";
      weatherCont.setAttribute('style', 'display: normal');
    });
    var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + srchInput.value + '&units=imperial&appid=a0404608fb364a2756d8033d242aac8c';
    fetch(forecastUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

    })
}

srchBtn.addEventListener("click", searchWeather);
