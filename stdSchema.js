const mongoose = require("mongoose")

const { Schema } = mongoose;

const stdSchema = new Schema({
    StudentName: String,
    RegistrationNumber: String,
    Marks: Number
});

module.exports = mongoose.model("Student", stdSchema, "SL-LAB13-Students");