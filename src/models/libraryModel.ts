import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  content: string;
  status: string;
  author: string;
  created_at: Date;
}


const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  status: { type: String, required: true },
  author: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});


export const BookModel = mongoose.model<IBook>('Book', BookSchema);
