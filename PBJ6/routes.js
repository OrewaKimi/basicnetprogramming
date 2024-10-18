'use strict';

module.exports = function (app) {
    var routeBiodata = require('./controller/usercontroller');

    // Route untuk mendapatkan semua biodata
    app.route('/biodata').get(routeBiodata.showAllBiodata);

    // Route untuk mendapatkan biodata berdasarkan ID
    app.route('/biodata/:id').get(routeBiodata.showBiodataById);
};
