import { useState } from 'react';

export const useSnackbar = () => {
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: '',
		severity: 'info',
	});

	const handleSnackbarClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setSnackbar({ ...snackbar, open: false });
	};

	return {
		snackbar,
		setSnackbar,
		handleSnackbarClose,
	};
};
