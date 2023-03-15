const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String, 
        required: true},
    author: {
        type: String, 
        required: true},
    imageURL: {
        type: String,
        required: true
    },
    projectURL: {
        type: String,
        required: true
    }
});
// = new mongoose.Schema({fname:String,lname:String})
const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project