import { useState, useEffect } from 'react';
import * as todoService from '../services/todoService';

export const useTodos = (setSnackbar) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				setIsLoading(true);
				const fetchedTodos = await todoService.getTodos();
				setTodos(fetchedTodos);
				setSnackbar({
					open: true,
					message: 'Заметки успешно получены',
					severity: 'success',
				});
			} catch (error) {
				console.error('Failed to fetch todos', error);
				setSnackbar({
					open: true,
					message: 'Заметки не были получены с сервера',
					severity: 'error',
				});
			} finally {
				setIsLoading(false);
			}
		};

		fetchTodos();
	}, [setSnackbar]);

	const addTodo = async (todoData) => {
		try {
			setIsLoading(true);
			const newTodo = await todoService.createTodo(todoData);
			setTodos([...todos, newTodo]);
			setSnackbar({
				open: true,
				message: 'Заметка успешно создана',
				severity: 'success',
			});
		} catch (error) {
			console.error('Failed to add todo', error);
			setSnackbar({
				open: true,
				message: 'Заметка не была создана',
				severity: 'error',
			});
		} finally {
			setIsLoading(false);
		}
	};

	const updateTodo = async (todoData) => {
		try {
			setIsLoading(true);
			const newTodo = await todoService.updateTodo(todoData);
			setTodos(todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo)));
			setSnackbar({
				open: true,
				message: 'Заметка успешно обновлена',
				severity: 'success',
			});
		} catch (error) {
			console.error('Failed to update todo', error);
			setSnackbar({
				open: true,
				message: 'Заметка не была обновлена',
				severity: 'error',
			});
		} finally {
			setIsLoading(false);
		}
	};

	const updateStatusTodo = async (id, statusData) => {
		try {
			setIsLoading(true);
			const newTodo = await todoService.updateStatusTodo(id, statusData);
			setTodos(todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo)));
			setSnackbar({
				open: true,
				message: 'Статус успешно обновлен',
				severity: 'success',
			});
		} catch (error) {
			console.error('Failed to update todo status', error);
			setSnackbar({
				open: true,
				message: 'Статус не был обновлен',
				severity: 'error',
			});
		} finally {
			setIsLoading(false);
		}
	};

	const deleteTodo = async (id) => {
		try {
			setIsLoading(true);
			await todoService.deleteTodo(id);
			setTodos(todos.filter((todo) => todo.id !== id));
			setSnackbar({
				open: true,
				message: 'Заметка успешно удалена',
				severity: 'success',
			});
		} catch (error) {
			console.error('Failed to delete todo', error);
			setSnackbar({
				open: true,
				message: 'Заметка не была удалена',
				severity: 'error',
			});
		} finally {
			setIsLoading(false);
		}
	};

	return { todos, addTodo, updateTodo, updateStatusTodo, deleteTodo, isLoading };
};
