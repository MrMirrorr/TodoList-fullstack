import { useModal, useSnackbar, useTodos } from '../../hooks';
import { Button, Grid, Snackbar } from '@mui/material';
import { TodoCard } from '../todo-card/TodoCard';
import { CreateOrEditModal } from '../create-or-edit-modal/CreateOrEditModal';
import { Alert } from '../alert/Alert';
import { Loader } from '../loader/Loader';

export const Todos = () => {
	const { snackbar, setSnackbar, handleSnackbarClose } = useSnackbar();

	const { todos, addTodo, updateTodo, updateStatusTodo, deleteTodo, isLoading } =
		useTodos(setSnackbar);

	const {
		open,
		handleOpen,
		handleClose,
		onCreate,
		onEditMode,
		editingTodo,
		setEditingTodo,
	} = useModal();

	return (
		<>
			<Button variant="contained" sx={{ margin: '10px 0' }} onClick={onCreate}>
				Создать задачу
			</Button>
			<CreateOrEditModal
				open={open}
				handleClose={handleClose}
				editingTodo={editingTodo}
				addTodo={addTodo}
				updateTodo={updateTodo}
			/>
			<Grid
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
				}}
				container
				spacing={2}
				justifyContent="center"
			>
				{todos.map((todo) => (
					<Grid item key={todo.id} sx={{ display: 'flex' }}>
						<TodoCard
							todo={todo}
							onEditMode={onEditMode}
							handleOpen={handleOpen}
							setEditingTodo={setEditingTodo}
							updateStatusTodo={updateStatusTodo}
							deleteTodo={deleteTodo}
						/>
					</Grid>
				))}
			</Grid>
			<Loader isLoading={isLoading} />
			<Snackbar
				open={snackbar.open}
				autoHideDuration={6000}
				onClose={handleSnackbarClose}
			>
				<Alert
					onClose={handleSnackbarClose}
					severity={snackbar.severity}
					sx={{ width: '100%' }}
				>
					{snackbar.message}
				</Alert>
			</Snackbar>
		</>
	);
};
