// If you would like to see some examples of similar code to make an interface interact with an API,
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
function oppcheck() {
  var playrpsls = document.getElementById("rpsls");
  var oppchoice = '<br><input type="radio" name="oppOpt" id="rpsOpt">Rock</br>';
  oppchoice += '<br><input type="radio" name="oppOpt" id="rpsOpt">Paper</br>';
  oppchoice +=
    '<br><input type="radio" name="oppOpt" id="rpsOpt">Scissors</br>';

  if (playrpsls.checked == true) {
    oppchoice +=
      '<br><input type="radio" name="oppOpt" id="rpsOpt">Lizard</br>';
    oppchoice += '<br><input type="radio" name="oppOpt" id="rpsOpt">Spock</br>';
  }
  document.getElementById("oppopt").innerHTML = oppchoice;
  //alert("have opp");
}
