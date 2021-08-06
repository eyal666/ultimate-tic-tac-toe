export function initCells() {
	//value of every cell can be null, 'X' or 'O'
	return Array(9).fill(null);
}


export function calculateResult(boardArr) {
	const matrix = [
		[boardArr[0], boardArr[1], boardArr[2]],
		[boardArr[3], boardArr[4], boardArr[5]],
		[boardArr[6], boardArr[7], boardArr[8]]
	]
	
	let i
	//rows
	for (i = 0; i < 3; i++) {
		if (matrix[i][0] && matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2]) {
			return matrix[i][0]
		}
	}
	
	//columns
	for (i = 0; i < 3; i++) {
		if (matrix[0][i] && matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i]) {
			return matrix[0][i]
		}
	}
	
	//diagonal
	if ((matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) ||
		(matrix[2][0] && matrix[2][0] === matrix[1][1] && matrix[1][1] === matrix[0][2])) {
		return matrix[1][1]
	}
	
	//check tie
	const isTie = boardArr.every(value => value !== null)
	
	return isTie ? 'tie' : null
}

export function changePlayer(currentPlayer) {
	return currentPlayer === 'X' ? 'O' : 'X'
}

export function loadLeaderboard() {
	const leaderboard = JSON.parse(localStorage.getItem('leaderboard'))
	
	return leaderboard ?? []
}

export function persistLeaderboardEntry(name, numOfSteps) {
	let leaderboard = loadLeaderboard()
	
	leaderboard.push({name, numOfSteps})
	leaderboard.sort((entry1, entry2) => entry1.numOfSteps - entry2.numOfSteps)
	
	localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

export const modalStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		background: 'lightslategray',
	},
};