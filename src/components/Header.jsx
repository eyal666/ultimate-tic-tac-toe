import {useGameContext} from "../context/GameContext";
import Button from "./Button";
import './../css/Header.css'
import './../css/Common.css'

export default function Header({startNewGame, showLeaderboard}) {
	const {gameContext} = useGameContext()
	return (
		<div className="header-container">
			<Button isPrimary={true} onButtonClick={startNewGame} label="Start a new game!"/>
			<div className="X-color">{`X steps: ${gameContext.XSteps}`}</div>
			<div className={`${gameContext.currentPlayer}-color xxx-large-font-size`}>{gameContext.currentPlayer} turn!</div>
			<div className="O-color">{`O steps: ${gameContext.OSteps}`}</div>
			<Button isPrimary={true} onButtonClick={showLeaderboard} label="Show leaderboard"/>
		</div>
	)
}