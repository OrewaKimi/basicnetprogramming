const ambilCatatan = require('./catatan.js');  
const command = process.argv[2];  // Mengambil argumen ketiga dari command line

console.log(process.argv);

if (command === 'tambah') {
    console.log('Tambah Catatan');
    const pesan = ambilCatatan(); 
    console.log(pesan);  
} else if (command === 'hapus') {
    console.log('Hapus Catatan');
} else {
    console.log('Perintah tidak dikenali.');
}