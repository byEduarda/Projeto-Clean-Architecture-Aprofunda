import request from 'supertest';
import app from '../../'; 

describe('DELETE /book/:id', () => {
  it('deve retornar 200 quando remover um livro com sucesso', async () => {

    const createResponse = await request(app)
      .post('/book')
      .send({
        title: 'Livro Teste',
        content: 'Conteúdo do livro',
        status: 'disponível',
        author: 'Autor Teste'
      });

    const bookId = createResponse.body.id;

    const deleteResponse = await request(app).delete(`/book/${bookId}`);

    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.text).toBe(`Livro com ID ${bookId} deletado com sucesso!`);
  });
});
