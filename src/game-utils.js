export function initCells() {
	//value of every cell can be null, 'X' or 'O'
	return Array(9).fill(null);
}

// export function renderCells(cells, Component, onCellClick) {
// 	return cells.map((cellVal, index) => {
// 		return <Component val={cellVal} key={index} onClick={() => onCellClick(cells, index)}/>
// 	})
// }

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
