import {useGameContext} from "../context/GameContext";
import {useState} from "react";

export default function NameModal({onSubmitPlayerName}) {
	const {gameContext, setGameContext} = useGameContext()
	const [playerName, setPlayerName] = useState('')
	
	function submitPlayerName() {
		setGameContext({...gameContext, winnerName: playerName})
		onSubmitPlayerName()
	}
	
	return (
		<div>
			---- name modal ----
		</div>
	)
}