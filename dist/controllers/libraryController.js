"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.deleteBook = exports.getBookById = exports.listBooks = exports.createBook = exports.welcomeLibrary = void 0;
const libraryService_1 = require("../services/libraryService");
const welcomeLibrary = async (_, res) => {
    res.status(200).json('Bem-vindo à API de Biblioteca!');
};
exports.welcomeLibrary = welcomeLibrary;
const createBook = async (req, res) => {
    try {
        const { title, content, status, author } = req.body;
        const newBook = await libraryService_1.libraryService.createBook({ title, content, status, author });
        res.status(201).json(newBook);
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao criar livro', details: error });
    }
};
exports.createBook = createBook;
const listBooks = async (_, res) => {
    try {
        const books = await libraryService_1.libraryService.listBooks();
        res.status(200).json(books);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao listar livros', details: error });
    }
};
exports.listBooks = listBooks;
const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await libraryService_1.libraryService.getBook(id);
        if (!book) {
            res.status(404).send(`Livro com ID ${id} não encontrado.`);
            return;
        }
        res.status(200).json(book);
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao buscar livro', details: error });
    }
};
exports.getBookById = getBookById;
const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await libraryService_1.libraryService.deleteBook(id);
        if (!deleted) {
            res.status(404).send(`Livro com ID ${id} não encontrado.`);
            return;
        }
        res.status(200).send(`Livro com ID ${id} deletado com sucesso!`);
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao deletar livro', details: error });
    }
};
exports.deleteBook = deleteBook;
const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, status, author } = req.body;
        const updatedBook = await libraryService_1.libraryService.updateBook(id, { title, content, status, author });
        if (!updatedBook) {
            res.status(404).send(`Livro com ID ${id} não encontrado.`);
            return;
        }
        res.status(200).json(updatedBook);
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar livro', details: error });
    }
};
exports.updateBook = updateBook;
