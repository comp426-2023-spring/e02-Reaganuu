// If you would like to see some examples of similar code to make an interface interact with an API,
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
const mode = document.getElementById("rps").checked ? "rps" : "rpsls";
const opponent = document.getElementById("opponent").checked;
function oppcheck() {
  var playrpsls = document.getElementById("rpsls");
  var oppchoice =
    '<br><input type="radio" name="oppOpt" id="rock" value="rock">Rock';
  oppchoice +=
    '<input type="radio" name="oppOpt" id="paper" value="paper">Paper';
  oppchoice +=
    '<input type="radio" name="oppOpt" id="scissors" value="scissors">Scissors';

  if (playrpsls.checked == true) {
    oppchoice +=
      '<input type="radio" name="oppOpt" id="lizard" value="lizard">Lizard';
    oppchoice +=
      '<input type="radio" name="oppOpt" id="spock" value="spock">Spock';
  }
  document.getElementById("oppopt").innerHTML = oppchoice;
  //alert("have opp");
}

function play() {
  document.querySelector("#game").className = "inactive";
  document.querySelector("#play-btn").className = "inactive";
  document.querySelector("#result").className = "active";
}
