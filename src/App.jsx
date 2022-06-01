import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import * as qstr from './qstr';

const url = 'https://edwardtanguay.netlify.app/share/germanNouns.json';

function App() {
	const [nouns, setNouns] = useState([]);

	useEffect(() => {
		(async () => {
      const _nouns = (await axios.get(url)).data;
      qstr.randomize(_nouns);
			setNouns(_nouns);
		})();
	}, []);

	return (
		<div className="App">
			<h1>German Article Practice</h1>
       <div className="buttons">

<button>der</button>
<button>die</button>
<button>das</button>
<button>Hide</button>

       </div>
       <div className="nouns">
        {nouns.map((noun, index) => {
          return (
            <div className="noun">{noun.article} {noun.singular}</div>
          )
        })}
      </div>
		</div>
	);
}
export default App;