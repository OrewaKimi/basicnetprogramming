/**
 * GET /
 * Homepage 
 */
exports.homepage = async (req, res) => {
  const locals = {
      title: "NodeJs Notes",
      description: "Free NodeJS Notes App.",
  };

  // Render 'index' yang akan berisi konten utama
  res.render('index', {
      locals,
      layout: '../views/layouts/front-pages' // Mengatur layout di sini
  });
};

  /**
   * GET /
   * About 
  */
  exports.about = async (req, res) => {
    const locals = {
      title: "About - NodeJs Notes",
      description: "Free NodeJS Notes App.",
    }
    res.render('about', locals);
  }