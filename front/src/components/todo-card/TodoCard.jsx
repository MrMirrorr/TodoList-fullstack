import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { StatusSelect } from '../status-select/StatusSelect';

export const TodoCard = ({
	todo,
	onEditMode,
	handleOpen,
	updateStatusTodo,
	deleteTodo,
}) => {
	const handleEditTodo = (todoData) => {
		onEditMode(todoData);
		handleOpen();
	};

	return (
		<Card
			sx={{
				minWidth: 275,
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
				<Typography variant="h5" component="div">
					{todo.title}
				</Typography>
				<Typography variant="body2" sx={{ flexGrow: 1 }}>
					{todo.description}
				</Typography>
				<StatusSelect
					todoId={todo.id}
					statusFromServer={todo.status}
					updateStatusTodo={updateStatusTodo}
				/>
			</CardContent>
			<CardActions>
				<Button
					size="small"
					variant="outlined"
					color="primary"
					onClick={() => handleEditTodo(todo)}
				>
					Изменить
				</Button>
				<Button
					size="small"
					variant="outlined"
					color="error"
					onClick={() => deleteTodo(todo.id)}
				>
					Удалить
				</Button>
			</CardActions>
		</Card>
	);
};
