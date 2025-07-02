import { texts } from '../storage/textStorage';
import { createText } from '../factories/textFactory';
import { Text } from '../models/Text';

export function addText(data: Omit<Text, 'id' | 'createdAt'>): Text {
  const newText = createText(data);
  texts.push(newText);
  return newText;
}

export function getAllTexts(): Text[] {
  return texts;
}
