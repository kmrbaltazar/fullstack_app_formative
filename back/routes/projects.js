const { response } = require("express");
const express = require("express");
const router = express.Router();
// below is where you edit variable names based on your variable/file structure names
const Project = require("../models/project");

// GET (all) Users route
router.get('/', async (req, res) => {
    const projects = await Project.find();
    res.json(projects)
});

// POST new User
router.post('/addproject', async (req, res) => {
    const newEntry = new Project(req.body);
    const savedEntry = await newEntry.save()
    res.json(savedEntry)
});

// GET (single) User by ID
router.get('/getuser/:id', async (req, res) => {
    const IDed_Project = await Project.findById({ _id : req.params.id });
    res.json(IDed_Project)
});

// DELETE a User by ID
router.delete('/delete/:id', async (req, res) => {
    const toDelete_Project = await Project.findByIdAndDelete({ _id : req.params.id });
    res.json(toDelete_Project)
});

// UPDATE a User by ID
router.put('/update/:id', async (req, res) => {
    const toUpdate_Project = await Project.findByIdAndUpdate(
        { _id : req.params.id }, 
        { $set: req.body }
    );
    res.json(toUpdate_Project)
});

module.exports = router