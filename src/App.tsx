/* Assets */
import ITCrowdLogo from '@/assets/it-crowd.svg';

import '@lib/styles/global.css';

function App() {
	return (
		<>
			<header className="flex h-[50%] w-full flex-col items-center justify-center gap-10 bg-secondary ">
				<img alt="IT Crowd Logo" height={74} src={ITCrowdLogo} width={360} />
				<h1 className="text-2xl font-bold text-primary-300">
					React + Vite + Tailwind Starter
				</h1>
			</header>
			<main className="flex h-[50%] w-full flex-col items-center justify-center gap-10 bg-secondary text-slate-100">
				<p>
					Please checkout the <strong>README</strong> before starting.
				</p>
				<p>Happy coding! 🚀</p>
			</main>
		</>
	);
}

export default App;
