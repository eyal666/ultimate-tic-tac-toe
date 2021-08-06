import './../css/Header.css'
import {useGameContext} from "../context/GameContext";

export default function Header({startNewGame, showLeaderBoard}) {
	const {gameContext} = useGameContext()
	return (
		<div className="header-container">
			<button className="button" onClick={startNewGame}>Start a new game!</button>
			<div className="X-color">{`X steps: ${gameContext.XSteps}`}</div>
			<div className={`${gameContext.currentPlayer}-color xxx-large-font-size`}>{gameContext.currentPlayer} turn!</div>
			<div className="O-color">{`O steps: ${gameContext.OSteps}`}</div>
			<button className="button" onClick={showLeaderBoard}>Show leaderboard</button>
		</div>
	)
}