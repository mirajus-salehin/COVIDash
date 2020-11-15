fetch("https://api.covid19api.com/summary")
.then(res => res.json())
.then(data => {
    document.getElementById("tcon").setAttribute('data-Targetnum',data["Global"]["TotalConfirmed"])
    document.getElementById("tdeath").setAttribute('data-Targetnum',data["Global"]["TotalDeaths"])
    document.getElementById("trec").setAttribute('data-Targetnum',data["Global"]["TotalRecovered"])
})




