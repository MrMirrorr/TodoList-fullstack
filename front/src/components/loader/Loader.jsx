import { Box, LinearProgress } from '@mui/material';

export const Loader = ({ isLoading = false }) => {
	if (!isLoading) return null;

	return (
		<Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
			<LinearProgress />
		</Box>
	);
};
