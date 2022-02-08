const APIKey = "14adb44fdda9d21d1ca1df09d3f9c0b7";

let getApiMeteo = function (city) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric&lang=fr`;

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temp").innerHTML = data.main.temp + '°';
        document.getElementById("humidity").innerHTML = data.main.humidity + '%';
        document.getElementById("wind").innerHTML = data.wind.speed + 'km/h';
    }).catch((err) => console.log("erreur: " + err));
}

// ecoute evenement de button
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.getElementById('inputCity').value;
    getApiMeteo(ville);
});
 

