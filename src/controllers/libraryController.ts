import { Request, Response } from 'express';
import * as libraryService from '../services/libraryService';

export const welcomeLibrary = async (_: Request, res: Response): Promise<void> => {
    const welcomeMessage = 'Bem-vindo à API de Biblioteca!';
   
    res
    .status(200)
    .json(`${welcomeMessage}`);
};


export const createBook = async (req: Request, res: Response): Promise<void> => {
    const { title, content, status, author } = req.body;
    const newBook = libraryService.createBook({ title, content, status, author });

    res
    .status(201)
    .json(newBook);
};


export const listBooks = async (_: Request, res: Response): Promise<void> => {
    const books = libraryService.listBooks();
    res
    .status(200)
    .json(books);
};


export const getBookById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const book = libraryService.getBook(id);

 if (!book) {
  res.status(404).type('text').send(`Livro com ID ${id} não encontrado.`);
  return;
 }

  res.status(200).json(book);
};



export const deleteBook = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const deleted = libraryService.deleteBook(id);

  if (!deleted) {
  res.status(404).type('text').send(`Livro com ID ${id} não encontrado.`);
  return;
}
res.status(200).send(`Livro com ID ${id} deletado com sucesso!`);

};


export const updateBook = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, content, status, author } = req.body;
  const updatedBook = libraryService.updateBook(id, { title, content, status, author });

  if (!updatedBook) {
  res.status(404).type('text').send(`Livro com ID ${id} não encontrado.`);
  return;
}
res.status(200).send(`Livro com ID ${id} atualizado com sucesso!`);

}

