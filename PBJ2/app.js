const yargs = require('yargs');
const catatan = require('./catatan.js');

// Kustomisasi versi yargs
yargs.version('10.1.0');

// Update Menambahkan Catatan Baru 
yargs.command({
    command: 'tambah',
    describe: 'Tambah sebuah catatan baru',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.tambahCatatan(argv.judul, argv.isi);
    }
});


// Update Perintah Hapus Catatan
yargs.command({
    command: 'hapus',
    describe: 'Hapus sebuah catatan',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.hapusCatatan(argv.judul);
    }
});


// Update Perintah untuk menampilkan semua catatan
yargs.command({
    command: 'list',
    describe: 'Tampilkan semua catatan',
    handler: function () {
        catatan.listCatatan();
    }
});


// Perintah untuk membaca catatan
yargs.command({
    command: 'baca',
    describe: 'Membaca sebuah catatan',
    builder: {
        judul: {
            describe: 'Judul catatan yang ingin dibaca',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Membaca catatan dengan judul: ' + argv.judul);
    }
});

// Parsing yargs
yargs.parse();