const ambilCatatan = function () { 
    return 'Ini Catatan Kimi Maulana...' 
    } 
    module.exports = ambilCatatan 
    const catatan = require('./catatan.js') 
const pesan = catatan() 
console.log(pesan) 