"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const libraryRoutes_1 = __importDefault(require("./routes/libraryRoutes"));
const environment_1 = require("./config/environment");
dotenv_1.default.config();
const URL = environment_1.config.mongo_url;
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    throw new Error('A variável MONGO_URI não está definida no .env');
}
app.use(express_1.default.json());
app.use((0, cors_1.default)());
mongoose_1.default.connect(MONGO_URI)
    .then(() => {
    console.log('🟢 Conectado ao MongoDB Atlas com sucesso');
    app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando com sucesso em http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
});
app.use('/auth', authRoutes_1.default);
;
app.use('/', libraryRoutes_1.default);
exports.default = app;
