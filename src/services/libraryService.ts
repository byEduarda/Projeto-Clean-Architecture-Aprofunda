import { BookModel, IBook } from "../models/libraryModel";

interface CreateBookData {
  title: string;
  content: string;
  status: string;
  author: string;
}

export const libraryService = {
  async createBook(data: CreateBookData): Promise<IBook> {
    const book = await BookModel.create(data);
    return book;
  },

  async listBooks(): Promise<IBook[]> {
    return await BookModel.find();
  },

  async getBook(id: string): Promise<IBook | null> {
    return await BookModel.findById(id);
  },

  async deleteBook(id: string): Promise<boolean> {
    const result = await BookModel.findByIdAndDelete(id);
    return !!result;
  },

  async updateBook(id: string, data: Partial<CreateBookData>): Promise<IBook | null> {
    return await BookModel.findByIdAndUpdate(id, data, { new: true });
  }
};
