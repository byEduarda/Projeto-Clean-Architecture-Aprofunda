import request from 'supertest';
import app from '../../../src/index';

describe('Casos de erro da API', () => {
  it('GET /book/:id - retorna 404 para livro inexistente', async () => {
    const res = await request(app).get('/book/id-invalido');
    expect(res.status).toBe(404);
    expect(res.text).toBe('Livro com ID id-invalido não encontrado.');
  });

  it('PATCH /book/:id - retorna 404 para atualização de livro inexistente', async () => {
    const res = await request(app)
      .patch('/book/id-invalido')
      .send({ title: 'Novo título' });

    expect(res.status).toBe(404);
    expect(res.text).toBe('Livro com ID id-invalido não encontrado.');
  });

  it('DELETE /book/:id - retorna 404 para livro inexistente', async () => {
    const res = await request(app).delete('/book/id-invalido');
    expect(res.status).toBe(404);
    expect(res.text).toBe('Livro com ID id-invalido não encontrado.');
  });
});
