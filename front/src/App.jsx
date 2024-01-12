import { Container } from '@mui/material';
import { Todos } from './components/todos/Todos';

export const App = () => {
	return (
		<Container maxWidth="xl">
			<Todos />
		</Container>
	);
};
