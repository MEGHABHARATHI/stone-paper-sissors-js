    
    let score = JSON.parse(localStorage.getItem('score')) || { win:0, losses:0, tie:0 };

    function computerMove() {
      const moves = ["rock", "paper", "scissor"];
      return moves[Math.floor(Math.random()*3)];
    }

    let rockBtn = document.querySelector('.rock');
    let paperBtn = document.querySelector('.paper');
    let scissorBtn = document.querySelector('.scissor');
// instead of using onclick in html, we can use event listeners in js
// istead of using norma function we can use arrow function here "() => {}"
    rockBtn.addEventListener('click', () => play('rock'));
    paperBtn.addEventListener('click', () => play('paper'));
    scissorBtn.addEventListener('click', () => play('scissor'));

    function play(playerMove) {
      let cm = computerMove();
      let res = "";

      if(playerMove === cm){
        res = "TIE";
        score.tie++;
      }
      else if(
        (playerMove==="rock" && cm==="scissor") ||
        (playerMove==="paper" && cm==="rock") ||
        (playerMove==="scissor" && cm==="paper")
      ){
        res = "YOU WIN 🎉";
        score.win++;
      }
      else{
        res = "YOU LOSE 😢";
        score.losses++;
      }

      localStorage.setItem('score', JSON.stringify(score));

      document.getElementById("result").innerText = `${res}`;
      document.getElementById("message").innerHTML = `You <img src=${playerMove}.jpeg 
      class="icon">
      Computer  <img src=${cm}.jpeg 
      class="icon">`;
      document.getElementById("score").innerText = `Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.tie}`;
    }


    document.body.addEventListener('keydown', (event) => {
      if(event.key === 'r'){
        play('rock');
      } else if(event.key === 'p'){
        play('paper');
      }
      else if(event.key === 's'){   
        play('scissor');
      }
    });

    let resetbtn = document.querySelector('.reset-btn');
    resetbtn.addEventListener('click', ()=> resetScore());
    function resetScore(){
      score = { win:0, losses:0, tie:0 };
      localStorage.setItem('score', JSON.stringify(score));
      document.getElementById("score").innerText = `Wins: 0, Losses: 0, Ties: 0`;
      document.getElementById("result").innerText = "Game reset!";
    }

    // show score on page load
    document.getElementById("score").innerText = `Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.tie}`;

    let autoplayBtn = document.querySelector('.autoplay');
    autoplayBtn.addEventListener('click', () => autoplay());
    function autoplay(){
      if(document.querySelector('.autoplay').innerText === 'auto play'){
        document.querySelector('.autoplay').innerText = 'stop auto play';
        intervalId = setInterval(() => {
          const playerMove = computerMove();
          play(playerMove);
        }, 1000);
      } else {
        document.querySelector('.autoplay').innerText = 'auto play';
        clearInterval(intervalId);
      }
    }






