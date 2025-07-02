import { Request, Response } from 'express';
import * as textService from '../services/textService';

export function createText(req: Request, res: Response) {
  const { title, content, status, author } = req.body;

  if (!title || !content || !status || !author) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const newText = textService.addText({ title, content, status, author });
  res.status(201).json(newText);
}

export function listTexts(req: Request, res: Response) {
  const allTexts = textService.getAllTexts();
  res.json(allTexts);
}
