"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookStorage = void 0;
class BookStorage {
    constructor() {
        this.books = [];
    }
    static getInstance() {
        if (!BookStorage.instance) {
            BookStorage.instance = new BookStorage();
        }
        return BookStorage.instance;
    }
    add(book) {
        this.books.push(book);
    }
    getAll() {
        return this.books;
    }
    getBookById(id) {
        return this.books.find((book) => book.id === id);
    }
    deleteBook(id) {
        this.books = this.books.filter((book) => book.id !== id);
        return this.books;
    }
}
exports.BookStorage = BookStorage;
// Exporta a instância como padrão
exports.default = BookStorage.getInstance();
