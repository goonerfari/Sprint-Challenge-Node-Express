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
        res.status(500).json(e);
    }
})

router.post('/', async (req, res) => {
    try {
        const project = req.body;
        const added = await projectDb.insert(project);
        if (added) {
            res.status(201).json(project);
        }
        else {
            res.json('Please enter name, description and completed.');
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const project = await projectDb.get(id);
        if (project) {
            res.status(200).json(project);
        }
        else {
            res.status(404).json('This project id is not available.');
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const project = req.body;
        const updated = await projectDb.update(id, project);
        if (updated) {
            res.status(201).json(updated);
        }
        else {
            res.json('This project is not available.');
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await projectDb.remove(id);
        if (deleted) {
            res.status(201).json('Project was successfully removed.');
        }
        else {
            res.json('This project is not available.');
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});

router.get('/:id/actions', async (req, res) => {
    
    const id = req.params.id;
    try {
        if (id) {
            const projectsActions = await projectDb.getProjectActions(id);
            if (projectsActions) {
                res.status(200).json(projectsActions);
            }
        }
        else {
            res.json('This project is unavailable')
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
})

module.exports = router;