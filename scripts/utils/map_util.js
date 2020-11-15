var proxyURL = "https://cors-anywhere.herokuapp.com/"
var baseURL = "http://covid19tracker.gov.bd/api/country/latest?onlyCountries=true&iso3="


var mymap = L.map('mapid').setView([51.505, -0.09], 13);


var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);




for (let i = 0; i <= countriesData.length; i++) {
    fetch(baseURL + countriesData[i]["iso3"])
        .then(res => res.json())
        .then(data => {
            var circle = L.circle([data[i]["latitude"], data[i]["longitude"]], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 1000
            }).addTo(mymap);
        })
        .catch(err =>{})
}
