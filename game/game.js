const game = () => {
  // Variables to be updated as game is being played
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  // 
  const fixedReload = document.querySelector('.header-buttons-maximize-refresh');
  fixedReload.addEventListener('click', ()=> {
    window.location.reload();
  });

  const playGame = () => {
    // 1. declare buttons as options
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissors');
    const playerOptions = [rockBtn,paperBtn,scissorBtn];
    const computerOptions = ['rock','paper','scissors'];

    // hide the restart button
    document.querySelector('.reload').style.display = 'none';


    // 2. loop through options, apply eventListener on click
    //    update variables for remaining moves
    //    run random computer choice
    playerOptions.forEach(option => {
      option.addEventListener('click', function(){
        const movesLeft = document.querySelector('.movesleft');
        moves++;
        // updates moves left
        // note: rename moves left to rounds left
        movesLeft.innerText = `Moves left: ${10-moves}`;

        // random # from 1-3 .. shouldn't it be *3?
        const choiceNumber = Math.floor(Math.random()*3);
        console.log(choiceNumber);
        // selecting index of choice from computerOptions
        console.log(computerOptions);
        const computerChoice = computerOptions[choiceNumber];
        console.log(computerChoice);

        // 3. check who wins (external function)
        winner(this.innerText,computerChoice);

        // state that game is ongoing
        // document.querySelector('.move').innerText = 'Keep going!';
        document.querySelector('.move').innerText = 'Keep going! Keep going! Keep going! Keep going! Keep going! Keep going!';
        document.querySelector('.marquee-trailing-span').innerText = 'Keep going! Keep going! Keep going! Keep going! Keep going! Keep going!';

    
        // 4. call game over after a set # of moves (external function)
        if (moves == 10){
          gameOver(playerOptions,movesLeft)
        }
      })
    })
  };

  // note: put helper functions in external file?
  const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    player = player.toLowerCase(); // why?
    computer = computer.toLowerCase();

    // case: both players choose the same thing
    if(player === computer){
      result.textContent = 'Tie'
    }

    // case: player chooses rock
    else if (player == 'rock') {
      if (computer == 'paper'){
      result.textContent = 'Computer won';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = 'Player won';
        playerScore++;
        playerScoreBoard.textContent = playerScore
      }
    }

    // case: player chooses paper
    else if (player == 'paper') {
      if (computer == 'scissors'){
      result.textContent = 'Computer won';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = 'Player won';
        playerScore++;
        playerScoreBoard.textContent = playerScore
      }
    }

    // case: player chooses scissors
    else if (player == 'scissors') {
      if (computer == 'rock'){
      result.textContent = 'Computer won';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = 'Player won';
        playerScore++;
        playerScoreBoard.textContent = playerScore
      }
    };
  };

  const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector('.move');
    const marqueeText = document.querySelector('.marquee-trailing-span')
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');

    playerOptions.forEach(option => {
      // hides button options in div if game over
      option.style.display = 'none';
    })

    chooseMove.innerText = 'Game Over! Game Over! Game Over! Game Over! Game Over! Game Over!'
    marqueeText.innerText = 'Game Over! Game Over! Game Over! Game Over! Game Over! Game Over!'
    movesLeft.style.display = 'none';
    document.querySelector('.game-buttons-block').style.display = 'none';

    // using if direct is fastest b/c of direct comparison
    if (playerScore > computerScore) {
      result.innerText = 'You won the game';
    } else if (playerScore < computerScore) {
      result.innerText = 'You lost the game';
    } else {
      result.innerText = 'Tie!';
    }

    // reload the game after game over
    document.querySelector('.reload').style.display = 'inherit';
    reloadBtn.innerText = 'Restart';
    reloadBtn.addEventListener('click', ()=> {
      window.location.reload();
    })
  };
  playGame();
};
game();