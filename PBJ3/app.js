const request = require('request');
const chalk = require('chalk');

// Pemanggilan Mapbox API
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Padang.json?access_token=pk.eyJ1Ijoia2ltaS1tYXVsYW5hLTE3IiwiYSI6ImNtMXRnZ3F5dTAyNXMycG9uODNhMTg3NjcifQ.0A75Rwj7ud_pc0BR4phhbA&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log(chalk.red('Unable to connect to Mapbox service.'));
    } else if (response.body.features.length === 0) {
        console.log(chalk.yellow('No matching location found.'));
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        const place_name = response.body.features[0].place_name;
        const place_type = response.body.features[0].place_type[0];

        console.log(chalk.green(`Data yang anda cari adalah: Padang`));
        console.log(chalk.green(`Data yang ditemukan adalah: ${place_name}`));
        console.log(chalk.green(`Tipe lokasi adalah: ${place_type}`));
        console.log(chalk.green(`Koordinat lokasi: Latitude: ${latitude}, Longitude: ${longitude}`));

        // Pemanggilan Weatherstack API di dalam callback Mapbox
        const weatherstackURL = `http://api.weatherstack.com/current?access_key=9171b5925ca219298c4874b016ae6a6b&query=${latitude},${longitude}`;

        request({ url: weatherstackURL, json: true }, (error, response) => {
            if (error) {
                console.log(chalk.red('Unable to connect to Weatherstack service.'));
            } else if (response.body.error) {
                console.log(chalk.yellow('Unable to find location for weather.'));
            } else {
                const temperature = response.body.current.temperature;
                const rain_chance = response.body.current.precip;

                console.log(chalk.green(`Saat ini suhu di ${place_name} mencapai ${temperature} derajat celcius.`));
                console.log(chalk.green(`Kemungkinan terjadinya hujan adalah ${rain_chance}%`));
            }
        });
    }
});
