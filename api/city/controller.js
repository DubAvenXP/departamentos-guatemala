const { request } = require('express');
const City = require('./schema');

const get = async (req = request) => {
    const { limit = 22, from = 0, city } = req.query;
    let filter, projection;

    if (city) {
        const regex = new RegExp(city, 'i');
        filter = { city: regex };
        projection = '_id city states';
    } else {
        projection = '_id city';
    }

    const cities = await City.find(filter, projection);

    return {
        cities
    };
};

const getOne = async (req = request) => {
    const { id } = req.params;

    const city = await City.findById(id);

    return city;
};

const post = async (req = request) => {
    const { body } = req;
    const city = new City(body);
    await city.save();
    return city;
};

const put = async (req = request) => {
    const { id } = req.params;
    const city = await City.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    return city;
};

const remove = async (req = request) => {
    const { id } = req.params;
    const city = await City.findByIdAndUpdate(id, { status: false }, { new: true });
    return city;
};

module.exports = {
    get,
    getOne,
    post,
    put,
    remove
};