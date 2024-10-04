const request = require('request');
const chalk = require('chalk');  

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Padang.json?access_token=pk.eyJ1Ijoia2ltaS1tYXVsYW5hLTE3IiwiYSI6ImNtMXRnZ3F5dTAyNXMycG9uODNhMTg3NjcifQ.0A75Rwj7ud_pc0BR4phhbA&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log(chalk.red('Unable to connect to Mapbox API.'));
  } else if (response.body.features.length === 0) {
    console.log(chalk.yellow('No matching location found.'));
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    
    console.log(chalk.green(`Latitude: ${latitude}`));
    console.log(chalk.green(`Longitude: ${longitude}`));
  }
});