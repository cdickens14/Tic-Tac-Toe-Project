const state = {
    players: ['X', 'O'],
    currentPlayer: '',
    board: ['', '', '','', '', '','', '', ''],
    isComputerPlaying: false,
}

//DOM Selectors
const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');
const playerOneDisplay = document.getElementById('player-one-display');
const playerTwoDisplay = document.getElementById('player-two-display');
const enterButton = document.getElementsByClassName('enter');
const label = document.getElementsByClassName('label');
const multiplayer = document.getElementById('multiplayer');
const computerPlayer = document.getElementById('computer');
const boxDiv = document.getElementsByClassName('box');
const restartGame =document.getElementById('restart-game');

//Helper functions
const switchTurns = () => {
    if (state.currentPlayer === state.players[0]){
        state.currentPlayer = state.players[1];
    } else {
        state.currentPlayer = state.players[0];
    }
};

const isWinner = () => {
    const winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        ]
    
    for (let winner of winningCombos){
         [box1, box2, box3] = winner;

    if (state.board[box1] !== '' &&
    (state.board[box1] === state.board[box2]) &&
    (state.board[box2] === state.board[box3]))
    {
        alert("You Win!");
    } 
}};

const isDraw = () => {
    const allSpacesUsed = state.board.every(boxDiv => boxDiv !== '');
    if (allSpacesUsed){
        alert("It's a draw!");
    }
};
    
const computerChoice = () => {
    state.isComputerPlaying === true;
    state.currentPlayer = state.players[1];
    const computerTurn = Math.floor(Math.random() * boxDiv.length);
    boxDiv[computerTurn].textContent = 'O';
    switchTurns();
    isWinner();
    isDraw();
};

//Event Listeners
enterButton[0].addEventListener('click', () => {
    const message = "Player One: ";
    playerOneDisplay.innerText = `${message} ${playerOne.value}`;
    playerOne.value = '';
});
enterButton[1].addEventListener('click', () => {
    computerPlayer.style.display = 'none';
    const message = "Player Two: ";
    playerTwoDisplay.innerText = `${message} ${playerTwo.value}`;
    playerTwo.value = '';
});


for (let i =0; i<boxDiv.length; i++){
    boxDiv[i].addEventListener('click', (event) => {
    if (state.isComputerPlaying === true){
        computerChoice();
    }
    if (event.target.innerText === ''){
    event.target.innerText = state.currentPlayer;
    state.board[i] = state.currentPlayer;
    }
    switchTurns();
    isWinner();
    isDraw();
})};

restartGame.addEventListener('click', () => {
    for (let i = 0; i<boxDiv.length; i++){
        boxDiv[i].innerText = '';
        state.board[i] = '';
        playerOneDisplay.innerText = 'Player One: ';
        playerTwoDisplay.innerText = 'Player Two: ';
        computerPlayer.style.display = 'initial';
        playerOne.style.display = 'initial';
        playerTwo.style.display = 'initial';
        label[1].style.display = 'initial';
        enterButton[1].style.display = 'initial';
        state.currentPlayer = state.players[0];
        state.isComputerPlaying = false;
}});

computerPlayer.addEventListener('click', () => {
    computerPlayer.style.display = 'none';
    playerOne.style.display = 'block';
    label[1].style.display = 'none';
    playerTwoDisplay.innerText = 'Player Two: Computer';
    playerTwo.style.display = 'none';
    enterButton[1].style.display = 'none';
    state.isComputerPlaying = true;
});

    



