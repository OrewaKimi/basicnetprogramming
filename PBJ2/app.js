const yargs = require('yargs');
const catatan = require('./catatan.js');

// Kustomisasi versi yargs
yargs.version('10.1.0');

// Membuat perintah (command) 'tambah'
yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
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
        console.log('Judul: ' + argv.judul);
        console.log('Isi: ' + argv.isi);
    }
});

// Perintah hapus
yargs.command({
    command: 'hapus',
    describe: 'hapus catatan',
    handler: function () {
        console.log('Catatan berhasil dihapus');
    }
});

// Perintah untuk menampilkan semua catatan
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua catatan',
    handler: function () {
        console.log('Menampilkan semua catatan');
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