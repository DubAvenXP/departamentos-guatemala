const express = require('express');
const { check } = require('express-validator');

const router = express.Router();
const controller = require('./controller');
const {success, err, errors} = require('../../helpers/response');

router.get('/', list);

router.get('/:id', [
    check('id', 'Invalid id').notEmpty().isMongoId(),
], listOne);

// router.post('/', add);

// router.put('/:id', [
//     check('id', 'Invalid id').notEmpty().isMongoId(),
// ], update);

// router.delete('/:id', [
//     check('id', 'Invalid id').notEmpty().isMongoId(),
// ], remove);

async function list(req, res) {
    try {
        const result = await controller.get(req);
        success(req, res, result, 200);
    } catch (error) {
        console.error(error);
        err(req, res, error, 500, 'Internal server error, contact the administrator');
    }
}

async function listOne(req, res) {
    try {
        const result = await controller.getOne(req);
        success(req, res, result, 200);
    } catch (error) {
        console.error(error);
        err(req, res, error, 500, 'Internal server error, contact the administrator');
    }
}

async function add(req, res) {
    try {
        const result = await controller.post(req);
        success(req, res, result, 201);
    } catch (error) {
        console.error(error);
        err(req, res, error, 500, 'Internal server error, contact the administrator');
    }
}

async function update(req, res) {
    try {
        const result = await controller.put(req);
        success(req, res, result, 200);
    } catch (error) {
        console.error(error);
        err(req, res, error, 500, 'Internal server error, contact the administrator');
    }
}

async function remove(req, res) {
    try {
        const result = await controller.remove(req);
        success(req, res, result, 200);
    } catch (error) {
        console.error(error);
        err(req, res, error, 500, 'Internal server error, contact the administrator');
    }
}









module.exports = router;