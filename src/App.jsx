import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';

const url = 'https://edwardtanguay.netlify.app/share/germanNouns.json';

function App() {
	const [nouns, setNouns] = useState([]);

	useEffect(() => {
		(async () => {
			setNouns((await axios.get(url)).data);
		})();
	}, []);

	return (
		<div className="App">
			<h1>German Article Practice</h1>
      <p>There are {nouns.length} nouns.</p>
		</div>
	);
}

export default App;