export function initCells() {
	//value of every cell can be null, 'X' or 'O'
	return Array(9).fill(null);
}

export function calculateResult(board, cellClickedIndex) {
	//todo
	// if 'X' return 'X'
	// if 'O' return 'O'
	// if tie return 'tie'
	// else return null
	return null
}

export function changePlayer(currentPlayer) {
	return currentPlayer === 'X' ? 'O' : 'X'
}

export function persistLeaderboardEntry(name, numOfSteps) {
	let leaderboard = loadLeaderBoard()
	
	leaderboard.push({name, numOfSteps})
	leaderboard.sort((entry1, entry2) => entry1.numOfSteps - entry2.numOfSteps)
	
	localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

export function loadLeaderBoard() {
	const leaderboard = JSON.parse(localStorage.getItem('leaderboard'))
	
	return leaderboard ?? []
}