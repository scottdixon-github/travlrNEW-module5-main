const fs = require('fs');

const meals = (req, res) => {
    const pageTitle = 'Travlr Getaways - Meals';
    res.render('meals', { title: pageTitle });
};

module.exports = {
    meals
};
