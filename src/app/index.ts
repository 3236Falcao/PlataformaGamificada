import express from 'express';
import userRoutes from '../routes/userRoutes';

const app = express();
const port = 8080;

app.use(express.json());
app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
