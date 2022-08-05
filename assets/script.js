function show(time = 1) {
  var startcontainer = document.querySelector("#start-btn");
  var quizcontainer = document.querySelector("#Quiz");
  var HighScorecontainer = document.querySelector("#High-Score");

  quizcontainer.hidden = true;
  HighScorecontainer.hidden = true;
  startcontainer.hidden = true;

  if (time == 0) startcontainer.hidden = false;
  if (time == 1) {
    quizcontainer.hidden = false;
  }
  if (time == 2) {
    HighScorecontainer.hidden = false;
  }
}
show(0);
var beginbtn = document.querySelector("#Begin-btn");
beginbtn.addEventListener("click", defaultshow);

function defaultshow(e) {
  console.log(e.target);
  show();
}
