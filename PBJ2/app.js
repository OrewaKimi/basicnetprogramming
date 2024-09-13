const fs = require('fs') 
fs.writeFileSync('catatan.txt', 'Nama Saya Kimi Maulana') 
//fs.appendFileSync('catatan.txt', ' Saya tinggal di Painan') 

const validator = require('validator') 
const ambilCatatan = require('./catatan.js') 
const pesan = ambilCatatan() 
console.log(pesan) 
console.log(validator.isURL('https://Kimi Maulana.com')) 

const chalk = require('chalk');

// Mencetak teks dengan warna merah
console.log(chalk.red('print warna merah sukses'));