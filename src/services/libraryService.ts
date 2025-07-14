import { v4 as uuidv4 } from "uuid";
import BookStorage, { Book } from "../storage/libraryStorage";

interface CreateBookData {
  title: string;
  content: string;
  status: string;
  author: string;
}

export function createBook(data: CreateBookData): Book {
  const newBook: Book = {
    id: uuidv4(),
    created_at: new Date().toISOString(),
    ...data,
  };

  BookStorage.add(newBook);
  return newBook;
}

export function listBooks(): Book[] {
  return BookStorage.getAll();
}

export function getBook(id: string): Book | undefined {
  return BookStorage.getBookById(id);
}

export function deleteBook(id: string): boolean {
  const index = BookStorage.books.findIndex(book => book.id === id);
  if (index === -1) return false;

  BookStorage.books.splice(index, 1);
  return true;
}
export function updateBook(id: string, data: Partial<CreateBookData>): Book | undefined {
  const book = BookStorage.getBookById(id);
  if (!book) return undefined;

  Object.assign(book, data);
  return book;
}
