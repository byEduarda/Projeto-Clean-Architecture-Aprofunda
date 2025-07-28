import express from 'express';
import { authMiddleware } from '../shared/middlewares/authMiddleware';
import {
  welcomeLibrary,
  createBook,
  listBooks,
  getBookById,
  updateBook,
  deleteBook
} from '../controllers/libraryController';

const router = express.Router();

router.get('/', welcomeLibrary);
router.get('/books', listBooks);
router.get('/books/:id', getBookById);


router.post('/books', authMiddleware, createBook);
router.patch('/books/:id', authMiddleware, updateBook);
router.delete('/books/:id', authMiddleware, deleteBook);

export default router;
