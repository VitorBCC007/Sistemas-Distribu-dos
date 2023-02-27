const state = require('../model/state');

module.exports = {
    getStates: async(req, res) => {
        let states = await state.find();
        res.json({
            states
        });
    }

};
