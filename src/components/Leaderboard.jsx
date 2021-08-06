import {loadLeaderboard, modalStyles} from "../utils/game-utils";
import Modal from "react-modal";
import {useEffect, useState} from "react";
import '../css/Leaderboard.css'

export default function Leaderboard({isOpen, onRequestClose}) {
	const [leaderboardEntries, setLeaderboardEntries] = useState(loadLeaderboard())
	
	useEffect(() => {
		//forcing re-render to load leaderboard
		if (isOpen) {
			setLeaderboardEntries(loadLeaderboard())
		}
	}, [isOpen])
	
	return (
		<Modal
			isOpen={isOpen}
			style={modalStyles}
			onRequestClose={onRequestClose}>
			{leaderboardEntries.length !== 0 ?
				<div>
					<h1 className="flex-container">Leaderboard</h1>
					<table>
						<tr>
							<th><h2>Name</h2></th>
							<th><h2>Number of steps</h2></th>
						</tr>
						{leaderboardEntries.map(entry => {
							return (
								<tr>
									<th>{entry.name}</th>
									<th>{entry.numOfSteps}</th>
								</tr>
							)
						})}
					</table>
				</div>
				:
				<h1>No winners yet :'(</h1>
			}
		
		</Modal>
	)
}

