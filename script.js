var srchInput = document.getElementById("city-input");
var srchBtn = document.getElementById("searchBtn");
var weatherCont = document.getElementById("weatherCont");
var cityHeader = document.getElementById("cityHeader");
var tempP = document.getElementById("tempP");
var windP = document.getElementById("windP");
var hmdtyP = document.getElementById("hmdtyP");
var cardCont = document.getElementById("cardCont");
var cityBtnCont = document.getElementById("cityBtnCont");
var savedCitiesHdr = document.getElementById("savedCities");
var cityStor = JSON.parse(localStorage.getItem("cityStor")) || [];

function searchWeather(event) {
  cityHeader.innerHTML = "";
  tempP.innerHTML = "";
  windP.innerHTML = "";
  hmdtyP.innerHTML = "";
  cardCont.innerHTML = "";
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
      weatherCont.setAttribute("style", "display:normal");
      var weatherIcon = document.createElement("img");
      weatherIcon.src =
        "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      cityHeader.innerHTML +=
        srchInput.value + ": " + dayjs.unix(data.dt).format("M-D-YYYY");
      cityHeader.appendChild(weatherIcon);
      tempP.innerHTML += "Temperature: " + data.main.temp + " °F";
      windP.innerHTML += "Wind: " + data.wind.speed + " MPH";
      hmdtyP.innerHTML += "Humidity " + data.main.humidity + "%";
      weatherCont.setAttribute("style", "display: normal");
    });
  var forecastUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    srchInput.value +
    "&units=imperial&appid=a0404608fb364a2756d8033d242aac8c";
  fetch(forecastUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 7; i < data.list.length; i += 8) {
        var cardDiv = document.createElement("div");
        cardDiv.setAttribute(
          "class",
          "card col-2 mb-3 mx-auto border border-2 border-info pt-2"
        );
        var cardh5 = document.createElement("h5");
        cardh5.innerHTML = dayjs(data.list[i].dt_txt).format("dddd");
        var wthrIcon = document.createElement("img");
        wthrIcon.src =
          "https://openweathermap.org/img/w/" +
          data.list[i].weather[0].icon +
          ".png";
        cardh5.appendChild(wthrIcon);
        var cardTemp = document.createElement("p");
        cardTemp.innerHTML = "Temperature: " + data.list[i].main.temp + " °F";
        var cardWind = document.createElement("p");
        cardWind.innerHTML = "Wind: " + data.list[i].wind.speed + " MPH";
        cardHmdty = document.createElement("p");
        cardHmdty.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
        cardDiv.appendChild(cardh5);
        cardDiv.appendChild(cardTemp);
        cardDiv.appendChild(cardWind);
        cardDiv.appendChild(cardHmdty);
        cardCont.appendChild(cardDiv);
      }
    });
  savedCitiesHdr.setAttribute("style", "display: normal");
  var newCityBtn = document.createElement("button");
  newCityBtn.setAttribute("type", "button");
  newCityBtn.setAttribute("class", "btn btn-outline-info my-1 col-12 cityBtn");
  newCityBtn.innerHTML = srchInput.value;
  cityStor.push(srchInput.value);
  localStorage.setItem("cityStor", JSON.stringify(cityStor));
  cityBtnCont.appendChild(newCityBtn);
  newCityBtn.addEventListener("click", btnSearchWeather);
}

srchBtn.addEventListener("click", searchWeather);
console.log(cityStor);
for (var i = 0; i < cityStor.length; i++) {
  savedCitiesHdr.setAttribute("style", "display: normal");
  var newCityBtn = document.createElement("button");
  newCityBtn.setAttribute("type", "button");
  newCityBtn.setAttribute("class", "btn btn-outline-info my-1 col-12 cityBtn");
  newCityBtn.innerHTML = cityStor[i];
  cityBtnCont.appendChild(newCityBtn);
  newCityBtn.addEventListener("click", btnSearchWeather);
}
function btnSearchWeather(event) {
  cityHeader.innerHTML = "";
  tempP.innerHTML = "";
  windP.innerHTML = "";
  hmdtyP.innerHTML = "";
  cardCont.innerHTML = "";
  var cityName = this.innerHTML
  var currentUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    this.innerHTML +
    "&units=imperial&appid=a0404608fb364a2756d8033d242aac8c";
  console.log(currentUrl);
  fetch(currentUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.dt);
      weatherCont.setAttribute("style", "display:normal");
      var weatherIcon = document.createElement("img");
      weatherIcon.src =
        "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      cityHeader.innerHTML +=
        cityName + ": " + dayjs.unix(data.dt).format("M-D-YYYY");
      cityHeader.appendChild(weatherIcon);
      tempP.innerHTML += "Temperature: " + data.main.temp + " °F";
      windP.innerHTML += "Wind: " + data.wind.speed + " MPH";
      hmdtyP.innerHTML += "Humidity " + data.main.humidity + "%";
      weatherCont.setAttribute("style", "display: normal");
    });
  var forecastUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    this.innerHTML +
    "&units=imperial&appid=a0404608fb364a2756d8033d242aac8c";
  fetch(forecastUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 7; i < data.list.length; i += 8) {
        var cardDiv = document.createElement("div");
        cardDiv.setAttribute(
          "class",
          "card col-2 mb-3 mx-auto border border-2 border-info pt-2"
        );
        var cardh5 = document.createElement("h5");
        cardh5.innerHTML = dayjs(data.list[i].dt_txt).format("dddd");
        var wthrIcon = document.createElement("img");
        wthrIcon.src =
          "https://openweathermap.org/img/w/" +
          data.list[i].weather[0].icon +
          ".png";
        cardh5.appendChild(wthrIcon);
        var cardTemp = document.createElement("p");
        cardTemp.innerHTML = "Temperature: " + data.list[i].main.temp + " °F";
        var cardWind = document.createElement("p");
        cardWind.innerHTML = "Wind: " + data.list[i].wind.speed + " MPH";
        cardHmdty = document.createElement("p");
        cardHmdty.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
        cardDiv.appendChild(cardh5);
        cardDiv.appendChild(cardTemp);
        cardDiv.appendChild(cardWind);
        cardDiv.appendChild(cardHmdty);
        cardCont.appendChild(cardDiv);
      }
    });
}
