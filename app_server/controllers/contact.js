const fs = require('fs');

const contact = (req, res) => {
    const pageTitle = 'Travlr Getaways - Contact';
    res.render('contact', { title: pageTitle });
};

module.exports = {
    contact
};
