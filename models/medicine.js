const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  medical_name: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  usage: String,
  dosage: String,
  side_effects: [String]
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
