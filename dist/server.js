"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const mongoConnect_1 = require("./infra/database/mongoConnect");
const PORT = 3000;
(0, mongoConnect_1.connectToMongo)().then(() => {
    index_1.default.listen(PORT, () => {
        console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('❌ Erro ao conectar no MongoDB:', error);
});
