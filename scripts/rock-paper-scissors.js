document.querySelector('.js-rock-button').addEventListener('click',()=>{
  playGame('rock')
});

document.querySelector('.js-paper-button').addEventListener('click',()=>{
  playGame('paper')
});

document.querySelector('.js-scissor-button').addEventListener('click',()=>{
  playGame('scissors')
});

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r'){
    playGame('rock');
  }
  else if(event.key==='p'){
    playGame('paper');
  }
  else if(event.key==='s'){
    playGame('scissors');
  }
})



let score=JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
updateScoreElement();



// if(score===null){
// if(!score){
//   score={
//     wins: 0,
//     losses: 0,
//     ties: 0
//   }
// }

let isAutoPlay=false;
let intervalId;
function autoPlay(){
  let autoPlayBtn=document.querySelector('.auto-play-button');
  if(!isAutoPlay){
    autoPlayBtn.innerText='Reset'
    // intervalId=setInterval(function(){
    //   const playerMove=pickComputerMove();
    //   playGame(playerMove);
    // },1000);
    intervalId=setInterval(()=>{
      const playerMove=pickComputerMove();
      playGame(playerMove);
    },1000);
    isAutoPlay=true;
  }
  else{
    clearInterval(intervalId);
    isAutoPlay=false;
    autoPlayBtn.innerText='Auto Play';
  }
}


function playGame(playerMove){
  const computerMove=pickComputerMove();
  let result='';
  if(playerMove==='scissors'){
    if(computerMove==='rock'){
      result='You Lose.';
    }
    else if(computerMove==='paper'){
      result='You Win.';
    }
    else if(computerMove==='scissors'){
      result='Tie.';
    }
  }

  else if(playerMove==='paper'){
    if(computerMove==='rock'){
      result='You Win.';
    }
    else if(computerMove==='paper'){
      result='Tie.';
    }
    else if(computerMove==='scissors'){
      result='You Lose.';
    }
  }

  else if(playerMove==='rock'){
    if(computerMove==='rock'){
      result='Tie.';
    }
    else if(computerMove==='paper'){
      result='You Lose.';
    }
    else if(computerMove==='scissors'){
      result='You Win.';
    }
  }

  if(result==='You Win.'){
    score.wins+=1;
  }
  else if(result==='You Lose.'){
    score.losses+=1;
  }
  if(result==='Tie.'){
    score.ties+=1;
  }

  localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement();

  updateResult(result);

  updateMove(playerMove,computerMove);

//       alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function updateResult(result){
  document.querySelector('.js-result').innerHTML=result;
}

function updateMove(playerMove,computerMove){
  document.querySelector('.js-moves').innerHTML=`
  You <img src="assets/${playerMove}-emoji.png" class="move-icon">
  <img src="assets/${computerMove}-emoji.png" class="move-icon"> Computer
  `;
}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove(){
  const randomNumber=Math.random();
  let computerMove='';

  if(randomNumber>=0 && randomNumber<1/3){
    computerMove='rock';
  }

  else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove='paper';
  }

  else if(randomNumber>=2/3 && randomNumber<1){
    computerMove='scissors';
  }

  return computerMove;
}