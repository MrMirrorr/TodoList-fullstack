const apiUrl = '/api/todos';

export const getTodos = async () => {
	const response = await fetch(apiUrl);
	if (!response.ok) {
		throw new Error('Error fetching todos');
	}
	const { data } = await response.json();
	return data;
};

export const createTodo = async (todoData) => {
	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(todoData),
	});
	if (!response.ok) {
		throw new Error('Error creating todo');
	}
	const { data } = await response.json();
	return data;
};

export const updateTodo = async (todoData) => {
	const response = await fetch(`${apiUrl}/${todoData.id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			title: todoData.title,
			description: todoData.description,
			status: todoData.status,
		}),
	});
	if (!response.ok) {
		throw new Error('Error updating todo');
	}
	const { data } = await response.json();
	return data;
};

export const updateStatusTodo = async (id, statusData) => {
	const response = await fetch(`${apiUrl}/${id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			status: statusData,
		}),
	});
	if (!response.ok) {
		throw new Error('Error updating todo status');
	}
	const { data } = await response.json();
	return data;
};

export const deleteTodo = async (id) => {
	const response = await fetch(`${apiUrl}/${id}`, {
		method: 'DELETE',
	});
	if (!response.ok) {
		throw new Error('Error deleting todo');
	}
	return true;
};
