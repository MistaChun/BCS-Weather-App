// c543fa557241faac65ab0fa1ecef4fd3
var button = $("#button");
var search = $("city-input");
var cities = ["Los Angeles", "New York City", "Houston","Miami"];
var date = new Date();
var newDate = date.toLocaleDateString();

button.on("click", function(event){
    event.preventDefault();
    var cityName = search.val();
    var QueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=c543fa557241faac65ab0fa1ecef4fd3";
    $.ajax({
        url: QueryURL,
        method: "GET"
        }).then(function(response) {
        console.log(response);
        $("#display").empty();
        var weather = $("#display");
        $(".container").prepend(".smallcontainer");
        var input = $("<input>").text(response.name + " ( " + newDate + " ) ");
        var divTemp = $("<div>").text("temperature: " + response.main.temp_max);
        var divSpeed = $("div").text("speed: " + response.main.speed);
        var divHumidity = $("div").text("humidity: " + response.main.humidity + "%");
        var divUVindex = $("div").text("UV index: " + response.wind.gust);

        var weatherIcon = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        weatherinfo.append(input, "<img src=" + weatherIcon + ">");
        weatherinfo.append(divTemp);
        weatherinfo.append(divSpeed);
        weatherinfo.append(divHumidity);
        weatherinfo.append(divUVindex);
        var newStr = cityName.replace(/ /g, "");
            $("#display").empty();

            var weatherinfo = $("#display");
            var input = $("<input>").text(response.name + " ( " + newdate + " )");
            var divTemp = $("<div>").text("temp_max: " + response.main.temp_max + " °F");
            var divSpeed = $("<div>").text("speed: " + response.wind.speed + " MPH");
            var divHumidity = $("<div>").text("humidity: " + response.main.humidity + "%");
            var divUVindex = $("<div>").text("UV index: " + response.wind.gust);

            var weathericon = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
            weatherinfo.append(input, "<img src=" + weathericon + ">");
            weatherinfo.append(divTemp);
            weatherinfo.append(divSpeed);
            weatherinfo.append(divHumidity);
            weatherinfo.append(divUVindex);

            var cityid = response.sys.id;
        });

        var cityid = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&APPID=0c23eeb4c2d4069fceccdac2c0ed3d35&units=imperial";


        $.ajax({
            url: cityid,
            method: "GET"
        }).then(function (city) {

            //day number 1
            $("#row1").empty();
            var city1 = $("#row1");

            var divTemp = $("<div>").text(city.list[0].dt_txt);
            var weatherIcon = "https://openweathermap.org/img/w/" + city.list[0].weather[0].icon + ".png";

            var divHumidity = $("<div>").text(city.list[0].main.temp + " °F");
            var divUVindex = $("<div>").text(city.list[0].main.humidity + "%");
            city1.append(divTemp);
            city1.append("<img src=" + weatherIcon + ">");
            city1.append(divHumidity);
            city1.append(divUVindex);

            // day number 2
            $("#row2").empty();
            var city2 = $("#row2");
            var c1 = $("<div>").text(city.list[8].dt_txt);
            var weatherIcon = "https://openweathermap.org/img/w/" + city.list[8].weather[0].icon + ".png";

            var c2 = $("<div>").text(city.list[8].main.temp + " °F");
            var c3 = $("<div>").text(city.list[8].main.humidity + "%");
            city2.append(a1);

            city2.append("<img src=" + weatherIcon + ">");
            city2.append(a2);
            city2.append(a3);
            // day number 3
            $("#row3").empty();
            city3 = $("#row3");
            var d1 = $("<div>").text(city.list[16].dt_txt)

            var weatherIcon = "https://openweathermap.org/img/w/" + city.list[16].weather[0].icon + ".png";

            var d2 = $("<div>").text(city.list[16].main.temp + " °F");
            var d3 = $("<div>").text(city.list[16].main.humidity + "%");
            city3.append(b1);
            city3.append("<img src=" + weatherIcon + ">");
            city3.append(b2);
            city3.append(d3);
            // day number 4
            $("#row4").empty();
            city4 = $("#row4");
            var c1 = $("<div>").text(city.list[24].dt_txt)

            var weatherIcon = "https://openweathermap.org/img/w/" + city.list[24].weather[0].icon + ".png";

            var c2 = $("<div>").text(city.list[24].main.temp + " °F");
            var c3 = $("<div>").text(city.list[24].main.humidity + "%");
            city4.append(c1);
            city4.append("<img src=" + weatherIcon + ">");
            city4.append(c2);
            city4.append(c3);
            //day  number 5

            $("#row5").empty();
            city5 = $("#row5");
            var d1 = $("<div>").text(city.list[32].dt_txt)

            var weatherIcon = "https://openweathermap.org/img/w/" + city.list[24].weather[0].icon + ".png";

            var d2 = $("<div>").text(city.list[32].main.temp + " °F");
            var d3 = $("<div>").text(city.list[32].main.humidity + "%");
            city5.append(d1);
            city5.append("<img src=" + weatherIcon + ">");
            city5.append(d2);
            city5.append(d3);

    });

});
        
