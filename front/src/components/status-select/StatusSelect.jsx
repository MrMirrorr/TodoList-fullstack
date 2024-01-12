import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { STATUS } from '../../constants';

export const StatusSelect = ({
	todoId,
	updateStatusTodo,
	statusFromServer,
	control,
	errors,
}) => {
	const [status, setStatus] = useState(statusFromServer || '');

	useEffect(() => {
		setStatus(statusFromServer || '');
	}, [statusFromServer]);

	const handleChange = (event) => {
		updateStatusTodo(todoId, event.target.value);
		setStatus(event.target.value);
	};

	const renderSelect = () => {
		const menuItems = [
			<MenuItem key="completed" value={STATUS.COMPLETED.VALUE}>
				{STATUS.COMPLETED.NAME}
			</MenuItem>,
			<MenuItem key="inProgress" value={STATUS.IN_PROGRESS.VALUE}>
				{STATUS.IN_PROGRESS.NAME}
			</MenuItem>,
			<MenuItem key="awaitsExecution" value={STATUS.AWAITS_EXECUTION.VALUE}>
				{STATUS.AWAITS_EXECUTION.NAME}
			</MenuItem>,
		];

		if (statusFromServer) {
			// Если statusFromServer доступен, используем локальное состояние и обработчик
			return (
				<Select
					labelId="status-label"
					id="status"
					value={status}
					onChange={handleChange}
					label="Status"
				>
					{menuItems}
				</Select>
			);
		} else {
			// Использование Controller для интеграции с React Hook Form
			return (
				<Controller
					name="status"
					control={control}
					render={({ field }) => (
						<Select
							labelId="status-label"
							id="status"
							{...field}
							label="Status"
						>
							{menuItems}
						</Select>
					)}
				/>
			);
		}
	};

	return (
		<FormControl
			variant="standard"
			sx={{ margin: '15px 0 0 0', minWidth: 120 }}
			error={Boolean(errors?.status)}
		>
			<InputLabel id="status-label">Статус</InputLabel>
			{renderSelect()}
			{errors?.status && <FormHelperText>{errors.status?.message}</FormHelperText>}
		</FormControl>
	);
};
