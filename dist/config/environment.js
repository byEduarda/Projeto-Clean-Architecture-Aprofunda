"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    port: process.env.PORT || 3000,
    mongo_url: process.env.MONGO_URI || 'mongodb://localhost:27017/biblioteca',
    jwt_secret: process.env.JWT_SECRET || 'secretdeteste'
};
