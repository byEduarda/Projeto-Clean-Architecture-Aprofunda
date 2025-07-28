import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secretdeteste';

export function generateToken(payload: object): string {
  return jwt.sign(payload, SECRET as jwt.Secret, {
    expiresIn: '1h',
  });
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, SECRET as jwt.Secret);
  } catch (error) {
    return null;
  }
}
