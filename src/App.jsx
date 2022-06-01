import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import * as qstr from './qstr';
import styled from 'styled-components';

const url = 'https://edwardtanguay.netlify.app/share/germanNouns.json';

function App() {
	const [nouns, setNouns] = useState([]);
	const [choice, setChoice] = useState('hide');

  const Button = styled.button`
      background-color: ${(props) =>  props.mode === 'selected' ? 'green' : '#eee'}; 
  `;

  const Noun = styled.div`
  background-color: #444;
  padding: 5px;
  text-align: center;
`;

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
        <Button mode={choice === 'der' ? 'selected' : 'unselected'} onClick={() => setChoice('der')}>der</Button>

				<Button mode={choice === 'die' ? 'selected' : 'unselected'}  onClick={() => setChoice('die')}>die</Button>

				<Button mode={choice === 'das' ? 'selected' : 'unselected'} onClick={() => setChoice('das')}>das</Button>

				<Button mode={choice === 'hide' ? 'selected' : 'unselected'} onClick={() => setChoice('hide')}>hide</Button>
			</div>
			<div className="nouns">
				{nouns.map((noun, index) => {
					return (
            <Noun>
            {noun.article} {noun.singular}
          </Noun>
					);
				})}
			</div>
		</div>
	);
}
export default App;
