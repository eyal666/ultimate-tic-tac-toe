import {initPlayerContext, usePlayerContext} from "../Player";
import {useEffect, useState} from "react";
import {calculateResult, changePlayer, initCells} from "../game-utils";
import SubBoard from "./SubBoard";
import "./MainBoard.css"

export const containerStyle = {
	position: 'center',
	height: '400px',
	width: '600px',
	padding: '20px',
	border: 'black',
	background: 'green'
}

export default function MainBoard() {
	const {playerContext, setPlayerContext} = usePlayerContext()
	
	const [winner, setWinner] = useState(null);
	const [boards, setBoards] = useState(() => initCells())
	const [showLeaderBoard, setShowLeaderBoard] = useState(false)
	const [showNameInput, setShowNameInput] = useState(false)
	const [nameInput, setNameInput] = useState('')
	
	function onBoardClicked(index) {
		if (playerContext.turnStage !== 'board' ||
			boards[index] !== null) {
			return;
		}
		
		setPlayerContext({...playerContext, activeBoard: index, currentPlayer: changePlayer(playerContext.currentPlayer)})
	}
	
	function onResult(subResult, index) {
		const newBoards = [...boards]
		newBoards[index] = subResult
		setBoards(newBoards)
		
		const mainResult = calculateResult(newBoards, index)
		if (mainResult) {
			setWinner(playerContext.currentPlayer)
		}
	}
	
	function onSubmitName(name) {
		setShowNameInput(name)
		setShowLeaderBoard(true)
		setShowNameInput(false)
	}
	
	function startNewGame() {
		setPlayerContext(initPlayerContext())
		setWinner(null)
		setBoards(initCells())
		setShowLeaderBoard(false)
		setShowNameInput(false)
		setNameInput('')
	}
	
	useEffect(() => {
		if (winner === 'tie') {
			//todo open tie modal and init all states
		}
		if (winner) {
			setShowNameInput(true)
		}
	}, [winner])
	
	
	return (
		<div style={containerStyle}>
			{
				boards.map((boardValue, index) => {
					return <SubBoard value={boardValue} key={index} onClick={() => onBoardClicked(index)} onResult={onResult}/>
				})
			}
			{/*
				todo
					add name input modal
					add leaderboard modal
					add new game button
			*/}
		</div>
	)
}
