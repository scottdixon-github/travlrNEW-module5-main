const mongoose = require('mongoose');

// Define trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    length: { type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});

// Create and export the Trip model
module.exports = mongoose.model('trips', tripSchema);
