// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
// If you would like to see some examples of similar code to make an interface interact with an API,
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
function play() {
  var playrps = document.getElementById("rps");
  var playrpsls = document.getElementById("rpsls");
  var opp = document.getElementById("opponent");
  if (playrps.checked == true) {
    if (opp.checked == true) {
      console.log("rps+opp");
      alert("rps+opp");
    } else {
      console.log("rps");
      alert("rps");
    }
  } else if (playrpsls.checked == true) {
    if (opp.checked == true) {
      console.log("rpsls+opp");
      alert("rpsls+opp");
    } else {
      console.log("rpsls");
      alert("rpsls");
    }
  } else {
    alert("Please choose the game!");
  }
}
