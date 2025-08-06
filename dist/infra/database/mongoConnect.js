"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongo = connectToMongo;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function connectToMongo() {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI);
        console.log('🟢 Conectado ao MongoDB Atlas com sucesso');
    }
    catch (error) {
        console.error('🔴 Erro ao conectar no MongoDB:', error);
        process.exit(1);
    }
}
