var apiKey = 'b037fd8fe9f4206069641c977e5c8752';

document.addEventListener('DOMContentLoaded', bindButton);

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
};

var formNotFilledOut = function () {
    if (document.getElementById('firstName').value != '' &&
        document.getElementById('lastName').value != '' &&
        document.getElementById('streetNumber').value != '' &&
        document.getElementById('streetName').value != '' &&
        document.getElementById('cityA').value != '' &&
        document.getElementById('stateCode').value != '' &&
        document.getElementById('zipCd').value != '')
        document.getElementById("addressSubmit").disabled = false;
    else
        document.getElementById("addressSubmit").disabled = true;

}

function bindButton() {
    document.getElementById('zipCitySubmit').addEventListener('click', function (event) {
        var cityTF = document.getElementById("cityInput");
        var zipTF = document.getElementById("zipCode");
        if (cityTF.disabled == true && zipTF.disabled == false) {
            var req = new XMLHttpRequest();
            var zip = zipTF.value;
            var request = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=" + apiKey;
            req.open('GET', request, true);
            req.addEventListener("load", function () {
                var response = JSON.parse(req.responseText);
                if (parseInt(response["cod"]) >= 200 && parseInt(response["cod"]) < 400) {
                    console.log(response);
                    document.getElementById('CityName').textContent = response["name"];
                    var temp = response["main"]["temp"];
                    temp = parseFloat(temp)*1.8-459.67;
                    temp = String(temp).concat(' ').concat('\u00B0').concat('f');
                    document.getElementById('temperature').textContent = temp;
                    document.getElementById('wind').textContent = String(response["wind"]["speed"]).concat(' m/s');
                    document.getElementById('humidity').textContent = String(response["main"]["humidity"]).concat('%');
                    document.getElementById('weatherDiv').hidden = false;
                    document.getElementById('addressDiv').hidden = true;
                } else
                    alert("There was an error with your request, status code: " + response["message"]);
            });
            req.send(null);
            event.preventDefault();
        }
        else if (cityTF.disabled == false && zipTF.disabled == true) {
            var req = new XMLHttpRequest();
            var city = cityTF.value;
            var request = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&appid=" + apiKey;
            req.open('GET', request, true);
            req.addEventListener("load", function () {
                var response = JSON.parse(req.responseText);
                if (parseInt(response["cod"]) >= 200 && parseInt(response["cod"]) < 400) {
                    console.log(response);
                    document.getElementById('CityName').textContent = response["name"];
                    var temp = response["main"]["temp"];
                    temp = parseFloat(temp)*1.8-459.67;
                    temp = String(temp).concat(' ').concat('\u00B0').concat('f');
                    document.getElementById('temperature').textContent = temp;
                    document.getElementById('wind').textContent = String(response["wind"]["speed"]).concat(' m/s');
                    document.getElementById('humidity').textContent = String(response["main"]["humidity"]).concat('%');
                    document.getElementById('weatherDiv').hidden = false;
                    document.getElementById('addressDiv').hidden = true;
                } else {
                    alert("There was an error with your request, status code: " + response["message"]);
                }

            });
            req.send(null);
            event.preventDefault();
        }
        else {
            event.preventDefault();
            alert("You must fill out the entire form!");
        }

    });
    document.getElementById('addressSubmit').addEventListener('click', function (event) {

            var req = new XMLHttpRequest();
            var payload = {
                firstName: null, lastName: null, streetNumber: null, streetName: null,
                cityName: null, stateCode: null, zipCode: null
            };
            payload.firstName = document.getElementById('firstName').value;
            payload.lastName = document.getElementById('lastName').value;
            payload.streetNumber = document.getElementById('streetNumber').value;
            payload.streetName = document.getElementById('streetName').value;
            payload.cityName = document.getElementById('cityA').value;
            payload.stateCode = document.getElementById('stateCode').value;
            payload.zipCode = document.getElementById('zipCd').value;
            console.log(payload);
            req.open('POST', 'http://httpbin.org/post', true);
            req.setRequestHeader('Content-Type', 'application/json');
            req.addEventListener('load', function () {
                if (req.status >= 200 && req.status < 400) {
                    var response = JSON.parse(req.responseText);
                    console.log(response);
                    response = JSON.parse(response.data);
                    var string1 = String(response["firstName"]);
                    string1 = string1.concat(' ').concat(String(response["lastName"]));
                    document.getElementById('nameConcat').textContent = string1;
                    var string2 = String(response["streetNumber"]);
                    string2 = string2.concat(' ').concat(String(response["streetName"]));
                    document.getElementById('addressLine1').textContent = string2;
                    var string3 = String(response["cityName"]);
                    string3 = string3.concat(", ").concat(String(response["stateCode"])).concat(' ').concat(String(response["zipCode"]));
                    document.getElementById("addressLine2").textContent = string3;
                    document.getElementById('weatherDiv').hidden = true;
                    document.getElementById('addressDiv').hidden = false;
                } else {
                    console.log("There was an error with your request, status code: " + req.statusText);
                }

            });
            req.send(JSON.stringify(payload));
            event.preventDefault();

    });
}


/**
 * Created by monroe on 11/6/2015.
 */
