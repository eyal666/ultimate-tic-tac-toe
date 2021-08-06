import './../css/Header.css'
import Button from "./Button";
import {useGameContext} from "../context/GameContext";

export default function Header({startNewGame}) {
	const {gameContext} = useGameContext()
	// todo:
	//  new game button
	//  show num of steps
	//  show who's turn is
	//  show turn stage and give instructions
	return (
		<div className="header-container">
			<div>{`X steps: ${gameContext.XSteps}`}</div>
			<div>{`O steps: ${gameContext.OSteps}`}</div>
			<Button primary={true} label={'start new game'} onButtonClick={startNewGame}/>
			<Button primary={false} label={'Secondary'}/>
		</div>
	)
}