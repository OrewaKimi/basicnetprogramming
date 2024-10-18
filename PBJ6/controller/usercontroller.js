'use strict';

var connection = require('../koneksi');

// Menampilkan semua biodata
exports.showAllBiodata = function (req, res) {
    connection.query('SELECT * FROM biodata', function (error, rows) {
        if (error) {
            console.error('Error fetching data:', error);
            return res.status(500).send({ error: 'Error fetching data' });
        }
        res.json(rows);  // Menampilkan semua biodata dalam format JSON
    });
};

// Menampilkan biodata berdasarkan ID
exports.showBiodataById = function (req, res) {
    let userId = req.params.id;
    connection.query('SELECT * FROM biodata WHERE id = ?', [userId], function (error, row) {
        if (error) {
            console.error('Error fetching data by ID:', error);
            return res.status(500).send({ error: 'Error fetching data by ID' });
        }
        if (row.length > 0) {
            res.json(row[0]);  // Menampilkan biodata berdasarkan ID
        } else {
            res.status(404).send({ message: 'Biodata not found' });
        }
    });
};

// Menambahkan biodata baru
exports.addNewBiodata = function (req, res) {
    let newBiodata = {
        nama: req.body.nama,
        tanggal_lahir: req.body.tanggal_lahir,
        jenis_kelamin: req.body.jenis_kelamin,
        alamat: req.body.alamat,
        no_telepon: req.body.no_telepon,
        email: req.body.email,
        pekerjaan: req.body.pekerjaan,
        status_perkawinan: req.body.status_perkawinan
    };

    connection.query('INSERT INTO biodata SET ?', newBiodata, function (error, result) {
        if (error) {
            console.error('Error adding data:', error);
            return res.status(500).send({ error: 'Error adding data' });
        }
        res.status(201).send({ message: 'Biodata added successfully', id: result.insertId });
    });
};

// Mengubah biodata berdasarkan ID
exports.updateBiodataById = function (req, res) {
    let userId = req.params.id;
    let updatedBiodata = {
        nama: req.body.nama,
        tanggal_lahir: req.body.tanggal_lahir,
        jenis_kelamin: req.body.jenis_kelamin,
        alamat: req.body.alamat,
        no_telepon: req.body.no_telepon,
        email: req.body.email,
        pekerjaan: req.body.pekerjaan,
        status_perkawinan: req.body.status_perkawinan
    };

    connection.query('UPDATE biodata SET ? WHERE id = ?', [updatedBiodata, userId], function (error, result) {
        if (error) {
            console.error('Error updating data:', error);
            return res.status(500).send({ error: 'Error updating data' });
        }
        if (result.affectedRows > 0) {
            res.send({ message: 'Biodata updated successfully' });
        } else {
            res.status(404).send({ message: 'Biodata not found' });
        }
    });
};