"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userModel_1 = require("../models/userModel");
const authUser_1 = require("../usecases/authUser");
async function register(req, res) {
    const { name, email, password } = req.body;
    try {
        const existingUser = await userModel_1.UserModel.findOne({ email });
        if (existingUser)
            return res.status(400).json({ error: 'Email já cadastrado' });
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const user = new userModel_1.UserModel({
            name,
            email,
            password: hashedPassword,
        });
        await user.save();
        res.status(201).json({ message: 'Usuário criado com sucesso' });
    }
    catch (error) {
        console.error('Erro no registro:', error);
        res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
}
async function login(req, res) {
    const { email, password } = req.body;
    try {
        const result = await (0, authUser_1.authUser)(email, password);
        if (!result)
            return res.status(401).json({ error: 'Credenciais inválidas' });
        res.json({ token: result.token, user: { id: result.user._id, email: result.user.email, name: result.user.name } });
    }
    catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
}
