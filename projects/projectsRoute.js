const express = require('express');
const projectDb = require('./../data/helpers/projectModel.js');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await projectDb.get();

        if (projects) {
            res.status(200).json(projects);
        }
        else {
            res.status(404).json('Projects are not available.');
        }
    } catch (e) {
        res.status(500).json(e)
    }
})

router.post('/', async (req, res) => {
    console.log('hello');
    try {
        const project = req.body;
        const added = await projectDb.insert(project);
        if (added) {
            res.status(201).json(project);
        }
        else {
            res.json('Please enter title and body.');
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});
module.exports = router;