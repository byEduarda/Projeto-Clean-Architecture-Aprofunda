"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../shared/middlewares/authMiddleware");
const libraryController_1 = require("../controllers/libraryController");
const router = express_1.default.Router();
router.get('/', libraryController_1.welcomeLibrary);
router.get('/books', libraryController_1.listBooks);
router.get('/books/:id', libraryController_1.getBookById);
router.post('/books', authMiddleware_1.authMiddleware, libraryController_1.createBook);
router.patch('/books/:id', authMiddleware_1.authMiddleware, libraryController_1.updateBook);
router.delete('/books/:id', authMiddleware_1.authMiddleware, libraryController_1.deleteBook);
exports.default = router;
