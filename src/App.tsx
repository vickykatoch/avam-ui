import { Footer, Header } from './common/components';
import { AppContextProvider } from './common/context';

function App() {
	return (
		<div className='d-flex flex-column flex-grow-1'>
			<Header />
			<div className='d-flex flex-column flex-grow-1'>Body</div>
			<Footer />
		</div>
	);
}

export default () => (
	<AppContextProvider>
		<App />
	</AppContextProvider>
);
