//business logic
var player = {
  setNumber: (function(number){
    this.number = number;
  }
var name = {
  setNumber: (function(name){
    this.name = name;
  },
}
roll = function() {
  var roll = die.roll();
  if (roll === 1){
    this.points = 0;
  } else {
    this.points += roll;
  }
  return roll;
}
hold: function(){
  this.player.addPoints(this.points);
}


//this is the back end or the businees logic

//create player with an initial score of 0
function player(userName) {
    this.player = userName
    this.score = 0

}
//pass it player object!
function Turn(player) {
    this.total = 0
    this.randomNumber = 0;
    this.player = player;
};
Turn.prototype.diceRoller = function(player1, player2){
    var Die = {
  roll= (function() {
    return Math.floor(Math.random() * 6 + 1);
  }
};
}
