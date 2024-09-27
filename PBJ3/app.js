const request = require('postman-request') 
const url = 'http://api.weatherstack.com/current?access_key=9171b5925ca219298c4874b016ae6a6b&query=-0.8969206647459452,100.35076508271707';

request({ url: url, json: true }, (error, response) => {
    console.log(response)
    const data = response.body;
    console.log('Informasi Cuaca:');
    console.log('Suhu saat ini: ' + data.current.temperature + '°C');
    console.log('Deskripsi cuaca: ' + data.current.weather_descriptions[0]);
    //}
})
