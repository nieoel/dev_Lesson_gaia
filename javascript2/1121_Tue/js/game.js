// var dice=Math.floor(Math.random()*6)+1 ;
//document.querySelector('#score-0').textContent = dice ;
//document.querySelector('#current-0').textContent = dice ;
// document.querySelector('#current-0').innerHTML = '<em>'+dice+"</em>"
//document.querySelector('.dice').style.display = 'none'

var dice;
var roundscore = 0 ;
var activePlayer = 0 ;
var scores = [0, 0] ;
var gamePlaying ;

function init() {

     roundscore = 0 ;
    activePlayer = 0 ;
    scores = [0, 0] ;
    gamePlaying = true;
//시작할때 주사위 보이지 않게
document.querySelector('.dice').style.display = 'none'

//시작할때 숫자 모두 0으로
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';


document.getElementById('name-0').textContent = 'Player 1 ' ;
document.getElementById('name-1').textContent = 'Player 2' ;

//위너 클래스 삭제
document.querySelector('.player-1-panel').classList.remove('winner') ;
document.querySelector('.player-0-panel').classList.remove('winner') ;

//active 클래스 삭제
document.querySelector('.player-0-panel').classList.remove('active') ;
document.querySelector('.player-1-panel').classList.remove('active') ;


//처음 player 에게액티브 추가
document.querySelector('.player-0-panel').classList.add('active') ;
}
init();

var btn_roll = function (){
   //  alert('roll 버튼클릭')
   if(gamePlaying) {
   // 1. 랜덤한 숫자 나오게 하기
   var dice=Math.floor(Math.random()*6)+1 ;
   // document.getElementById('score-0').textContent= dice;
   // console.log(dice);

   // 2. 주사위 그림 보여주기
  // document.querySelector('.dice').style.display = 'block' ;
   var diceDOM = document.querySelector('.dice')
   diceDOM.style.display='block' ;
   diceDOM.src='./img/dice-'+dice+'.png' ;

    // 3. 주사위가 1이 나오면, 플레이어가 바뀐다
    if (dice !== 1) {
        //add score
        roundscore += dice;
        document.getElementById('current-'+activePlayer).textContent= roundscore;
    } else {
        nextPlayer();
    }
   }
}
document.querySelector('.btn-roll').addEventListener('click', btn_roll);

function btn_hold() {
   // alert('hold버튼을 눌렀습니다.') ;
   // 1. current 값을 scores 에 더함
   scores[activePlayer] += roundscore ;

   // 2. 화면 변경
   document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer] ;

    var input = document.querySelector('.final-score').value ;
    console.log("input="+input);
    var winningScore ;
    if(input){
        winningScore = input
    }   else {
            winningScore = 20;
    }
   // 3. 100점이 넘으면 ...
   if(scores[activePlayer] >= winningScore) {
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!' ;
        document.querySelector('.dice').style.display = 'none' ;

        //이겻을때 클래스 변경
        document.querySelector('.player-' +activePlayer+'-panel').classList.add('winner');
       //  document.querySelector('.player-' +activePlayer+'-panel').classList.remove('active'); //

       gamePlaying = false ;
       
   } else {
        nextPlayer();
    }


   // 4. 다음 플레이어
  // nextPlayer();
}
document.querySelector('.btn-hold').addEventListener('click', btn_hold);

function nextPlayer() {
    if(activePlayer==0) {
            activePlayer =1 ;
            } else {
                activePlayer = 0
        }
        roundscore = 0;
        document.getElementById('current-0').textContent = 0 ;
        document.getElementById('current-1').textContent = 0 ;

        //document.querySelector('.player-0-panel').classList.remove('active') ;
       // document.querySelector('.player-1-panel').classList.add('active') ;
        document.querySelector('.player-0-panel').classList.toggle('active') ;
        document.querySelector('.player-1-panel').classList.toggle('active') ;

        //플레이어 바뀔 떄 주사위 안보이기
        document.querySelector('.dice').style.display = 'none';
}

function btn_new() {
 //   alert('새로운 게임을 눌렀습니다');
    init() ;
    }
document.querySelector('.btn-new').addEventListener('click', btn_new)

