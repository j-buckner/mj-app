var canvas, stage;
window.addEventListener('resize', resize);

function init() {
  canvas = document.getElementById("canvas");
  stage = new createjs.Stage(canvas);
  
  resize();
  start();
}

function resize() {
    stage.canvas.width = window.innerWidth;
    stage.canvas.height = window.innerHeight; 
}

function start() {
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