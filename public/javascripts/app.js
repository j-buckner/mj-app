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
  loadIntroTextOne();
}

function loadIntroTextOne() {
  let xOffset = 75;
  let yOffset = 100;

  let text = new createjs.Text("let's go on an ", "50px quicksandregular", "white");
  text.alpha = 0;
  text.x = (stage.canvas.width / 2) - text.getMeasuredWidth() - xOffset;
  text.y = (stage.canvas.height / 2) - yOffset;
  stage.addChild(text);

  let textAdventure = new createjs.Text("adventure ", "50px quicksandregular", "#D5A217");
  textAdventure.alpha = 0;
  textAdventure.x = (stage.canvas.width / 2) - xOffset;
  textAdventure.y = (stage.canvas.height / 2) - yOffset;
  stage.addChild(textAdventure);

  let textTogether = new createjs.Text("together", "50px quicksandregular", "white");
  textTogether.alpha = 0;
  textTogether.x = (stage.canvas.width / 2) + textAdventure.getMeasuredWidth() - xOffset;
  textTogether.y = (stage.canvas.height / 2) - yOffset;
  stage.addChild(textTogether);
  console.log(textAdventure.getMeasuredWidth());
  console.log(textTogether.getMeasuredWidth());

  createjs.Tween.get(text, { loop: false })
  .to({ alpha: 1 }, 4000, createjs.Ease.getPowIn(2))
  .to({ alpha: 0 }, 4000, createjs.Ease.getPowIn(2));

  createjs.Tween.get(textAdventure, { loop: false })
  .to({ alpha: 1 }, 4000, createjs.Ease.getPowIn(2))
  .to({ alpha: 0 }, 4000, createjs.Ease.getPowIn(2));

  createjs.Tween.get(textTogether, { loop: false })
  .to({ alpha: 1 }, 4000, createjs.Ease.getPowIn(2))
  .to({ alpha: 0 }, 4000, createjs.Ease.getPowIn(2))
  .call(loadIntroTextTwo);

  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);
}

function loadIntroTextTwo() {
  let xOffset = 125;
  let yOffset = 100;

  let text = new createjs.Text("let's go somewhere ", "50px quicksandregular", "white");
  text.alpha = 0;
  text.x = (stage.canvas.width / 2) - text.getMeasuredWidth() + xOffset;
  text.y = (stage.canvas.height / 2) - yOffset;
  stage.addChild(text);

  let textFarAway = new createjs.Text("far away", "50px quicksandregular", "#D5A217");
  textFarAway.alpha = 0;
  textFarAway.x = (stage.canvas.width / 2) + xOffset;
  textFarAway.y = (stage.canvas.height / 2) - yOffset;
  stage.addChild(textFarAway);

  createjs.Tween.get(text, { loop: false })
  .to({ alpha: 1 }, 4000, createjs.Ease.getPowIn(2))
  .to({ alpha: 0 }, 4000, createjs.Ease.getPowIn(2));

  createjs.Tween.get(textFarAway, { loop: false })
  .to({ alpha: 1 }, 4000, createjs.Ease.getPowIn(2))
  .to({ alpha: 0 }, 4000, createjs.Ease.getPowIn(2))
  .call(loadOptions);

  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);
}

function loadOptions() {
  let text = new createjs.Text("where shall we go?", "50px quicksandregular", "white");
  text.alpha = 0;
  text.x = (stage.canvas.width / 2) - (text.getMeasuredWidth() / 2);
  text.y = 50;
  stage.addChild(text);

  createjs.Tween.get(text, { loop: false })
  .to({ alpha: 1 }, 4000, createjs.Ease.getPowIn(2))
  .call(loadAnimation);
}


function loadAnimation() {
  forestRoot = new lib.ForestAnimation();
  forestRoot.x = 100;
  forestRoot.y = 200;
  stage.addChild(forestRoot);

  console.log(forestRoot);

  let text = new createjs.Text("the forest", "30px quicksandregular", "white");
  text.alpha = 0;
  text.x = forestRoot.x + text.getMeasuredWidth() + 55;
  text.y = forestRoot.y + 360;
  stage.addChild(text);

  createjs.Tween.get(text, { loop: false })
  .to({ alpha: 1 }, 3000, createjs.Ease.getPowIn(2))

  createjs.Ticker.setFPS(24);
  createjs.Ticker.addEventListener("tick", stage);
}