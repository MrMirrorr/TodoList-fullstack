import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { INITIAL_TODO, STATUS } from '../../constants';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { StatusSelect } from '../status-select/StatusSelect';

const dialogStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const inputStyle = {
	margin: '5px 0',
};

const todoFormSchema = yup.object().shape({
	title: yup.string().required('Заполните заголовок'),
	description: yup.string().required('Заполните описание'),
	status: yup
		.string()
		.required('Выберите статус')
		.oneOf(
			[
				STATUS.AWAITS_EXECUTION.VALUE,
				STATUS.COMPLETED.VALUE,
				STATUS.IN_PROGRESS.VALUE,
			],
			'Выберите статус',
		),
});

export const CreateOrEditModal = ({
	open,
	handleClose,
	editingTodo,
	addTodo,
	updateTodo,
}) => {
	const {
		register,
		handleSubmit,
		setValue,
		reset,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: INITIAL_TODO,
		resolver: yupResolver(todoFormSchema),
	});

	const isEditingMode = Boolean(editingTodo);

	const onClose = () => {
		handleClose();
		reset();
	};

	useEffect(() => {
		reset(INITIAL_TODO);

		if (editingTodo) {
			setValue('title', editingTodo.title);
			setValue('description', editingTodo.description);
			setValue('status', editingTodo.status);
		}
	}, [editingTodo, setValue, reset]);

	const handleClickSubmitTodo = (todoData) => {
		if (isEditingMode) {
			const todoDataWithId = { id: editingTodo.id, ...todoData };
			updateTodo(todoDataWithId);
			onClose();
		} else {
			addTodo(todoData);
			onClose();
		}
	};

	return (
		<Modal open={open} onClose={onClose}>
			<Box sx={dialogStyle}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					{isEditingMode ? 'Изменение задачи' : 'Создание задачи'}
				</Typography>
				<form onSubmit={handleSubmit(handleClickSubmitTodo)}>
					<TextField
						fullWidth
						id="title"
						name="title"
						label="Заголовок задачи"
						variant="standard"
						sx={inputStyle}
						error={!!errors.title}
						helperText={errors.title?.message}
						{...register('title')}
					/>
					<TextField
						fullWidth
						id="description"
						name="description"
						label="Описание задачи"
						variant="standard"
						sx={inputStyle}
						error={!!errors.description}
						helperText={errors.description?.message}
						{...register('description')}
					/>
					<Box
						component="div"
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'flex-end',
						}}
					>
						<StatusSelect control={control} errors={errors} />
						<Button type="submit" variant="outlined" color="success">
							{isEditingMode ? 'Изменить' : 'Создать'}
						</Button>
					</Box>
				</form>
			</Box>
		</Modal>
	);
};
