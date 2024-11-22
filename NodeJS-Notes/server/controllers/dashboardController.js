/**
 * GET /
 * Dashboard
 */
exports.dashboard = async (req, res) => {
    const locals = {
        title: "Dashboard",
        description: "Free NodeJS Notes App.",
    };
  
    // Render 'index' yang akan berisi konten utama
    res.render('dashboard/index', {
        locals,
        layout: '../views/layouts/dashboard' // Mengatur layout di sini
    });
  };
  