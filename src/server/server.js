import fastify from 'fastify';
import cors from '@fastify/cors';
import { readFile } from 'fs/promises';

const server = fastify({ logger: true });

// Подключение fastify-cors
server.register(cors, {
  origin: '*', // Разрешаем доступ с любого источника
});

server.get('/users', async (request, reply) => {
  try {
    const data = await readFile('./users.json', 'utf8');
    const users = JSON.parse(data);

    if (request.query.term) {
      const result = users.filter((elem) => elem.name.toLowerCase().includes(request.query.term.toLowerCase()));
      reply.send(result);
    } else {
      reply.send(users);
    }
  } catch (err) {
    console.log('File read failed:', err);
    reply.status(500).send({ error: 'Failed to read file' });
  }
});

const start = async () => {
  try {
    await server.listen(3000);
    console.log(`Server listening at http://localhost:3000`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
