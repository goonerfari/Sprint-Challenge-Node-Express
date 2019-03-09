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


module.exports = router;