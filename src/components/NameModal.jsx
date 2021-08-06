import {useGameContext} from "../context/GameContext";
import {useState} from "react";
import Modal from 'react-modal'
import Button from "./Button";
import '../css/Common.css'
import {modalStyles, persistLeaderboardEntry} from "../utils/game-utils";

export default function NameModal({onSubmitPlayerName, isOpen}) {
	const {gameContext} = useGameContext()
	const [playerName, setPlayerName] = useState('')
	
	function submitPlayerName() {
		persistLeaderboardEntry(playerName, gameContext.winner === 'X' ? gameContext.XSteps : gameContext.OSteps)
		setPlayerName('')
		onSubmitPlayerName()
	}
	
	return (
		<Modal
			isOpen={isOpen}
			style={modalStyles}
			shouldCloseOnOverlayClick={gameContext.winner === 'tie'}>
			{
				gameContext.winner === 'tie' ?
					<h1>It's a tie!</h1> /*in a very rare situation when we have a whole-board tie*/
					:
					<div>
						<h2 className={`${gameContext.winner}-color`}>Player {gameContext.winner} won!</h2>
						<h4>What is your name?</h4>
						<div className="flex-container">
							<input type="text" value={playerName} onChange={e => setPlayerName(e.target.value)}/>
							<Button isPrimary={false} onButtonClick={submitPlayerName} label="Submit"/>
						</div>
					</div>
			}
		</Modal>
	)
}