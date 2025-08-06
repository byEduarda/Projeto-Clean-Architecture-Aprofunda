"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const libraryModel_1 = require("../models/libraryModel");
exports.default = {
    create: ({ title, content, status, author }) => {
        const book = new libraryModel_1.BookModel({
            id: (0, uuid_1.v4)(),
            title,
            content,
            status,
            author,
            created_at: new Date().toLocaleDateString("pt-BR"),
        });
        return book;
    },
};
