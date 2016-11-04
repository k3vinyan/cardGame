var playerOne = {};
var playerTwo ={};
playerOne.score = 0;
playerTwo.score = 0;

playerOne.cards = [
      { name: "Musician",
        player: "player1",
        value: 0,
        desc: "This round is nullifed and put on hold",
        priority: 1000,
        power: {
          type: "carry",
          cast: function(point){
            var point = 1;
          }
        }
      },
      {
        name: "Princess",
        player: "player1",
        value: 1,
        desc: "If your opponent plays the prince, you automatically win the game",
        priority: 6,
        power: {
          type: "instance win",
          cast: function(playerCard, opponentCard){
            if(opponentCard.name === "Prince") {
              console.log("Game Over");
            }
          }
        }
      },
      {
        name: "Spy",
        player: "player1",
        value: 2,
        desc: "Next round, your opponent reveals his card before you choose yours",
        priority: 5,
        power: {
          type: "carry",
          cast: function(){
            console.log("I am a spy")
          }
        }
      },
      {
        name: "Assassin",
        player: "player1",
        value: 3,
        desc: "The lowest strength wins",
        priority: 4,
        power: {
          type: "instance",
          cast: function(playerCard, opponentCard, playerScore, opponentScore){
            if(playerCard.value < opponentCard.value) {
              playerScore++;
            } else {
              opponentScore++;
            }
          }
        }
      },
      {
        name: "Ambassador",
        player: "player1",
        value: 4,
        desc: "If you win with this card, it counts as 2 victories",
        priority: 3,
        power: {
          type: "instance",
          cast: function(playerCard, opponentCard, playerScore, opponentScore){
            if(playerCard > opponentCard) {
              playerScore += 2;
            } else {
              opponentScore++;
            }
          }
        }
      },
      {
        name: "Wizard",
        player: "player1",
        value: 5,
        desc: "Nullifies the special Power of your opponent card",
        priority: 10,
        power: {
          type: "instance",
          cast: function(playerCard, opponentCard, playerScore, opponentScore){
            if(playerCard.value > opponentCard.value){
              playerScore++;
            } else {
              opponentScore++
            }
          }
        }
      },
      {
        name: "General",
        player: "player1",
        value: 6,
        desc: "The Card in your next round get +2 strength",
        priority: 1,
        power: {
          type: "carry",
          cast: function(playerCard, opponentCard, playerScore, opponentScore){
            console.log("Nothing yet");
          }
        }
      },
      {
        name: "Prince",
        player: "player1",
        value: 7,
        desc: "You win the round",
        priority: 0,
        power: {
          type: "instance",
          cast: function(playerCard, opponentCard, playerScore, opponentScore){
            if(playerCard.value > opponentCard){
              playerScore++;
            } else {
              opponentScore++;
            }
          }
        }
      }
    ]



playerTwo.cards = [
      { name: "Musician",
        player: "player2",
        value: 0,
        desc: "This round is nullifed and put on hold",
        priority: 1000,
        power: {
          type: "carry",
          cast: function(point){
            var point = 1;
          }
        }
      },
      {
        name: "Princess",
        player: "player2",
        value: 1,
        desc: "If your opponent plays the prince, you automatically win the game",
        priority: 6,
        power: {
          type: "win",
          cast: function(playerCard, opponentCard){
            if(opponentCard.name === "Prince") {
              console.log("Game Over");
            }
          }
        }
      },
      {
        name: "Spy",
        player: "player2",
        value: 2,
        desc: "Next round, your opponent reveals his card before you choose yours",
        priority: 5,
        power: {
          type: "carry",
          cast: function(){
            console.log("I am a spy")
          }
        }
      },
      {
        name: "Assassin",
        player: "player2",
        value: 3,
        desc: "The lowest strength wins",
        priority: 4,
        power: {
          type: "instance",
          cast: function(playerCard, opponentCard, playerScore, opponentScore){
            if(playerCard.value < opponentCard.value) {
              playerScore++;
            } else {
              opponentScore++;
            }
          }
        }
      },
      {
        name: "Ambassador",
        player: "player2",
        value: 4,
        desc: "If you win with this card, it counts as 2 victories",
        priority: 3,
        power: {
          type: "instance",
          cast: function(playerCard, opponentCard, playerScore, opponentScore){
            if(playerCard > opponentCard) {
              playerScore += 2;
            } else {
              opponentScore++;
            }
          }
        }
      },
      {
        name: "Wizard",
        player: "player2",
        value: 5,
        desc: "Nullifies the special Power of your opponent card",
        priority: 10,
        power: {
          type: "instance",
          cast: function(playerCard, opponentCard, playerScore, opponentScore){
            if(playerCard.value > opponentCard.value){
              playerScore++;
            } else {
              opponentScore++
            }
          }
        }
      },
      {
        name: "General",
        player: "player2",
        value: 6,
        desc: "The Card in your next round get +2 strength",
        priority: 1,
        power: {
          type: "carry",
          cast: function(playerCard, opponentCard, playerScore, opponentScore){
            console.log("Nothing yet");
          }
        }
      },
      {
        name: "Prince",
        player: "player2",
        value: 7,
        desc: "You win the round",
        priority: 0,
        power: {
          type: "instance",
          cast: function(playerCard, opponentCard, playerScore, opponentScore){
            if(playerCard.value > opponentCard){
              playerScore++;
            } else {
              opponentScore++;
            }
          }
        }
      }
    ]
