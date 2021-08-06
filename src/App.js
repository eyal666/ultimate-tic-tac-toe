import {useState} from "react";
import {GameContext, initGameContext} from "./context/GameContext";
import {GameManager} from "./components/GameManager";
import './css/App.css'

function App() {
	const [gameContext, setGameContext] = useState(() => initGameContext())
	
	return (
		<GameContext.Provider value={{gameContext, setGameContext}}>
			<GameManager/>
		</GameContext.Provider>
	);
}

export default App;
