import 'dotenv/config.js';
import express from 'express';
import mongoose from 'mongoose';
import todoRoutes from './routes/todoRoutes.js';

mongoose
	.connect(process.env.DB_CONNECTION_STRING)
	.then(() => console.log('DB ok'))
	.catch((err) => console.log('DB error', err));

const app = express();
const port = 3001;

app.use(express.json());

app.use('/api/todos', todoRoutes);

app.listen(port, (err) =>
	err ? console.log('Server error', err) : console.log(`Server OK | Port: ${port}`),
);
