let score = JSON.parse(localStorage.getItem('score')) || { win:0, losses:0, tie:0 };

    function computerMove() {
      const moves = ["rock", "paper", "scissor"];
      return moves[Math.floor(Math.random()*3)];
    }

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
      document.getElementById("message").innerHTML = `You <img src=images/${playerMove}.jpeg 
      class="icon">
      Computer  <img src=images/${cm}.jpeg 
      class="icon">`;
      document.getElementById("score").innerText = `Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.tie}`;
    }

    function resetScore(){
      score = { win:0, losses:0, tie:0 };
      localStorage.setItem('score', JSON.stringify(score));
      document.getElementById("score").innerText = `Wins: 0, Losses: 0, Ties: 0`;
      document.getElementById("result").innerText = "Game reset!";
    }

    // show score on page load
    document.getElementById("score").innerText = `Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.tie}`;