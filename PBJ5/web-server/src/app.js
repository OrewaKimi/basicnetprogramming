const express = require('express');
const path = require('path');

const app = express();

// Mengatur direktori public untuk file statis
const direktoriPublic = path.join(__dirname, '../public');
app.use(express.static(direktoriPublic));

// Halaman 'tentang'
app.get('/tentang', (req, res) => {
    res.send({
        nama: 'Kimi Maulana Najna',
        pekerjaan: 'Mahasiswa'
    });
});

// Halaman bantuan/FAQ (Frequently Asked Questions)
app.get('/bantuan', (req, res) => {
    res.send('<h1>Ini halaman bantuan</h1>');
});

// Halaman infoCuaca
app.get('/infoCuaca', (req, res) => {
    res.send({
        prediksiCuaca: 'cuaca berpotensi hujan',
        lokasi: 'Padang'
    });
});

// Menjalankan server pada port 4000
app.listen(4000, () => {
    console.log('Server berjalan pada port 4000.');
});
