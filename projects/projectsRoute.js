const express = require('express');
const projectDb = require('./../data/helpers/projectModel.js');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await projectDb.get();
        console.log('hello')

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

module.exports = router;