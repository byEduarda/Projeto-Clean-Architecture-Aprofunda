import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { UserModel } from '../models/userModel';
import { authUser } from '../usecases/authUser';

export async function register(req: Request, res: Response) {
  const { name, email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'Email já cadastrado' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    console.error('Erro no registro:', error);
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const result = await authUser(email, password);

    if (!result) return res.status(401).json({ error: 'Credenciais inválidas' });

    res.json({ token: result.token, user: { id: result.user._id, email: result.user.email, name: result.user.name } });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
}
