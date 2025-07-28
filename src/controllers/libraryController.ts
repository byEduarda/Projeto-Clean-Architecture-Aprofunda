import { Request, Response } from 'express';
import { libraryService } from '../services/libraryService';

export const welcomeLibrary = async (_: Request, res: Response): Promise<void> => {
  res.status(200).json('Bem-vindo à API de Biblioteca!');
};

export const createBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content, status, author } = req.body;
    const newBook = await libraryService.createBook({ title, content, status, author });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar livro', details: error });
  }
};

export const listBooks = async (_: Request, res: Response): Promise<void> => {
  try {
    const books = await libraryService.listBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar livros', details: error });
  }
};

export const getBookById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const book = await libraryService.getBook(id);

    if (!book) {
      res.status(404).send(`Livro com ID ${id} não encontrado.`);
      return;
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar livro', details: error });
  }
};

export const deleteBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await libraryService.deleteBook(id);

    if (!deleted) {
      res.status(404).send(`Livro com ID ${id} não encontrado.`);
      return;
    }

    res.status(200).send(`Livro com ID ${id} deletado com sucesso!`);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar livro', details: error });
  }
};

export const updateBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, content, status, author } = req.body;

    const updatedBook = await libraryService.updateBook(id, { title, content, status, author });

    if (!updatedBook) {
      res.status(404).send(`Livro com ID ${id} não encontrado.`);
      return;
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar livro', details: error });
  }
};
