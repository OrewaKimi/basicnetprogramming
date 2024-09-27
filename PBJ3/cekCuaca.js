const request = require('postman-request');

// Mengubah ke Fahrenheit dan menggunakan bahasa Inggris
const urlCuaca = 'http://api.weatherstack.com/current?access_key=9171b5925ca219298c4874b016ae6a6b&query=-0.8969206647459452,100.35076508271707&units=f&language=en';

request({ url: urlCuaca, json: true }, (error, response) => {
    if (error) {
        console.log('Tidak dapat menghubungi layanan cuaca!', error);
    } else if (response.body.error) {
        console.log('Error dari API: ', response.body.error.info);
    } else {
        const temperature = response.body.current.temperature;
        const rainChance = response.body.current.precip;
        const weatherDescription = response.body.current.weather_descriptions[0]; // deskripsi cuaca

        console.log('Current temperature is ' + temperature + ' degrees Fahrenheit.');
        console.log('Chance of rain is ' + rainChance + '%.');
        console.log('Weather description: ' + weatherDescription + '.');
    }
});