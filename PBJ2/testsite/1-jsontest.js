const fs = require('fs');  // Mengimpor modul file system

const buku = {             // Membuat objek buku
    judul: 'Praktikum Pemrograman Jaringan',
    penulis: 'Kimi Maulana'
};

const bookJSON = JSON.stringify(buku);  // Mengonversi objek buku menjadi string JSON

fs.writeFileSync('1-jsontest.json', bookJSON);  // Menyimpan string JSON ke dalam file
