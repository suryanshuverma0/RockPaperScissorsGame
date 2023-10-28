const player_score = document.getElementById("player-score");
const computer_score = document.getElementById("computer-score");
const play_btn = document.getElementById("play");
const user_choice = document.getElementById("user_choice");
const computer_choice = document.getElementById("computer_choice");

let playerScore = 0;
let computerScore = 0;

const scissor = document.getElementById("scissor");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");

play_btn.addEventListener("click", function () {

  if (playerScore === 5 || computerScore === 5) {
    confirm("Match is alreaedy over. Do you want to play again");
    resetGame();
    location.reload();
  }
  scissor.disabled = false;
  paper.disabled = false;
  rock.disabled = false;
  play_btn.disabled = false;

  function generateRandom() {
    //generating random choice for computer
    const computerOption = ["✌️", "🖐️", "👊"];
    const random = Math.floor(Math.random() * computerOption.length);
    return computerOption[random];
  }
  //writting the choice of user in input field
  scissor.onclick = () => {
    if (playerScore < 5 && computerScore < 5) {
      user_choice.value = "✌️";
      const computerChoice = generateRandom();
      computer_choice.value = computerChoice;
      comparison("✌️", computerChoice);
    } //concept of hoisting is used here
  };

  paper.onclick = () => {
    if (playerScore < 5 && computerScore < 5) {
      user_choice.value = "🖐️";
      const computerChoice = generateRandom();
      computer_choice.value = computerChoice;
      comparison("🖐️", computerChoice);
    }
  };

  rock.onclick = () => {
    if (playerScore < 5 && computerScore < 5) {
      user_choice.value = "👊";
      const computerChoice = generateRandom();
      computer_choice.value = computerChoice;
      comparison("👊", computerChoice);
    }
  };
  function comparison(user, computer) {
    if (user === computer) {
      console.log("tie");
    } else if (
      (user === "✌️" && computer === "🖐️") ||
      (user === "🖐️" && computer === "👊") ||
      (user === "👊" && computer === "✌️")
    ) {
      playerScore++;
    } else {
      computerScore++;
    }
    //update
    player_score.value = playerScore;
    computer_score.value = computerScore;
    if (playerScore === 5 || computerScore === 5) {
      scissor.disabled = true;
      paper.disabled = true;
      rock.disabled = true;
      //play_btn.disabled = true;
      if (playerScore > computerScore) {
        const message1 = document.createElement("div");
        const messageP1 = document.createElement("p");
        message1.appendChild(messageP1);

        message1.style.position = "absolute";
        message1.style.bottom = "0";
        message1.style.left = "0";
        message1.style.right = "0";
        message1.style.background = "green";
        message1.style.color = "white";
        message1.style.fontSize = "26px";
        message1.style.fontWeight = "800";
        message1.style.padding = "10px";
        message1.style.textAlign = "center";

        const container = document.querySelector(".container");
        container.appendChild(message1);
        messageP1.innerHTML =
          "Congratulations ueer finally won the match against comoputer.";
      } else if (computerScore > playerScore) {
        const message2 = document.createElement("div");
        const messageP2 = document.createElement("p");
        message2.appendChild(messageP2);

        message2.style.position = "absolute";
        message2.style.bottom = "0";
        message2.style.left = "0";
        message2.style.right = "0";
        message2.style.background = "red";
        message2.style.fontWeight = "800";
        message2.style.fontSize = "26px";
        message2.style.color = "black";
        message2.style.padding = "10px";
        message2.style.textAlign = "center";

        const container = document.querySelector(".container");
        container.appendChild(message2);
        messageP2.innerHTML =
          "Sorry you lost the match against comoputer. Please try again";
      } else {
        alert("game is tie");
      }
    }
  }
  function resetGame() {
    user_choice.value = "";
    computer_choice.value = "";
    playerScore = 0;
    computerScore = 0;
    player_score.value = playerScore;
    computer_score.value = computerScore;
  }
});
