let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"; 
let gameActive = true;

const squares = document.querySelectorAll(".square");
squares.forEach(square => {
	square.addEventListener("click", handleMove);
	})
	
	function handleMove(e) {
		const index = e.target.dataset.index;
		// prevent playing in already filled squares
		if(board[index] !== "" || !gameActive) return;
		// place mark in the data structure
		board[index] = currentPlayer; 
		// update the dom visually 
		e.target.textContent = currentPlayer; 
		// check wins/draw
		checkGameStatus();
		// switch players 
		currentPlayer = currentPlayer === "X" ? "O" : "X";
		}
		
		const startBtn = document.getElementById("startBtn");
		const restartBtn = document.getElementById("restartBtn");
		const message = document.getElementById("message");
		let player1Name = "";
		let player2Name = "";
		startBtn.addEventListener("click", startGame);
		restartBtn.addEventListener("click", restartGame); 
		
		function startGame() {
			player1Name = document.getElementById("player1").value || "player 1";
			player2Name = document.getElementById("player2").value || "player 2";
			message.textContent = `${player1Name}'s turn (X)`;
			board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
squares.forEach(square => square.textContent = "");
			}
			
			function restartGame() {
				board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  message.textContent = `${player1Name}'s turn (X)`;

  squares.forEach(square => square.textContent = "");
				}
				
				const winningCombos = [
  [0,1,2], [3,4,5], [6,7,8], 
  [0,3,6], [1,4,7], [2,5,8], 
  [0,4,8], [2,4,6]
];
function checkGameStatus() {
	// check for win
	for(let combo of winningCombos) {
	const [a, b, c] = combo; 
	
	if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      const name = board[a] === "X" ? player1Name : player2Name; 
      message.textContent = `${name} wins!`;
 return;
	}
	}
	
	// check for draw
	if(!board.includes("")) {
		gameActive = false;
		message.textContent = "it's a draw!";
		}
		}
	