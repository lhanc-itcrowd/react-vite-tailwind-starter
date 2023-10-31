import { useState } from 'react';
import reactLogo from './assets/react.svg';

import '@lib/styles/global.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://react.dev" rel="noreferrer" target="_blank">
					<img alt="React logo" className="logo react" src={reactLogo} />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="top-0 mx-4 p-1">
				<button
					type="button"
					onClick={() => setCount((currentCount: number) => currentCount + 1)}
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
