"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryService = void 0;
const libraryModel_1 = require("../models/libraryModel");
exports.libraryService = {
    async createBook(data) {
        const book = await libraryModel_1.BookModel.create(data);
        return book;
    },
    async listBooks() {
        return await libraryModel_1.BookModel.find();
    },
    async getBook(id) {
        return await libraryModel_1.BookModel.findById(id);
    },
    async deleteBook(id) {
        const result = await libraryModel_1.BookModel.findByIdAndDelete(id);
        return !!result;
    },
    async updateBook(id, data) {
        return await libraryModel_1.BookModel.findByIdAndUpdate(id, data, { new: true });
    }
};
