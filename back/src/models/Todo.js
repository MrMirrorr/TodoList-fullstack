import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Заголовок обязателен к заполнению'],
	},
	description: {
		type: String,
		required: [true, 'Описание обязательно к заполнению'],
	},
	status: {
		type: String,
		required: [true, 'Статус обязателен к заполнению'],
		enum: {
			values: ['awaitsExecution', 'inProgress', 'completed'],
			message: `Статус может принимать строки: "awaitsExecution", "inProgress", "completed"`,
		},
	},
});

export default mongoose.model('Todo', TodoSchema);
