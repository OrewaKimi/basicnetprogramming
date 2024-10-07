const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// Mengatur direktori views secara kustom
const direktoriViews = path.join(__dirname, '../templates');
const direktoriPartials = path.join(__dirname, '../templates/partials');

// Setup view engine hbs
app.set('view engine', 'hbs');
app.set('views', direktoriViews);
hbs.registerPartials(direktoriPartials);

// Menyajikan file statis
app.use(express.static(path.join(__dirname, '../public'))); // Menambahkan middleware untuk file statis

// Halaman utama
app.get('', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Kimi Maulana Najna' 
    });
});

// Halaman /index
app.get('/index', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Kimi Maulana Najna' 
    });
});

// Halaman 'tentang'
app.get('/tentang', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Aplikasi',
        nama: 'Kimi Maulana Najna' 
    });
});

// Halaman bantuan/FAQ
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        teksBantuan: 'Silakan hubungi kami untuk bantuan lebih lanjut.',
        nama: 'Kimi Maulana Najna'
    });
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
