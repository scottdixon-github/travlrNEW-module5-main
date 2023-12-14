const fs = require('fs');

const rooms = (req, res) => {
    const pageTitle = 'Travlr Getaways - Rooms';
    res.render('rooms', { title: pageTitle });
};

module.exports = {
    rooms
};
