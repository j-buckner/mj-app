var canvas, stage;
window.addEventListener('resize', resize);

function init() {
  canvas = document.getElementById("canvas");
  stage = new createjs.Stage(canvas);
  stage.removeAllChildren();
  stage.update();
  resize();
  start();
}

function resize() {
    stage.canvas.width = window.innerWidth;
    stage.canvas.height = window.innerHeight; 
}

function start() {
  
  // loadAnimation();
  loadIntroTextOne();
}

function loadIntroTextOne() {
  var text = new createjs.Text("let's go on an ", "50px quicksandregular", "white");
  text.alpha = 0;
  text.x = (stage.canvas.width / 2) - text.getMeasuredWidth();
  text.y = (stage.canvas.height / 2) - 100;
  stage.addChild(text);

  var textAdventure = new createjs.Text("adventure ", "50px quicksandregular", "#D5A217");
  textAdventure.alpha = 0;
  textAdventure.x = (stage.canvas.width / 2);
  textAdventure.y = (stage.canvas.height / 2) - 100;
  stage.addChild(textAdventure);

  var textTogether = new createjs.Text("together", "50px quicksandregular", "white");
  textTogether.alpha = 0;
  textTogether.x = (stage.canvas.width / 2) + textAdventure.getMeasuredWidth();
  textTogether.y = (stage.canvas.height / 2) - 100;
  stage.addChild(textTogether);

  createjs.Tween.get(text, { loop: false })
  .to({ alpha: 1 }, 3500, createjs.Ease.getPowIn(1.5))
  .to({ alpha: 0 }, 3500, createjs.Ease.getPowIn(1.5));

  createjs.Tween.get(textAdventure, { loop: false })
  .to({ alpha: 1 }, 3500, createjs.Ease.getPowIn(1.5))
  .to({ alpha: 0 }, 3500, createjs.Ease.getPowIn(1.5));

  createjs.Tween.get(textTogether, { loop: false })
  .to({ alpha: 1 }, 3500, createjs.Ease.getPowIn(1.5))
  .to({ alpha: 0 }, 3500, createjs.Ease.getPowIn(1.5))
  .call(loadIntroTextTwo);

  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);
}

function loadIntroTextTwo() {
  var text = new createjs.Text("let's go somewhere ", "50px quicksandregular", "white");
  text.alpha = 0;
  text.x = (stage.canvas.width / 2) - text.getMeasuredWidth();
  text.y = (stage.canvas.height / 2) - 100;
  stage.addChild(text);

  var textFarAway = new createjs.Text("far away", "50px quicksandregular", "#D5A217");
  textFarAway.alpha = 0;
  textFarAway.x = (stage.canvas.width / 2);
  textFarAway.y = (stage.canvas.height / 2) - 100;
  stage.addChild(textFarAway);

  createjs.Tween.get(text, { loop: false })
  .to({ alpha: 1 }, 3500, createjs.Ease.getPowIn(1.5))
  .to({ alpha: 0 }, 3500, createjs.Ease.getPowIn(1.5));

  createjs.Tween.get(textFarAway, { loop: false })
  .to({ alpha: 1 }, 3500, createjs.Ease.getPowIn(1.5))
  .to({ alpha: 0 }, 3500, createjs.Ease.getPowIn(1.5))
  .call(loadOptions);

  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);
}

function loadOptions() {
  loadAnimation();
}


function loadAnimation() {
  forestRoot = new lib.ForestAnimation();
  console.log(forestRoot);
  forestRoot.x = 300;
  forestRoot.y = 300;
  stage.addChild(forestRoot); 

  treeRoot = new lib.RoundTreeGrowing();
  stage.addChild(treeRoot);

  createjs.Ticker.setFPS(24);
  createjs.Ticker.addEventListener("tick", stage);
}