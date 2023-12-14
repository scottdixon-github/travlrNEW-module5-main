const index = (req, res) => {
    const pageTitle = 'Travlr Getaways';
    res.render('index', { title: pageTitle });
};

module.exports = {
    index
};
