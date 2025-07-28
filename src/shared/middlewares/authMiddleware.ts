import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../../shared/helpers/jwt';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });

  const [, token] = authHeader.split(' '); 

  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ error: 'Token inválido' });

  (req as any).user = decoded;

  next();
}
