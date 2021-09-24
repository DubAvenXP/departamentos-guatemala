const {Schema, model} = require('mongoose');

const citySchema = Schema({
    city: {
        type: String,
        require: [true, 'Name is required']
    },
    states: [String]
});

module.exports = model('City', citySchema);