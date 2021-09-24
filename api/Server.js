const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            city: '/api/city',
        };

        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB() {
        try {
            dbConnection();
        } catch (error) {
            console.error(error);
        }
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet());
    }

    routes() {
        this.app.use(this.paths.city, require('../api/city/routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Application running on http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;