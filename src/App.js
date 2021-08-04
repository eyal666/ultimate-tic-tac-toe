import './App.css';
import MainBoard from "./components/MainBoard";
import {useState} from "react";
import {initPlayerContext, PlayerContext} from "./Player";


function App() {
	// currentPlayer: 'X' or 'O'
	// turnStage: 'tile' or 'board'
	
	const [playerContext, setPlayerContext] = useState(() => initPlayerContext())
	return (
		<div className="App">
			<PlayerContext.Provider value={{playerContext, setPlayerContext}}>
				<MainBoard/>
			</PlayerContext.Provider>
		</div>
	);
}

export default App;
