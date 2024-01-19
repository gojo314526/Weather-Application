var inputval = document.getElementById("cityinput");
var btn = document.getElementById("add");
var city = document.getElementById("cityoutput");
var descrip = document.getElementById("description");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");

apik = "API key";
function convertion(val) {
  return (val - 273).toFixed(2);
}

function submit() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    .then((data) => {
      var nameval = data["name"];
      var descrip = data["weather"]["0"]["description"];
      var tempature = data["main"]["temp"];
      var wndspd = data["wind"]["speed"];

      city.innerHTML = `City: ${nameval}`;
      temp.innerHTML = `Temperature: ${convertion(tempature)} °C`;
      description.innerHTML = `Conditions: ${descrip}`;
      wind.innerHTML = `Wind Speed: ${wndspd} km/h`;
    })
    .catch((err) => {
      document.getElementById("err").innerHTML = "Wrong city name";
    });
}

btn.addEventListener("click", submit);
