var apiKey = 'b037fd8fe9f4206069641c977e5c8752';

document.addEventListener('DOMContentLoaded', bindButtons);
var onTextFieldChange = function () {
    var cityTF = document.getElementById("cityInput");
    var zipTF = document.getElementById("zipCode");
    if (cityTF.value.length != 0)
        zipTF.disabled = true;
    if (zipTF.value.length != 0)
        cityTF.disabled = true;
    if (cityTF.value.length == 0 && zipTF.value.length == 0) {
        zipTF.disabled = false;
        cityTF.disabled = false;
    }
}

function bindButtons() {
    document.getElementById('zipCitySubmit').addEventListener('click', function (event) {
        var cityTF = document.getElementById("cityInput");
        var zipTF = document.getElementById("zipCode");
        if (cityTF.disabled == true) {
            var req = new XMLHttpRequest();
            var zip = zipTF.value;
            var request = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=" + apiKey;
            req.open('GET', request, true);
            req.addEventListener("load", function () {
                if (req.status >= 200 && req.status < 400) {
                    var response = JSON.parse(req.responseText);
                    console.log(response);
                    document.getElementById('CityName').textContent = response["name"];
                    document.getElementById('temperature').textContent = response["main"]["temp"];
                    document.getElementById('wind').textContent = response["wind"]["speed"];
                    document.getElementById('humidity').textContent = response["main"]["humidity"];
                } else
                    console.log("There was an error with your request, status code: " + req.statusText);
            });
            req.send(null);
            event.preventDefault();
        }
        else
        {
            var req = new XMLHttpRequest();
            var city = cityTF.value;
            var request = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&appid=" + apiKey;
            req.open('GET', request, true);
            req.addEventListener("load", function () {
                if (req.status >= 200 && req.status < 400) {
                    var response = JSON.parse(req.responseText);
                    console.log(response);
                    document.getElementById('CityName').textContent = response["name"];
                    document.getElementById('temperature').textContent = response["main"]["temp"];
                    document.getElementById('wind').textContent = response["wind"]["speed"];
                    document.getElementById('humidity').textContent = response["main"]["humidity"];
                } else
                    console.log("There was an error with your request, status code: " + req.statusText);
            });
            req.send(null);
            event.preventDefault();
        }

    })}





/**
 * Created by monroe on 11/6/2015.
 */
