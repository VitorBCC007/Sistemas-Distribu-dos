const express = require ('express');
const router = express.Router();

const UserController = require('./controller/usercontroller');

router.get('ping', (req, res) => {
    res.json({ ok: true });
});

router.get('/states', UserController.getStates);

module.exports = router;
