var canvas, stage;
window.addEventListener('resize', resize);

function init() {
  canvas = document.getElementById("canvas");
  stage = new createjs.Stage(canvas);
  stage.enableMouseOver(20);  
  
  resize();
  start();
}

function resize() {
  stage.canvas.width = window.innerWidth;
  stage.canvas.height = window.innerHeight;

  stage.update();
}

function getFontSizePX() {

  if (stage.canvas.width >= 1100) {
    return "50px";
  } else if (stage.canvas.width >= 750) {
    return "40px";
  } else {
    return "30px";
  }
}

function start() {
  loadIntroTextOne();
}

function loadIntroTextOne() {

  let yOffset = 100;
  let fontSizePX = getFontSizePX();

  let text = new createjs.Text("let's go on an ", fontSizePX + " quicksandregular", "white");
  text.alpha = 0;
  text.y = (stage.canvas.height / 2) - yOffset;
  stage.addChild(text);

  let textAdventure = new createjs.Text("adventure ", fontSizePX + " quicksandregular", "#D5A217");
  textAdventure.alpha = 0;
  textAdventure.y = (stage.canvas.height / 2) - yOffset;
  stage.addChild(textAdventure);

  let textTogether = new createjs.Text("together", fontSizePX + " quicksandregular", "white");
  textTogether.alpha = 0;
  textTogether.y = (stage.canvas.height / 2) - yOffset;
  stage.addChild(textTogether);

  text.x = (stage.canvas.width / 2) - ((text.getMeasuredWidth() + textAdventure.getMeasuredWidth() + textTogether.getMeasuredWidth()) / 2);
  textAdventure.x = text.x + text.getMeasuredWidth();
  textTogether.x = textAdventure.x + textAdventure.getMeasuredWidth();

  createjs.Tween.get(text, { loop: false })
  .to({ alpha: 1 }, 4000, createjs.Ease.getPowIn(1))
  .to({ alpha: 0 }, 4000, createjs.Ease.getPowIn(1));

  createjs.Tween.get(textAdventure, { loop: false })
  .to({ alpha: 1 }, 4000, createjs.Ease.getPowIn(1))
  .to({ alpha: 0 }, 4000, createjs.Ease.getPowIn(1));

  createjs.Tween.get(textTogether, { loop: false })
  .to({ alpha: 1 }, 4000, createjs.Ease.getPowIn(1))
  .to({ alpha: 0 }, 4000, createjs.Ease.getPowIn(1))
  .call(loadIntroTextTwo);

  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);
}

function loadIntroTextTwo() {

  let yOffset = 100;
  let fontSizePX = getFontSizePX();

  let text = new createjs.Text("let's go somewhere ", fontSizePX + " quicksandregular", "white");
  text.alpha = 0;
  text.y = (stage.canvas.height / 2) - yOffset;
  stage.addChild(text);

  let textFarAway = new createjs.Text("far away", fontSizePX + " quicksandregular", "#D5A217");
  textFarAway.alpha = 0;
  textFarAway.y = (stage.canvas.height / 2) - yOffset;
  stage.addChild(textFarAway);

  text.x = (stage.canvas.width / 2) - ((text.getMeasuredWidth() + textFarAway.getMeasuredWidth()) / 2);
  textFarAway.x = text.x + text.getMeasuredWidth();

  createjs.Tween.get(text, { loop: false })
  .to({ alpha: 1 }, 4000, createjs.Ease.getPowIn(1))
  .to({ alpha: 0 }, 4000, createjs.Ease.getPowIn(1));

  createjs.Tween.get(textFarAway, { loop: false })
  .to({ alpha: 1 }, 4000, createjs.Ease.getPowIn(1))
  .to({ alpha: 0 }, 4000, createjs.Ease.getPowIn(1))
  .call(loadOptions);

  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);

}

function loadOptions() {

  let fontSizePX = getFontSizePX();
  let text = new createjs.Text("where shall we go?", fontSizePX + " quicksandregular", "white");
  text.alpha = 0;
  text.x = (stage.canvas.width / 2) - (text.getMeasuredWidth() / 2);
  text.y = (stage.canvas.height / 2) - 350;
  stage.addChild(text);

  createjs.Tween.get(text, { loop: false })
  .to({ alpha: 1 }, 4000, createjs.Ease.getPowIn(2))
  .call(loadForest);

  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);
}


function loadForest() {

  let forestContainer = new createjs.Container();
  let forestOffsetX = -275;
  let forestOffsetY = -200;

  let forestRoot = new lib.ForestAnimation();
  forestRoot.x = ((stage.canvas.width / 3) / 2) + forestOffsetX;
  forestRoot.y = (stage.canvas.height / 2) + forestOffsetY;

  let text = new createjs.Text("the forest", "30px quicksandregular", "white");
  text.alpha = 0;
  text.x = forestRoot.x - forestOffsetX - (text.getMeasuredWidth() / 2);
  text.y = forestRoot.y + 360;
  
  createjs.Tween.get(text, { loop: false })
  .to({ alpha: 1 }, 3000, createjs.Ease.getPowIn(2));

  forestContainer.addChild(forestRoot, text);
  stage.addChild(forestContainer);

  createjs.Ticker.setFPS(24);
  createjs.Ticker.addEventListener("tick", stage);
}

function loadMountains() {
  
  let mountainContainer = new createjs.Container();
  let mountainOffsetX = -275;
  let mountainOffsetY = -200;

  let mountainsRoot = new lib.MtnsAnimation();
  mountainsRoot.x = (stage.canvas.width / 2) + mountainOffsetX;
  mountainsRoot.y = (stage.canvas.height / 2) + mountainOffsetY;

  let text = new createjs.Text("the mountains", "30px quicksandregular", "white");
  text.alpha = 0;
  text.x = mountainsRoot.x - mountainOffsetX - (text.getMeasuredWidth() / 2);
  text.y = mountainsRoot.y + 360;

  createjs.Tween.get(text, { loop: false })
  .to({ alpha: 1 }, 3000, createjs.Ease.getPowIn(2));

  mountainContainer.addChild(mountainsRoot, text);
  stage.addChild(mountainContainer);

  createjs.Ticker.setFPS(24);
  createjs.Ticker.addEventListener("tick", stage);
}