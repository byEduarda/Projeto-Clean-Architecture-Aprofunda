import { v4 as uuidv4 } from 'uuid';
import { Text } from '../models/Text';

export function createText(data: Omit<Text, 'id' | 'createdAt'>): Text {
  return {
    id: uuidv4(),
    createdAt: new Date(),
    ...data,
  };
}
