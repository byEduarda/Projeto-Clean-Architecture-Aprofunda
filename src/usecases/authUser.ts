import bcrypt from 'bcryptjs';
import { generateToken } from '../shared/helpers/jwt';
import { UserModel } from '../models/userModel';

interface AuthResult {
  token: string;
  user: any;
}

export async function authUser(email: string, password: string): Promise<AuthResult | null> {
  const user = await UserModel.findOne({ email });
  if (!user) return null;

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return null;

  const token = generateToken({ id: user._id, email: user.email });

  return { token, user };
}
