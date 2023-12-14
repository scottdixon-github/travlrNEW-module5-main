const fs = require('fs');

// GET About View
const about = (req, res) => {
    const pageTitle = 'Travlr Getaways - About';
    res.render('about', { title: pageTitle });
};

module.exports = {
    about
};
