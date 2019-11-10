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

        weatherinfo.append(input);
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

            weatherinfo.append(input);
            weatherinfo.append(divTemp);
            weatherinfo.append(divSpeed);
            weatherinfo.append(divHumidity);
            weatherinfo.append(divUVindex);

            var cityid = response.sys.id;
        });
});
        
