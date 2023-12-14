const fs = require('fs');

const news = (req, res) => {
    const pageTitle = 'Travlr Getaways - News';
    res.render('news', { title: pageTitle });
};

module.exports = {
    news
};
