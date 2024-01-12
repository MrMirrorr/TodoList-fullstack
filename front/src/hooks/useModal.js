import { useState } from 'react';

export const useModal = () => {
	const [open, setOpen] = useState(false);
	const [editingTodo, setEditingTodo] = useState(null);

	const handleOpen = () => setOpen(true);

	const handleClose = () => {
		setOpen(false);
		setEditingTodo(null);
	};

	const onCreate = () => {
		setEditingTodo(null);
		handleOpen();
	};

	const onEditMode = (todoData) => {
		setEditingTodo(todoData);
		handleOpen();
	};

	return {
		open,
		handleOpen,
		handleClose,
		onCreate,
		onEditMode,
		editingTodo,
		setEditingTodo,
	};
};
