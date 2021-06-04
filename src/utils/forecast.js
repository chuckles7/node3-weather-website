const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=a286556417d0135682c49986f07e7930&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const currentWeather = body.current;

      callback(
        undefined,
        currentWeather.weather_descriptions[0] +
          ". It is currently " +
          currentWeather.temperature +
          " degrees out. It feels like " +
          currentWeather.feelslike +
          " degrees."
      );
    }
  });
};

module.exports = forecast;
