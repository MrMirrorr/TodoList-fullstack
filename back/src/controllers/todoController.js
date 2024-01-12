import TodoModel from '../models/Todo.js';
import serverErrorHandler from '../utils/serverErrorHandler.js';
import mapTodo from '../helpers/mapTodo.js';

export const create = async (req, res) => {
	try {
		const todo = await TodoModel.create({
			title: req.body.title,
			description: req.body.description,
			status: req.body.status,
		});

		res.send({
			data: mapTodo(todo),
			error: null,
		});
	} catch (err) {
		serverErrorHandler(res, err, 'Не удалось создать задачу');
	}
};

export const getAll = async (_, res) => {
	try {
		const todos = await TodoModel.find();

		res.send({ data: todos.map(mapTodo), error: null });
	} catch (err) {
		serverErrorHandler(res, err, 'Не удалось получить задачи');
	}
};

export const update = async (req, res) => {
	try {
		const todoId = req.params.id;
		const newData = req.body;

		const newTodo = await TodoModel.findByIdAndUpdate(todoId, newData, {
			returnDocument: 'after',
		});

		res.send({
			data: mapTodo(newTodo),
			error: null,
		});
	} catch (err) {
		serverErrorHandler(res, err, 'Не удалось обновить задачу');
	}
};

export const remove = async (req, res) => {
	try {
		const todoId = req.params.id;

		await TodoModel.deleteOne({ _id: todoId });

		res.send({
			success: true,
			error: null,
		});
	} catch (err) {
		serverErrorHandler(res, err, 'Не удалось удалить задачу');
	}
};
