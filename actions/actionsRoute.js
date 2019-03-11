const express = require('express');
const actionDb = require('./../data/helpers/actionModel.js');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const actions = await actionDb.get();

        if (actions) {
            res.status(200).json(actions);
        }
        else {
            res.status(404).json('Actions are not available.');
        }
    } catch (e) {
        res.status(500).json(e)
    }
})

router.post('/', async (req, res) => {
    try {
        const action = req.body;
        const added = await actionDb.insert(action);
        if (added) {
            res.status(201).json(action);
        }
        else {
            res.json('Please enter name, description, completed and notes.');
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const action = await actionDb.get(req.params.id);
        
        if (action) {
            res.status(200).json(action);
        }
        else {
            res.status(404).json('This action id is not available.');
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const action = req.body;
        const updated = await actionDb.update(id, action);
        if (updated) {
            res.status(201).json(updated);
        }
        else {
            res.status(404).json('This action is not available.');
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await actionDb.remove(id);
        if (deleted) {
            res.status(200).json('Action was successfully deleted.');
        }
        else {
            res.status(404).json('This action is not available.');
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});
module.exports = router;