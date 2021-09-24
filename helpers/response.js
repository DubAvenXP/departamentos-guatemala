const success = (req, res, message, status) => {
    let statusCode = status || 200;
    let statusMessage = message || '';

    res.status(statusCode).send({
        body: statusMessage,
    });
};
const err = (req, res, error, status, details) => {
    let statusCode = status || 500;
    let statusMessage = error || 'Internal server error';

    console.error('[Response error] ' + error);
    res.status(statusCode).send({
        error: statusMessage,
        status: statusCode,
        body: error
    });
};
const errors = (req, res, error, status, param, location = 'body') => {
    let statusCode = status || 500;
    const msg = error || 'Internal server error';

    console.error('[Response error] ' + error);
    return res.status(statusCode).send({
        errors: [{
            msg,
            param,
            location
        }]
    });
};

module.exports = {

    success,
    err,
    errors

};