(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {    
  for(var i = 0; i < cacheList.length; i++) {   
    if(cacheList[i].cacheCanvas)    
      cacheList[i].updateCache();   
  }   
};    

lib.addElementsToCache = function (textInst, cacheList) {   
  var cur = textInst;   
  while(cur != exportRoot) {    
    if(cacheList.indexOf(cur) != -1)    
      break;    
    cur = cur.parent;   
  }   
  if(cur != exportRoot) {   
    var cur2 = textInst;    
    var index = cacheList.indexOf(cur);   
    while(cur2 != cur) {    
      cacheList.splice(index, 0, cur2);   
      cur2 = cur2.parent;   
      index++;    
    }   
  }   
  else {    
    cur = textInst;   
    while(cur != exportRoot) {    
      cacheList.push(cur);    
      cur = cur.parent;   
    }   
  }   
};    

lib.gfontAvailable = function(family, totalGoogleCount) {   
  lib.properties.webfonts[family] = true;   
  var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];   
  for(var f = 0; f < txtInst.length; ++f)   
    lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);    

  loadedGoogleCount++;    
  if(loadedGoogleCount == totalGoogleCount) {   
    lib.updateListCache(gFontsUpdateCacheList);   
  }   
};    

lib.tfontAvailable = function(family, totalTypekitCount) {    
  lib.properties.webfonts[family] = true;   
  var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];   
  for(var f = 0; f < txtInst.length; ++f)   
    lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);    

  loadedTypekitCount++;   
  if(loadedTypekitCount == totalTypekitCount) {   
    lib.updateListCache(tFontsUpdateCacheList);   
  }   
};
// symbols:
// helper functions:

function mc_symbol_clone() {
  var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
  clone.gotoAndStop(this.currentFrame);
  clone.paused = this.paused;
  clone.framerate = this.framerate;
  return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
  var prototype = cjs.extend(symbol, cjs.MovieClip);
  prototype.clone = mc_symbol_clone;
  prototype.nominalBounds = nominalBounds;
  prototype.frameBounds = frameBounds;
  return prototype;
  }


(lib.Tween53 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgfV4IAOAAIgBhEIASAAQEKAAD0hlQDzhkC9i9QC8i9BmjzQBkj0AAkKQAAkKhkjzQhmjzi8i9Qi9i9jzhlQj0hlkKAAQkKAAjzBlQjzBli+C9Qi8C9hlDzQhlDzABEKQgBEKBlD0QBlDzC8C9QC4C3DqBkIAABJIgUgIQj7hrjCjBQjCjChqj7QhukEAAkdQAAkcBukEQBqj7DCjCQDCjCD7hqQEEhuEcAAQEdAAEEBuQD7BqDCDCQDCDCBqD7QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDBj7BrQkEBukdAAIgfAAg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-140,280,280);


(lib.Tween52 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgfV4IAOAAIgBhEIASAAQEKAAD0hlQDzhkC9i9QC8i9BmjzQBkj0AAkKQAAkKhkjzQhmjzi8i9Qi9i9jzhlQj0hlkKAAQkKAAjzBlQjzBli+C9Qi8C9hlDzQhlDzABEKQgBEKBlD0QBlDzC8C9IABABIgFAAQgFADgIAIIgYAeIgFAHIgBgBQjCjChqj7QhukEAAkdQAAkcBukEQBqj7DCjCQDCjCD7hqQEEhuEcAAQEdAAEEBuQD7BqDCDCQDCDCBqD7QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDBj7BrQkEBukdAAIgfAAg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-140,280,280);


(lib.Tween51 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgfV4IAOAAIgBhEIASAAQEKAAD0hlQDzhkC9i9QC8i9BmjzQBkj0AAkKQAAkKhkjzQhmjzi8i9Qi9i9jzhlQj0hlkKAAQkKAAjzBlQjzBli+C9Qi8C9hlDzQhlDzABEKQgBEABdDsIgMABQgHACgKAIIgYAUIgEAEQhnj8AAkTQAAkcBukEQBqj7DCjCQDCjCD7hqQEEhuEcAAQEdAAEEBuQD7BqDCDCQDCDCBqD7QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDBj7BrQkEBukdAAIgfAAgAvWOFIAAgBIABABIAAAAIgBAAgAxoM8IACAAIAAADIgCgDgAyrLYIADAAIAAAGIgDgGg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-140,280,280);


(lib.Tween50 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgfV4IAOAAIgBhEIASAAQEKAAD0hlQDzhkC9i9QC8i9BmjzQBkj0AAkKQAAkKhkjzQhmjzi8i9Qi9i9jzhlQj0hlkKAAQkKAAjzBlQjzBli+C9Qi8C9hlDzQhlDzABEKIAAACIgZAAQgYAAgTAFIAAgHQAAkcBukEQBqj7DCjCQDCjCD7hqQEEhuEcAAQEdAAEEBuQD7BqDCDCQDCDCBqD7QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDBj7BrQkEBukdAAIgfAAgAvWOFIAAgBIABABIAAAAIgBAAgAxoM8IACAAIAAADIgCgDgAyrLYIADAAIAAAGIgDgGg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-140,280,280);


(lib.Tween49 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AhhV4IAOAAIgBhEIATAAQEKAADzhlQDzhkC9i9QC9i9BljzQBkj0AAkKQAAkKhkjzQhljzi9i9Qi9i9jzhlQjzhlkKAAQkLAAjzBlQjzBli9C9QihChhhDJQgagKghgDIgJgBQBnjdCvivQDCjCD7hqQEEhuEdAAQEcAAEEBuQD7BqDCDCQDCDCBqD7QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDBj7BrQkEBukcAAIggAAgAwYOFIAAgBIABABIAAAAIgBAAgAyqM8IACAAIAAADIgCgDgAztLYIAEAAIAAAGIgEgGg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.4,-140,266.9,280);


(lib.Tween48 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AiFV4IAOAAIgBhEIATAAQEKAADzhlQDzhkC9i9QC9i9BljzQBkj0AAkKQAAkKhkjzQhljzi9i9Qi9i9jzhlQjzhlkKAAQkLAAjzBlQjzBli9C9IgNAMIgFgGQgSgZgGgGIgQgNIAKgKQDCjCD7hqQEEhuEdAAQEcAAEEBuQD7BqDCDCQDCDCBqD7QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDBj7BrQkEBukcAAIggAAgAw8OFIAAgBIABABIAAAAIgBAAgAzOM8IACAAIAAADIgCgDgA0RLYIAEAAIAAAGIgEgGg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.8,-140,259.6,280);


(lib.Tween47 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AiFV4IAOAAIgBhEIATAAQEKAADzhlQDzhkC9i9QC9i9BljzQBkj0AAkKQAAkKhkjzQhljzi9i9Qi9i9jzhlQjzhlkKAAQkLAAjzBlIgOAGQgXgagSgdIAUgJQEEhuEdAAQEcAAEEBuQD7BqDCDCQDCDCBqD7QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDBj7BrQkEBukcAAIggAAgAw8OFIAAgBIABABIAAAAIgBAAgAzOM8IACAAIAAADIgCgDgA0RLYIAEAAIAAAGIgEgGg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.8,-140,259.6,280);


(lib.Tween46 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AiFV4IAOAAIgBhEIATAAQEKAADzhlQDzhkC9i9QC9i9BljzQBkj0AAkKQAAkKhkjzQhljzi9i9Qi9i9jzhlQjzhlkKAAIgLAAIgBhDIAMAAQEcAAEEBuQD7BqDCDCQDCDCBqD7QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDBj7BrQkEBukcAAIggAAgAw8OFIAAgBIABABIAAAAIgBAAgAzOM8IACAAIAAADIgCgDgA0RLYIAEAAIAAAGIgEgGg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.8,-140,259.6,280);


(lib.Tween45 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AiFUvIAOgBIgBhDIATAAQEKAADzhlQDzhlC9i8QC9i9BljzQBkj0AAkJQAAkLhkjzQhlj0i9i9QiiihjKhiIAHgKQARgYAWgSQDLBlCjCjQDCDBBqD8QBuEEAAEdQAAEchuEEQhqD7jCDCQjCDBj7BrQkEBukcAAIggAAgAw8M8IAAgBIABABIAAAAIgBAAgAzOLzIACAAIAAACIgCgCgA0RKPIAEAAIAAAGIgEgGg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.8,-132.6,259.6,265.4);


(lib.Tween44 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AiFPjIAOgBIgBhDIATAAQEKAADzhlQDzhlC9i8QC9i9BljzQBkjzAAkKQAAkLhkjzIgWgxIABAAQALABAHgCQAIgDAJgJIAYgSIAUAtQBuEEAAEdQAAEdhuEDQhqD7jCDCQjCDBj7BrQkEBukcAAIggAAgAw8HwIAAgBIABABIAAAAIgBAAgAzOGnIACAAIAAACIgCgCgA0RFDIAEAAIAAAGIgEgGg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.8,-99.4,259.6,199);


(lib.Tween43 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AiFPrIAOAAIgBhEIATAAQEKAADzhkQDzhlC9i9QC9i9BljzQBkjyAAkLQAAkLhkjzQgPgkgRgiIA+AAIAAgaIAcA9QBuEEAAEdQAAEdhuEDQhqD7jCDCQjCDCj7BqQkEBukcAAIggAAgAw8H4IAAgBIABABIAAAAIgBAAgAzOGwIACAAIAAACIgCgCgA0RFMIAEAAIAAAGIgEgGg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.8,-100.3,259.6,200.6);


(lib.Tween42 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AiFK8IAOgBIgBhDIATAAQEKAADzhlQDzhlC9i8QC9i9BljyQBkjzAAkLIBEABQAAEdhuEDQhqD6jCDCQjCDBj7BrQkEBukcAAIggAAgAw8DJIAAgBIABABIAAAAIgBAAgAzOCAIACAAIAAACIgCgCgA0RAcIAEAAIAAAGIgEgGg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.8,-69.9,259.6,140);


(lib.Tween41 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AhSG6IAOAAIgBhEIATAAQEKAADzhkQDzhlC9i8QC7i7BljvQALADARACQAaADAOAEIgHARQhrD7jCDBQjBDCj7BqQkEBukdAAIggAAgAwJg4IAAgBIACABIgBAAIgBAAgAybiAIACAAIAAACIgCgCgAzejlIAEABIAAAFIgEgGg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.6,-44.2,249.4,88.4);


(lib.Tween40 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("ABJFQIANgBIAAhDIATAAQEKAAD0hlQDzhlC9i7IAUgVIAAAwQAIAAAGAKIAKAOQjAC+j5BqQkEBukdAAIggAAgAttiiIAAgBIABABIgBAAIAAAAgAv/jrIABAAIAAACIgBgCgAxClPIADAAIAAAGIgDgGg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.1,-33.5,218.3,67.2);


(lib.Tween39 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AkKBSIANAAIAAhEIATABQEFAADwhhIAABJQjwBckFAAIgggBg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-8.2,53.5,16.5);


(lib.Tween38 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween37 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol3 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#DFC75E").s().p("Ah9B+Qg0g0AAhKQAAhJA0g0QA0g0BJAAQBKAAA0A0QA0A0AABJQAABKg0A0Qg0A0hKAAQhJAAg0g0g");
  this.shape.setTransform(17.8,17.8);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,35.7,35.7), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#29506C").s().p("Ax8B+Qg3h/AAiIMAlnAAAQgBCNg7CGg");
  this.shape.setTransform(120.4,13.8);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,240.7,27.6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#69886B").s().p("ArjDUQlCjvhzl7QgGgSAMgQQAMgPATAAMAjoAACQATAAALAPQAMAPgGASQg7DBhwCdIgBAAQgOAKgHAIIgBAMIgFAHIgYAUIAAAJQghAngkAkIgkAjQgzAwg7ArQlID0mbAAQmbAAlIj0g");
  this.shape.setTransform(117.9,45.6);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,235.9,91.3), null);


// stage content:
(lib.ForestAnimation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; } this.initialize(mode,startPosition,loop,{});

  // stake1
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#1B1D21").ss(1.5,1).p("AgDADIAHgF");
  this.shape.setTransform(283.2,235.1);
  this.shape._off = true;

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(106).to({_off:false},0).wait(5));

  // stake2
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f().s("#1B1D21").ss(1.5,1).p("AALAFIgUgJ");
  this.shape_1.setTransform(263.1,235.4);
  this.shape_1._off = true;

  this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(108).to({_off:false},0).wait(3));

  // stake3
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f().s("#1B1D21").ss(1.5,1).p("AAPAIIgdgP");
  this.shape_2.setTransform(225.4,235);
  this.shape_2._off = true;

  this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(110).to({_off:false},0).wait(1));

  // tentflap2
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#D7BA97").s().p("AAPCCIhHkDIBxEDg");
  this.shape_3.setTransform(275.2,223.2,0.257,1,-13.4,0,0,-2.1,-0.1);
  this.shape_3._off = true;

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#D7BA97").s().p("AhLidICXE1IhpAGg");
  this.shape_4.setTransform(284.5,223.1);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#D7BA97").s().p("Agzi8IBnFTIhMAmg");
  this.shape_5.setTransform(275.3,223.1,2.56,1,8.2,0,0,-6.9,1.3);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},78).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_3}]},19).to({state:[{t:this.shape_3}]},8).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(78).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,regX:0,regY:0,scaleX:1,rotation:0,x:277.1,y:223.1},0).wait(28));

  // white flap
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#E5E0DA").s().p("AgCAuIgDilIALDvg");
  this.shape_6.setTransform(272.1,224.1);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#E5E0DA").s().p("AAJAGIgGgIIgPgxIAXA0IABAzg");
  this.shape_7.setTransform(271.1,224.1);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#E5E0DA").s().p("AgSAXIgCgEIAihRIAHB9g");
  this.shape_8.setTransform(270.3,223.9);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#E5E0DA").s().p("AgHBhIgBgDIANjdIAED/g");
  this.shape_9.setTransform(269.6,223.3,3.52,1);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#E5E0DA").s().p("AgMBZIgBgDIAQjNIALDvg");
  this.shape_10.setTransform(271.3,224.1);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},89).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},3).to({state:[{t:this.shape_10}]},13).to({state:[{t:this.shape_10}]},2).wait(1));

  // tentflap1
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#D7BA97").s().p("AgqCBIBKkBIALEBg");
  this.shape_11.setTransform(272.1,223.2,0.063,1,0,0,0,3.7,0);
  this.shape_11._off = true;

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#D7BA97").s().p("ABUiiIgzFEIh0ABg");
  this.shape_12.setTransform(269,223.3);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#D7BA97").s().p("ABNjDIgwGGIhpABg");
  this.shape_13.setTransform(271.9,223.2,2.156,1,0,0,0,2.7,-0.2);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11}]},78).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_11}]},3).to({state:[{t:this.shape_11}]},19).to({state:[{t:this.shape_11}]},8).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(78).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,regX:0.6,scaleX:1,x:269},0).wait(19).to({regX:0,x:268.4},0).wait(9));

  // tent-orange
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#C47C2A").s().p("AjUCIQgHgBgFgGQgEgGACgIIAxivIARg/QADgLALAAIFmAAQAIAAAEAGQAFAGgDAIIhBDuQgEAMgKAAg");
  this.shape_14.setTransform(248.9,222.6,0.044,0.044);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#C47C2A").s().p("AijBoQgFAAgEgEQgCgEAAgFIABgCIAkiFIABgCIAMgqIABgGQABgFADgCQADgCAEAAIETAAQAEAAADADIACACQAEAFgCAGIgzC2QgCAJgIAAg");
  this.shape_15.setTransform(248.9,222.6);

  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#C47C2A").s().p("AjUCIQgHgBgFgGQgEgGACgIIAxiwIARg+QADgLALAAIFmAAQAIAAAEAGQAFAGgDAIIhBDuQgEAMgKAAg");
  this.shape_16.setTransform(248.9,222.6,1.492,1.492);

  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#C47C2A").s().p("AjUCIQgHgBgFgGQgEgGACgIIBCjuQADgLALAAIFmAAQAIAAAEAGQAFAGgDAIIhBDuQgEAMgKAAg");
  this.shape_17.setTransform(248.9,222.6);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},78).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{scaleX:1.492,scaleY:1.492}}]},1).to({state:[{t:this.shape_16,p:{scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_17}]},16).to({state:[{t:this.shape_17}]},11).wait(1));

  // tentinside
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#884E14").s().p("AgqhyIBVDhIhVAEg");
  this.shape_18.setTransform(276.1,224.5);

  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#884E14").s().p("AgphbIBTCCIguA1g");
  this.shape_19.setTransform(274.5,226.8);

  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#884E14").s().p("AgohEIBQAjIgGBmg");
  this.shape_20.setTransform(272.8,229.2);

  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#884E14").s().p("Ag3gOIBOg+IAhCZg");
  this.shape_21.setTransform(272.8,228.4);

  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#884E14").s().p("AhKA4IBMidIBJDLg");
  this.shape_22.setTransform(273.2,225.9);

  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#884E14").s().p("AhcB/IBKj8IBvD8g");
  this.shape_23.setTransform(273.5,223.5);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},78).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},16).to({state:[{t:this.shape_23}]},11).wait(1));

  // evergreen2
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f().s("#194319").ss(3.6,1).p("AAAhPIAACf");
  this.shape_24.setTransform(274.1,227.2);

  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f().s("#194319").ss(3.6,1).p("AAAh8IAAD5");
  this.shape_25.setTransform(274.1,222.7);

  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f().s("#194319").ss(3.6,1).p("AAAiuIAAFd");
  this.shape_26.setTransform(274.1,217.7);

  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f().s("#194319").ss(3.6,1).p("AAGAcQgIgbgDgc");
  this.shape_27.setTransform(275,195.6);

  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f().s("#194319").ss(3.6,1).p("AADgJQgDAJgCAK");
  this.shape_28.setTransform(273,197);

  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f().s("#194319").ss(3.6,1).p("AAAjPIAAGf");
  this.shape_29.setTransform(274.1,214.4);

  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f().s("#194319").ss(3.6,1).p("AAMA4QgVgygCg9");
  this.shape_30.setTransform(275.4,195.6);

  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f().s("#194319").ss(3.6,1).p("AABgVQAAABgBAMQAAAOAAAP");
  this.shape_31.setTransform(274.3,187.9);

  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f().s("#194319").ss(3.6,1).p("AARg8QgIBFgZA0");
  this.shape_32.setTransform(272.4,197);

  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f().s("#194319").ss(3.6,1).p("AABgVQAAACgBAo");
  this.shape_33.setTransform(274.3,187.9);

  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f().s("#194319").ss(3.6,1).p("AAAAEIAAgH");
  this.shape_34.setTransform(274.2,190.5);

  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f().s("#194319").ss(3.6,1).p("AAAjcIAAG6");
  this.shape_35.setTransform(274.1,213.1);

  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f().s("#194319").ss(3.6,1).p("AAAgkIAABJ");
  this.shape_36.setTransform(274.1,187.2);

  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f().s("#194319").ss(3.6,1).p("AAmBeQgdgbgRgmQgbg1gChF");
  this.shape_37.setTransform(278,199.4);

  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f().s("#194319").ss(3.6,1).p("AAfhRQgIBLgdA1QgLATgNAQ");
  this.shape_38.setTransform(271,199.1);

  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f().s("#194319").ss(3.6,1).p("ABMB2QhUghgnhPQgbg2gBhF");
  this.shape_39.setTransform(281.9,201.8);

  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f().s("#194319").ss(3.6,1).p("ABRhwQgIBLgdA1QgrBOhRAT");
  this.shape_40.setTransform(266,202.2);

  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f().s("#194319").ss(3.6,1).p("AAAhZIAACz");
  this.shape_41.setTransform(274.1,181.9);

  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f().s("#194319").ss(3.6,1).p("AASAxQgMgPgHgUQgMgdgEgh");
  this.shape_42.setTransform(276.3,172);

  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f().s("#194319").ss(3.6,1).p("AgMApQASgjAHgu");
  this.shape_43.setTransform(272.6,171.2);

  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f().s("#194319").ss(3.6,1).p("AAAh2IAADt");
  this.shape_44.setTransform(274.1,179);

  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f().s("#194319").ss(3.6,1).p("AAoBFQgqgWgVg0QgMgegEgh");
  this.shape_45.setTransform(278.5,173.9);

  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f().s("#194319").ss(3.6,1).p("AgoBHQAegRAUgjQAWgkAJg1");
  this.shape_46.setTransform(269.9,174.1);

  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f().s("#194319").ss(3.6,1).p("ABGBNQhZgFgihVQgMgegEgh");
  this.shape_47.setTransform(281.5,174.7);

  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f().s("#194319").ss(3.6,1).p("AhEBPQBFgEAlhAQAXgkAIg1");
  this.shape_48.setTransform(267,174.9);

  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f().s("#194319").ss(3.6,1).p("ABHBfQhZgFgihVQgTguABg1");
  this.shape_49.setTransform(281.4,172.8);

  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f().s("#194319").ss(3.6,1).p("AhFBVQBFgEAmg/QAZgpAHg9");
  this.shape_50.setTransform(267.1,174.3);

  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f().s("#194319").ss(3.6,1).p("AAAANIABgZ");
  this.shape_51.setTransform(274.2,164.6);

  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f().s("#194319").ss(3.6,1).p("AAAh9IAAD6");
  this.shape_52.setTransform(274.1,178.4);

  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f().s("#194319").ss(3.6,1).p("AAAArIAAhV");
  this.shape_53.setTransform(274.1,161.5);

  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f().s("#194319").ss(3.6,1).p("AAABJIAAiR");
  this.shape_54.setTransform(274.1,158.5);

  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f().s("#194319").ss(3.6,1).p("AALAdIgVg4");
  this.shape_55.setTransform(275.2,147.3);

  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f().s("#194319").ss(3.6,1).p("AgHAXQAKgXAFgW");
  this.shape_56.setTransform(273.3,146.7);

  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f().s("#194319").ss(3.6,1).p("AAABrIAAjV");
  this.shape_57.setTransform(274.1,155.1);

  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f().s("#194319").ss(3.6,1).p("AAcAyQgTgPgPgcIgVg4");
  this.shape_58.setTransform(276.9,149.4);

  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f().s("#194319").ss(3.6,1).p("AgeA0QAXgPARggQAPgcAGgc");
  this.shape_59.setTransform(271,149.6);

  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f().s("#194319").ss(3.6,1).p("AA0A7QgygDgfg4IgWg5");
  this.shape_60.setTransform(279.3,150.3);

  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f().s("#194319").ss(3.6,1).p("AgzA7QAzgDAeg4QAQgdAGgc");
  this.shape_61.setTransform(268.9,150.3);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24}]},64).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_31},{t:this.shape_37}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_40},{t:this.shape_31},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_40},{t:this.shape_31},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_35},{t:this.shape_43},{t:this.shape_42},{t:this.shape_34},{t:this.shape_33},{t:this.shape_40},{t:this.shape_31},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_35},{t:this.shape_46},{t:this.shape_45},{t:this.shape_34},{t:this.shape_33},{t:this.shape_40},{t:this.shape_31},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_35},{t:this.shape_48},{t:this.shape_47},{t:this.shape_34},{t:this.shape_33},{t:this.shape_40},{t:this.shape_31},{t:this.shape_39}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_35},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_34},{t:this.shape_33},{t:this.shape_40},{t:this.shape_31},{t:this.shape_39}]},1).to({state:[{t:this.shape_54},{t:this.shape_52},{t:this.shape_35},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_34},{t:this.shape_33},{t:this.shape_40},{t:this.shape_31},{t:this.shape_39}]},1).to({state:[{t:this.shape_57},{t:this.shape_52},{t:this.shape_35},{t:this.shape_56},{t:this.shape_55},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_34},{t:this.shape_33},{t:this.shape_40},{t:this.shape_31},{t:this.shape_39}]},1).to({state:[{t:this.shape_57},{t:this.shape_52},{t:this.shape_35},{t:this.shape_59},{t:this.shape_58},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_34},{t:this.shape_33},{t:this.shape_40},{t:this.shape_31},{t:this.shape_39}]},1).to({state:[{t:this.shape_57},{t:this.shape_52},{t:this.shape_35},{t:this.shape_61},{t:this.shape_60},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_34},{t:this.shape_33},{t:this.shape_40},{t:this.shape_31},{t:this.shape_39}]},1).to({state:[{t:this.shape_57},{t:this.shape_52},{t:this.shape_35},{t:this.shape_61},{t:this.shape_60},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_34},{t:this.shape_33},{t:this.shape_40},{t:this.shape_31},{t:this.shape_39}]},12).to({state:[{t:this.shape_57},{t:this.shape_52},{t:this.shape_35},{t:this.shape_61},{t:this.shape_60},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_34},{t:this.shape_33},{t:this.shape_40},{t:this.shape_31},{t:this.shape_39}]},19).wait(1));

  // shorttrunk2
  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAgqIAABV");
  this.shape_62.setTransform(337.8,232.2);

  this.shape_63 = new cjs.Shape();
  this.shape_63.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAhKIAACV");
  this.shape_63.setTransform(337.8,229);

  this.shape_64 = new cjs.Shape();
  this.shape_64.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAhoIAADR");
  this.shape_64.setTransform(337.8,226);

  this.shape_65 = new cjs.Shape();
  this.shape_65.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAh3IAADv");
  this.shape_65.setTransform(337.8,224.6);

  this.shape_66 = new cjs.Shape();
  this.shape_66.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAiHIAAEP");
  this.shape_66.setTransform(337.8,223);

  this.shape_67 = new cjs.Shape();
  this.shape_67.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAiQIAAEh");
  this.shape_67.setTransform(337.8,222.1);

  this.shape_68 = new cjs.Shape();
  this.shape_68.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAimIAAFN");
  this.shape_68.setTransform(337.8,219.9);

  this.shape_69 = new cjs.Shape();
  this.shape_69.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAjCIAAGF");
  this.shape_69.setTransform(337.8,217.1);

  this.shape_70 = new cjs.Shape();
  this.shape_70.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAjTIAAGn");
  this.shape_70.setTransform(337.8,215.3);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_62}]},66).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},28).to({state:[{t:this.shape_70}]},8).wait(1));

  // short2
  this.shape_71 = new cjs.Shape();
  this.shape_71.graphics.f("#194319").s().p("AiRCRQg7g8AAhVQAAhUA7g8QA9g9BUAAQBVAAA9A9QA7A8AABUQAABVg7A8Qg9A9hVAAQhUAAg9g9g");
  this.shape_71.setTransform(337.6,194,0.192,0.192);
  this.shape_71._off = true;

  this.shape_72 = new cjs.Shape();
  this.shape_72.graphics.f("#194319").s().p("Ag0A1QgWgWAAgfQAAgdAWgXQAWgWAeAAQAfAAAWAWQAWAXAAAdQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
  this.shape_72.setTransform(337.6,194);

  this.shape_73 = new cjs.Shape();
  this.shape_73.graphics.f("#194319").s().p("AhNBOQggghAAgtQAAgsAgghQAgggAtAAQAuAAAgAgQAgAhAAAsQAAAtggAhQggAgguAAQgtAAggggg");
  this.shape_73.setTransform(337.6,194);

  this.shape_74 = new cjs.Shape();
  this.shape_74.graphics.f("#194319").s().p("AhmBnQgqgrAAg8QAAg7AqgrQArgqA7AAQA8AAArAqQAqArAAA7QAAA8gqArQgrAqg8AAQg7AAgrgqg");
  this.shape_74.setTransform(337.6,194);

  this.shape_75 = new cjs.Shape();
  this.shape_75.graphics.f("#194319").s().p("Ah/CAQg0g1AAhLQAAhKA0g1QA1g1BKAAQBLAAA1A1QA1A1AABKQAABLg1A1Qg1A1hLAAQhKAAg1g1g");
  this.shape_75.setTransform(337.6,194);

  this.shape_76 = new cjs.Shape();
  this.shape_76.graphics.f("#194319").s().p("AiYCZQg/g/AAhaQAAhZA/g+QBAg/BYAAQBZAABAA/QA/A+AABZQAABag/A/QhAA/hZgBQhYABhAg/g");
  this.shape_76.setTransform(337.6,194);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_71}]},78).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},21).to({state:[{t:this.shape_71}]},4).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(78).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1,scaleY:1},0).wait(26));

  // recttree
  this.shape_77 = new cjs.Shape();
  this.shape_77.graphics.f("#75A775").s().p("AhJGmQgRAAgLgLQgLgLAAgQIAAr/QAAgQALgLQALgLARAAICUAAQAQAAALALQALALAAAQIAAL/QAAAQgLALQgLALgQAAg");
  this.shape_77.setTransform(362.6,222.1,1,0.088,0,0,0,-0.1,42.5);
  this.shape_77._off = true;

  this.shape_78 = new cjs.Shape();
  this.shape_78.graphics.f("#75A775").s().p("AhJBdQgRAAgLgCQgLgDAAgDIAAiqQAAgDALgCQALgCARAAICTAAQAQAAALACQAMACAAADIAACqQAAADgMADQgLACgQAAg");
  this.shape_78.setTransform(362.7,212.8);

  this.shape_79 = new cjs.Shape();
  this.shape_79.graphics.f("#75A775").s().p("AhJCWQgRAAgLgEQgLgEAAgGIAAkQQAAgGALgEQALgDARAAICTAAQAQAAALADQAMAEAAAGIAAEQQAAAGgMAEQgLAEgQAAg");
  this.shape_79.setTransform(362.7,207.1);

  this.shape_80 = new cjs.Shape();
  this.shape_80.graphics.f("#75A775").s().p("AhJDPQgRAAgLgGQgLgFAAgIIAAl3QAAgIALgGQALgFARAAICTAAQAQAAALAFQAMAGAAAIIAAF3QAAAIgMAFQgLAGgQAAg");
  this.shape_80.setTransform(362.7,201.5);

  this.shape_81 = new cjs.Shape();
  this.shape_81.graphics.f("#75A775").s().p("AhJEHQgRAAgLgGQgLgIAAgJIAAnfQAAgJALgIQALgGARAAICTAAQAQAAALAGQAMAIAAAJIAAHfQAAAJgMAIQgLAGgQAAg");
  this.shape_81.setTransform(362.7,195.8);

  this.shape_82 = new cjs.Shape();
  this.shape_82.graphics.f("#75A775").s().p("AhJFAQgRAAgLgIQgLgJAAgMIAApFQAAgMALgJQALgIARAAICTAAQAQAAALAIQAMAJAAAMIAAJFQAAAMgMAJQgLAIgQAAg");
  this.shape_82.setTransform(362.7,190.2);

  this.shape_83 = new cjs.Shape();
  this.shape_83.graphics.f("#75A775").s().p("AhJF5QgRAAgLgKQgLgKAAgPIAAqsQAAgOALgKQALgKARAAICTAAQAQAAALAKQAMAKAAAOIAAKsQAAAPgMAKQgLAKgQAAg");
  this.shape_83.setTransform(362.7,184.5);

  this.shape_84 = new cjs.Shape();
  this.shape_84.graphics.f("#75A775").s().p("AhJGxQgRAAgLgLQgLgMAAgRIAAsSQAAgRALgLQALgLARAAICTAAQAQAAALALQAMALAAARIAAMSQAAARgMAMQgLALgQAAg");
  this.shape_84.setTransform(362.7,178.8);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_77}]},71).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_77}]},26).to({state:[{t:this.shape_77}]},4).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_77).wait(71).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false,regY:42.2,scaleY:1.16},0).wait(1).to({regX:0,regY:0,scaleY:1,x:362.7,y:179.9},0).wait(31));

  // recttrunk
  this.shape_85 = new cjs.Shape();
  this.shape_85.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAgUIAAAp");
  this.shape_85.setTransform(362.7,233.1);

  this.shape_86 = new cjs.Shape();
  this.shape_86.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAgnIAABP");
  this.shape_86.setTransform(362.7,231.2);

  this.shape_87 = new cjs.Shape();
  this.shape_87.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAg8IAAB5");
  this.shape_87.setTransform(362.7,229.1);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_85}]},69).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},35).to({state:[{t:this.shape_87}]},4).wait(1));

  // trit2
  this.shape_88 = new cjs.Shape();
  this.shape_88.graphics.f("#194319").s().p("AhkGRQgHAAgFgGQgFgFABgHIBlsCQACgNANAAQAOAAACANIBlMCQABAHgFAFQgFAGgHAAg");
  this.shape_88.setTransform(298.3,183.4,0.316,1);
  this.shape_88._off = true;

  this.shape_89 = new cjs.Shape();
  this.shape_89.graphics.f("#194319").s().p("Ag2GRQgEAAgDgFQgCgGAAgHIA4sBQABgOAHAAQAHAAABAOIA3MBQABAHgDAGQgDAFgDAAg");
  this.shape_89.setTransform(298.3,183.4);

  this.shape_90 = new cjs.Shape();
  this.shape_90.graphics.f("#194319").s().p("AhOGRQgFAAgEgFQgEgGABgHIBPsBQABgOAKAAQALAAABAOIBPMBQABAHgEAGQgEAFgFAAg");
  this.shape_90.setTransform(298.4,183.4);

  this.shape_91 = new cjs.Shape();
  this.shape_91.graphics.f("#194319").s().p("AhlGRQgHAAgFgFQgFgGABgHIBmsBQACgOAOAAQANAAACAOIBmMBQABAHgFAGQgFAFgHAAg");
  this.shape_91.setTransform(298.4,183.4);

  this.shape_92 = new cjs.Shape();
  this.shape_92.graphics.f("#194319").s().p("Ah8GRQgJAAgGgFQgGgGABgHIB9sBQADgOARAAQAQAAADAOIB9MBQABAHgFAGQgHAFgIAAg");
  this.shape_92.setTransform(298.4,183.4);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_88}]},67).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},34).to({state:[{t:this.shape_88}]},4).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_88).wait(67).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,scaleX:1},0).wait(39));

  // tritrunk2
  this.shape_93 = new cjs.Shape();
  this.shape_93.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAgjIAABH");
  this.shape_93.setTransform(298.4,232.9);

  this.shape_94 = new cjs.Shape();
  this.shape_94.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAg8IAAB5");
  this.shape_94.setTransform(298.4,230.5);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_93}]},68).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},40).to({state:[{t:this.shape_94}]},1).wait(1));

  // tallroundtrunk
  this.shape_95 = new cjs.Shape();
  this.shape_95.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAhCIAACF");
  this.shape_95.setTransform(317.4,229.4);

  this.shape_96 = new cjs.Shape();
  this.shape_96.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAhzIAADn");
  this.shape_96.setTransform(317.4,224.5);

  this.shape_97 = new cjs.Shape();
  this.shape_97.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAivIAAFf");
  this.shape_97.setTransform(317.4,218.5);

  this.shape_98 = new cjs.Shape();
  this.shape_98.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAjkIAAHJ");
  this.shape_98.setTransform(317.4,213.3);

  this.shape_99 = new cjs.Shape();
  this.shape_99.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAkoIAAJR");
  this.shape_99.setTransform(317.4,206.4);

  this.shape_100 = new cjs.Shape();
  this.shape_100.graphics.f().s("#1B1D21").ss(3.6,1).p("AgCAAIAFAA");
  this.shape_100.setTransform(317.6,162.8);

  this.shape_101 = new cjs.Shape();
  this.shape_101.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAmBIAAMD");
  this.shape_101.setTransform(317.4,197.5);

  this.shape_102 = new cjs.Shape();
  this.shape_102.graphics.f().s("#1B1D21").ss(3.6,1).p("AABAAQgBAAAAAA");
  this.shape_102.setTransform(317,154.1);

  this.shape_103 = new cjs.Shape();
  this.shape_103.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAnFIAAOL");
  this.shape_103.setTransform(317.4,190.7);

  this.shape_104 = new cjs.Shape();
  this.shape_104.graphics.f().s("#1B1D21").ss(3.6,1).p("AAoAAQgoAGgngI");
  this.shape_104.setTransform(313.2,154.1);

  this.shape_105 = new cjs.Shape();
  this.shape_105.graphics.f().s("#1B1D21").ss(3.6,1).p("AguAPIAbgEQAfgHAbgNQAEgCAEgC");
  this.shape_105.setTransform(322,161.4);

  this.shape_106 = new cjs.Shape();
  this.shape_106.graphics.f().s("#1B1D21").ss(3.6,1).p("ABkBEQgyAGgygOQhjgcAAhl");
  this.shape_106.setTransform(307.2,147.3);

  this.shape_107 = new cjs.Shape();
  this.shape_107.graphics.f().s("#1B1D21").ss(3.6,1).p("AhaBYIAagFQAggGAcgOQBXguAIho");
  this.shape_107.setTransform(326.5,154.1);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_95}]},64).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_100},{t:this.shape_102}]},1).to({state:[{t:this.shape_103},{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_103},{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_103},{t:this.shape_107},{t:this.shape_106}]},29).to({state:[{t:this.shape_103},{t:this.shape_107},{t:this.shape_106}]},9).wait(1));

  // tallround
  this.shape_108 = new cjs.Shape();
  this.shape_108.graphics.f("#69886B").s().p("Ai2C3QhMhMAAhrQAAhqBMhMQBMhLBqgBQBrABBMBLQBLBMAABqQAABrhLBMQhMBMhrAAQhqAAhMhMg");
  this.shape_108.setTransform(317.2,145.5,0.191,0.191);
  this.shape_108._off = true;

  this.shape_109 = new cjs.Shape();
  this.shape_109.graphics.f("#69886B").s().p("AhHBJQgegeAAgrQAAgpAegeQAegfApAAQArAAAeAfQAdAeAAApQAAArgdAeQgeAdgrAAQgpAAgegdg");
  this.shape_109.setTransform(317.2,145.5);

  this.shape_110 = new cjs.Shape();
  this.shape_110.graphics.f("#69886B").s().p("AhtBuQgtgtAAhBQAAg/AtguQAugtA/AAQBBAAAtAtQAtAuAAA/QAABBgtAtQgtAthBAAQg/AAgugtg");
  this.shape_110.setTransform(317.2,145.5);

  this.shape_111 = new cjs.Shape();
  this.shape_111.graphics.f("#69886B").s().p("AiSCTQg9g8AAhXQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A9AABVQAABXg9A8Qg9A9hWAAQhVAAg9g9g");
  this.shape_111.setTransform(317.2,145.5);

  this.shape_112 = new cjs.Shape();
  this.shape_112.graphics.f("#69886B").s().p("Ai3C4QhNhMAAhsQAAhqBNhOQBMhMBrABQBsgBBMBMQBNBOAABqQAABshNBMQhMBNhsAAQhrAAhMhNg");
  this.shape_112.setTransform(317.2,145.5);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_108}]},77).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_108}]},2).to({state:[{t:this.shape_108}]},22).to({state:[{t:this.shape_108}]},4).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_108).wait(77).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,scaleX:1.21,scaleY:1.21},0).wait(2).to({scaleX:1,scaleY:1},0).wait(27));

  // trit1trunk
  this.shape_113 = new cjs.Shape();
  this.shape_113.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAgoIAABR");
  this.shape_113.setTransform(223.9,230.2);

  this.shape_114 = new cjs.Shape();
  this.shape_114.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAg6IAAB1");
  this.shape_114.setTransform(223.9,228.4);

  this.shape_115 = new cjs.Shape();
  this.shape_115.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAhTIAACn");
  this.shape_115.setTransform(223.9,225.9);

  this.shape_116 = new cjs.Shape();
  this.shape_116.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAhyIAADl");
  this.shape_116.setTransform(223.9,222.8);

  this.shape_117 = new cjs.Shape();
  this.shape_117.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAiTIAAEn");
  this.shape_117.setTransform(223.9,219.5);

  this.shape_118 = new cjs.Shape();
  this.shape_118.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAitIAAFb");
  this.shape_118.setTransform(223.9,216.9);

  this.shape_119 = new cjs.Shape();
  this.shape_119.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAjHIAAGP");
  this.shape_119.setTransform(223.9,214.3);

  this.shape_120 = new cjs.Shape();
  this.shape_120.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAjsIAAHZ");
  this.shape_120.setTransform(223.9,210.6);

  this.shape_121 = new cjs.Shape();
  this.shape_121.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAkKIAAIV");
  this.shape_121.setTransform(223.9,207.6);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_113}]},57).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},32).to({state:[{t:this.shape_121}]},13).wait(1));

  // trit1
  this.shape_122 = new cjs.Shape();
  this.shape_122.graphics.f("#194319").s().p("AhkGRQgHAAgFgGQgFgFABgGIBlsDQACgNANAAQAOAAACANIBlMDQABAGgFAFQgFAGgHAAg");
  this.shape_122.setTransform(223.8,156.3,0.316,1);
  this.shape_122._off = true;

  this.shape_123 = new cjs.Shape();
  this.shape_123.graphics.f("#194319").s().p("Ag2GRQgEAAgDgFQgCgGAAgHIA3sBQACgOAGAAQAIAAABAOIA3MBQABAHgDAGQgDAFgEAAg");
  this.shape_123.setTransform(223.8,156.3);

  this.shape_124 = new cjs.Shape();
  this.shape_124.graphics.f("#194319").s().p("AhOGRQgFAAgEgFQgDgGAAgHIBPsBQACgOAJAAQALAAABAOIBPMBQABAHgEAGQgEAFgFAAg");
  this.shape_124.setTransform(223.8,156.3);

  this.shape_125 = new cjs.Shape();
  this.shape_125.graphics.f("#194319").s().p("AhlGRQgHAAgFgFQgFgGABgHIBmsBQACgOAOAAQANAAACAOIBmMBQABAHgFAGQgEAFgIAAg");
  this.shape_125.setTransform(223.9,156.3);

  this.shape_126 = new cjs.Shape();
  this.shape_126.graphics.f("#194319").s().p("Ah8GRQgJAAgGgFQgGgGABgHIB+sBQACgOARAAQAQAAADAOIB9MBQABAHgGAGQgGAFgIAAg");
  this.shape_126.setTransform(223.9,156.3);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_122}]},70).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_122}]},26).to({state:[{t:this.shape_122}]},8).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_122).wait(70).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,scaleX:1.47},0).wait(1).to({scaleX:1},0).wait(35));

  // everygreen1
  this.shape_127 = new cjs.Shape();
  this.shape_127.graphics.f().s("#194319").ss(3.6,1).p("AAAhTIAACn");
  this.shape_127.setTransform(212.7,227.7);

  this.shape_128 = new cjs.Shape();
  this.shape_128.graphics.f().s("#194319").ss(3.6,1).p("AAAh6IAAD1");
  this.shape_128.setTransform(212.7,223.8);

  this.shape_129 = new cjs.Shape();
  this.shape_129.graphics.f().s("#194319").ss(3.6,1).p("AAAizIAAFn");
  this.shape_129.setTransform(212.7,218.1);

  this.shape_130 = new cjs.Shape();
  this.shape_130.graphics.f().s("#194319").ss(3.6,1).p("AAVAzQgKgPgJgRQgPgggHgl");
  this.shape_130.setTransform(215.5,201.4);

  this.shape_131 = new cjs.Shape();
  this.shape_131.graphics.f().s("#194319").ss(3.6,1).p("AAag6QgKAwgTAkQgKASgMAP");
  this.shape_131.setTransform(209.4,202.1);

  this.shape_132 = new cjs.Shape();
  this.shape_132.graphics.f().s("#194319").ss(3.6,1).p("AAAjGIAAGN");
  this.shape_132.setTransform(212.7,216.2);

  this.shape_133 = new cjs.Shape();
  this.shape_133.graphics.f().s("#194319").ss(3.6,1).p("ABJBbQhUghgmhOQgQgggHgm");
  this.shape_133.setTransform(220.7,205.4);

  this.shape_134 = new cjs.Shape();
  this.shape_134.graphics.f().s("#194319").ss(3.6,1).p("ABOhaQgKAvgVAmQgrBMhRAU");
  this.shape_134.setTransform(204.2,205.4);

  this.shape_135 = new cjs.Shape();
  this.shape_135.graphics.f().s("#194319").ss(3.6,1).p("ABMB2QhUghgmhPQgbg2gChF");
  this.shape_135.setTransform(220.4,202.7);

  this.shape_136 = new cjs.Shape();
  this.shape_136.graphics.f().s("#194319").ss(3.6,1).p("AABgUQgCAKABAf");
  this.shape_136.setTransform(212.9,188.8);

  this.shape_137 = new cjs.Shape();
  this.shape_137.graphics.f().s("#194319").ss(3.6,1).p("ABRhwQgIBLgdA1QgrBOhRAT");
  this.shape_137.setTransform(204.6,203.1);

  this.shape_138 = new cjs.Shape();
  this.shape_138.graphics.f().s("#194319").ss(3.6,1).p("AABgUQAAACgBAn");
  this.shape_138.setTransform(212.9,188.8);

  this.shape_139 = new cjs.Shape();
  this.shape_139.graphics.f().s("#194319").ss(3.6,1).p("AAAAEIAAgI");
  this.shape_139.setTransform(212.8,191.4);

  this.shape_140 = new cjs.Shape();
  this.shape_140.graphics.f().s("#194319").ss(3.6,1).p("AAAjdIAAG6");
  this.shape_140.setTransform(212.7,214);

  this.shape_141 = new cjs.Shape();
  this.shape_141.graphics.f().s("#194319").ss(3.6,1).p("AAAgoIAABR");
  this.shape_141.setTransform(212.7,187.7);

  this.shape_142 = new cjs.Shape();
  this.shape_142.graphics.f().s("#194319").ss(3.6,1).p("AAAhVIAACs");
  this.shape_142.setTransform(212.7,183.2);

  this.shape_143 = new cjs.Shape();
  this.shape_143.graphics.f().s("#194319").ss(3.6,1).p("AAbAzQgagWgOgkQgIgVgFgW");
  this.shape_143.setTransform(216.1,175.1);

  this.shape_144 = new cjs.Shape();
  this.shape_144.graphics.f().s("#194319").ss(3.6,1).p("AgZA0QAOgOALgUQASgdAIgo");
  this.shape_144.setTransform(209.5,175.2);

  this.shape_145 = new cjs.Shape();
  this.shape_145.graphics.f().s("#194319").ss(3.6,1).p("AAAhsIAADZ");
  this.shape_145.setTransform(212.7,180.9);

  this.shape_146 = new cjs.Shape();
  this.shape_146.graphics.f().s("#194319").ss(3.6,1).p("ABHBVQhZgFgihUQgQgmgCgq");
  this.shape_146.setTransform(220,174.8);

  this.shape_147 = new cjs.Shape();
  this.shape_147.graphics.f().s("#194319").ss(3.6,1).p("AhFBVQBFgDAmhAQAZgpAHg9");
  this.shape_147.setTransform(205.7,175.2);

  this.shape_148 = new cjs.Shape();
  this.shape_148.graphics.f().s("#194319").ss(3.6,1).p("AAAACQAAgCAAgB");
  this.shape_148.setTransform(212.7,166.5);

  this.shape_149 = new cjs.Shape();
  this.shape_149.graphics.f().s("#194319").ss(3.6,1).p("AAAh9IAAD7");
  this.shape_149.setTransform(212.7,179.3);

  this.shape_150 = new cjs.Shape();
  this.shape_150.graphics.f().s("#194319").ss(3.6,1).p("AAAACIAAgD");
  this.shape_150.setTransform(212.7,166.5);

  this.shape_151 = new cjs.Shape();
  this.shape_151.graphics.f().s("#194319").ss(3.6,1).p("ABHBfQhZgEgihWQgUguACg1");
  this.shape_151.setTransform(220,173.7);

  this.shape_152 = new cjs.Shape();
  this.shape_152.graphics.f().s("#194319").ss(3.6,1).p("AAAANQABgPAAgK");
  this.shape_152.setTransform(212.8,165.5);

  this.shape_153 = new cjs.Shape();
  this.shape_153.graphics.f().s("#194319").ss(3.6,1).p("AAAAtIAAhZ");
  this.shape_153.setTransform(212.7,162.2);

  this.shape_154 = new cjs.Shape();
  this.shape_154.graphics.f().s("#194319").ss(3.6,1).p("AAABOIAAic");
  this.shape_154.setTransform(212.7,158.9);

  this.shape_155 = new cjs.Shape();
  this.shape_155.graphics.f().s("#194319").ss(3.6,1).p("AATApQgJgLgHgOIgVg4");
  this.shape_155.setTransform(214.6,149.4);

  this.shape_156 = new cjs.Shape();
  this.shape_156.graphics.f().s("#194319").ss(3.6,1).p("AgOAjQAEgGAEgHQAPgcAGgc");
  this.shape_156.setTransform(211.3,148.8);

  this.shape_157 = new cjs.Shape();
  this.shape_157.graphics.f().s("#194319").ss(3.6,1).p("AAABrIAAjV");
  this.shape_157.setTransform(212.7,156);

  this.shape_158 = new cjs.Shape();
  this.shape_158.graphics.f().s("#194319").ss(3.6,1).p("AA0A6QgzgDgfg4IgVg5");
  this.shape_158.setTransform(217.9,151.2);

  this.shape_159 = new cjs.Shape();
  this.shape_159.graphics.f().s("#194319").ss(3.6,1).p("AgzA6QAzgDAeg4QAQgdAGgc");
  this.shape_159.setTransform(207.5,151.2);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_127}]},57).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_132},{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_142},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_145},{t:this.shape_140},{t:this.shape_144},{t:this.shape_143},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_140},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_153},{t:this.shape_149},{t:this.shape_140},{t:this.shape_152},{t:this.shape_147},{t:this.shape_151},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_154},{t:this.shape_149},{t:this.shape_140},{t:this.shape_152},{t:this.shape_147},{t:this.shape_151},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_157},{t:this.shape_149},{t:this.shape_140},{t:this.shape_156},{t:this.shape_155},{t:this.shape_152},{t:this.shape_147},{t:this.shape_151},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_157},{t:this.shape_149},{t:this.shape_140},{t:this.shape_159},{t:this.shape_158},{t:this.shape_152},{t:this.shape_147},{t:this.shape_151},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_157},{t:this.shape_149},{t:this.shape_140},{t:this.shape_159},{t:this.shape_158},{t:this.shape_152},{t:this.shape_147},{t:this.shape_151},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},37).to({state:[{t:this.shape_157},{t:this.shape_149},{t:this.shape_140},{t:this.shape_159},{t:this.shape_158},{t:this.shape_152},{t:this.shape_147},{t:this.shape_151},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},4).wait(1));

  // rt1trunk
  this.shape_160 = new cjs.Shape();
  this.shape_160.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAgMIAAAZ");
  this.shape_160.setTransform(199.6,234.8);

  this.shape_161 = new cjs.Shape();
  this.shape_161.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAgcIAAA5");
  this.shape_161.setTransform(199.6,233.2);

  this.shape_162 = new cjs.Shape();
  this.shape_162.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAg1IAABr");
  this.shape_162.setTransform(199.6,230.7);

  this.shape_163 = new cjs.Shape();
  this.shape_163.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAhHIAACP");
  this.shape_163.setTransform(199.6,228.9);

  this.shape_164 = new cjs.Shape();
  this.shape_164.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAhiIAADF");
  this.shape_164.setTransform(199.6,226.2);

  this.shape_165 = new cjs.Shape();
  this.shape_165.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAh+IAAD9");
  this.shape_165.setTransform(199.6,223.4);

  this.shape_166 = new cjs.Shape();
  this.shape_166.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAiTIAAEn");
  this.shape_166.setTransform(199.6,221.3);

  this.shape_167 = new cjs.Shape();
  this.shape_167.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAinIAAFP");
  this.shape_167.setTransform(199.6,219.3);

  this.shape_168 = new cjs.Shape();
  this.shape_168.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAjTIAAGn");
  this.shape_168.setTransform(199.6,214.9);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_160}]},51).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_168}]},47).to({state:[{t:this.shape_168}]},4).wait(1));

  // roundt1
  this.shape_169 = new cjs.Shape();
  this.shape_169.graphics.f("#69886B").s().p("AiRCRQg7g8AAhVQAAhUA7g8QA9g9BUAAQBVAAA9A9QA7A8AABUQAABVg7A8Qg9A9hVAAQhUAAg9g9g");
  this.shape_169.setTransform(199.4,193.5,0.221,0.221);
  this.shape_169._off = true;

  this.shape_170 = new cjs.Shape();
  this.shape_170.graphics.f("#69886B").s().p("Ag6A7QgZgYAAgjQAAgiAZgYQAYgZAiAAQAjAAAYAZQAZAYAAAiQAAAjgZAYQgYAZgjAAQgiAAgYgZg");
  this.shape_170.setTransform(199.4,193.5);

  this.shape_171 = new cjs.Shape();
  this.shape_171.graphics.f("#69886B").s().p("AhVBXQgkglAAgyQAAgyAkgjQAkgkAxAAQAzAAAjAkQAkAjAAAyQAAAygkAlQgjAjgzAAQgxAAgkgjg");
  this.shape_171.setTransform(199.4,193.5);

  this.shape_172 = new cjs.Shape();
  this.shape_172.graphics.f("#69886B").s().p("AhxByQgugwAAhCQAAhBAugwQAwguBBAAQBDAAAuAuQAvAwAABBQAABCgvAwQguAuhDAAQhBAAgwgug");
  this.shape_172.setTransform(199.5,193.6);

  this.shape_173 = new cjs.Shape();
  this.shape_173.graphics.f("#69886B").s().p("AiMCNQg5g7AAhSQAAhRA5g6QA7g6BRAAQBSAAA7A6QA5A6AABRQAABSg5A7Qg7A5hSAAQhRAAg7g5g");
  this.shape_173.setTransform(199.4,193.5);

  this.shape_174 = new cjs.Shape();
  this.shape_174.graphics.f("#69886B").s().p("AinCoQhEhGAAhiQAAhhBEhFQBHhFBgAAQBiAABGBFQBEBFAABhQAABihEBGQhGBEhiAAQhgAAhHhEg");
  this.shape_174.setTransform(199.4,193.5);

  this.shape_175 = new cjs.Shape();
  this.shape_175.graphics.f("#69886B").s().p("AjCDDQhPhSAAhxQAAhxBPhRQBShPBwAAQByAABRBPQBQBRAABxQAABxhQBSQhRBQhyAAQhwAAhShQg");
  this.shape_175.setTransform(199.4,193.6);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_169}]},59).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_169}]},43).to({state:[{t:this.shape_169}]},1).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_169).wait(59).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false,scaleX:1,scaleY:1},0).wait(45));

  // ground
  this.instance = new lib.Symbol1();
  this.instance.parent = this;
  this.instance.setTransform(310.4,272,0.999,0.999,-25,0,0,116.2,48.6);
  this.instance._off = true;

  this.shape_176 = new cjs.Shape();
  this.shape_176.graphics.f("#69886B").s().p("ArjDUQlCjvhzl7QgGgSAMgQQAMgPATAAMAjoAACQATAAALAPQAMAPgGASQg7DBhwCdIgBAAQgOAKgHAIIgBAMIgFAHIgYAUIAAAJQghAngkAkIgkAjQgzAwg7ArQlID0mbAAQmbAAlIj0g");
  this.shape_176.setTransform(276.4,281);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},17).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_176}]},72).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).wait(1).to({regX:117.9,regY:45.6,scaleX:1,scaleY:1,rotation:-14.9,x:297.5,y:268.9},0).wait(1).to({rotation:-4.8,x:284.2,y:269.3},0).wait(1).to({rotation:5.4,x:271,y:269.9},0).wait(1).to({rotation:15.5,x:257.6,y:270.5},0).wait(1).to({rotation:25.7,x:244.2,y:271.1},0).wait(1).to({rotation:19.6,x:252.1,y:272.5},0).wait(1).to({rotation:13.6,x:260,y:273.9},0).wait(1).to({rotation:7.6,x:267.8,y:275.3},0).wait(1).to({rotation:1.6,x:275.6,y:276.8},0).wait(1).to({rotation:-4.4,x:283.4,y:278.2},0).wait(1).to({rotation:-2.7,x:281.5,y:277.9},0).wait(1).to({rotation:-1,x:279.7,y:277.7},0).wait(1).to({rotation:0.8,x:277.7,y:277.4},0).wait(1).to({rotation:2.5,x:275.8,y:277.1},0).wait(1).to({rotation:4.2,x:273.9,y:276.9},0).wait(5).to({_off:true},1).wait(73));

  // dark blue sky
  this.instance_1 = new lib.Symbol2();
  this.instance_1.parent = this;
  this.instance_1.setTransform(276.7,248.9,0.949,0.964,0,0,0,119.8,13.8);
  this.instance_1._off = true;

  this.shape_177 = new cjs.Shape();
  this.shape_177.graphics.f("#29506C").s().p("Ax8B+Qg3h/AAiIMAlnAAAQgBCNg7CGg");
  this.shape_177.setTransform(276.6,235.9,0.975,1);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},38).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_177,p:{scaleX:0.975}}]},1).to({state:[{t:this.shape_177,p:{scaleX:1}}]},57).to({state:[{t:this.shape_177,p:{scaleX:1}}]},4).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).wait(1).to({regX:120.4,scaleX:0.95,scaleY:1,x:276.9,y:247.6},0).wait(1).to({scaleX:0.96,scaleY:1.04,x:276.7,y:246.4},0).wait(1).to({scaleX:0.96,scaleY:1.07,x:276.5,y:245.1},0).wait(1).to({scaleX:0.97,scaleY:1.11,x:276.2,y:243.9},0).wait(1).to({y:242.8},0).wait(1).to({y:241.7},0).wait(1).to({y:240.5},0).wait(1).to({y:239.4},0).wait(2).to({_off:true},1).wait(62));

  // sun
  this.instance_2 = new lib.Symbol3();
  this.instance_2.parent = this;
  this.instance_2.setTransform(214.3,259.9,1,1,0,0,0,17.8,17.8);
  this.instance_2._off = true;

  this.shape_178 = new cjs.Shape();
  this.shape_178.graphics.f("#DFC75E").s().p("Ah9B+Qg0g0AAhKQAAhJA0g0QA0g0BJAAQBKAAA0A0QA0A0AABJQAABKg0A0Qg0A0hKAAQhJAAg0g0g");
  this.shape_178.setTransform(214.3,137.9);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},42).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_178}]},55).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({_off:false},0).wait(1).to({y:253.5},0).wait(1).to({y:247.1},0).wait(1).to({y:240.7},0).wait(1).to({y:234.4},0).wait(1).to({y:217.2},0).wait(1).to({y:199.4},0).wait(1).to({y:187.6},0).wait(1).to({y:175.9},0).wait(1).to({y:166.4},0).wait(1).to({y:156.4},0).wait(1).to({y:148.9},0).wait(1).to({y:144.4},0).to({_off:true},1).wait(56));

  // white circle
  this.instance_3 = new lib.Tween37("synched",0);
  this.instance_3.parent = this;

  this.instance_4 = new lib.Tween38("synched",0);
  this.instance_4.parent = this;
  this.instance_4._off = true;

  this.instance_5 = new lib.Tween39("synched",0);
  this.instance_5.parent = this;
  this.instance_5.setTransform(299,331.8);
  this.instance_5._off = true;

  this.instance_6 = new lib.Tween40("synched",0);
  this.instance_6.parent = this;
  this.instance_6.setTransform(265,306.4);
  this.instance_6._off = true;

  this.instance_7 = new lib.Tween41("synched",0);
  this.instance_7.parent = this;
  this.instance_7.setTransform(280.6,295.8);
  this.instance_7._off = true;

  this.instance_8 = new lib.Tween42("synched",0);
  this.instance_8.parent = this;
  this.instance_8.setTransform(285.7,270);
  this.instance_8._off = true;

  this.instance_9 = new lib.Tween43("synched",0);
  this.instance_9.parent = this;
  this.instance_9.setTransform(285.7,239.7);
  this.instance_9._off = true;

  this.instance_10 = new lib.Tween44("synched",0);
  this.instance_10.parent = this;
  this.instance_10.setTransform(285.7,240.5);
  this.instance_10._off = true;

  this.instance_11 = new lib.Tween45("synched",0);
  this.instance_11.parent = this;
  this.instance_11.setTransform(285.7,207.3);
  this.instance_11._off = true;

  this.instance_12 = new lib.Tween46("synched",0);
  this.instance_12.parent = this;
  this.instance_12.setTransform(285.7,200);
  this.instance_12._off = true;

  this.instance_13 = new lib.Tween47("synched",0);
  this.instance_13.parent = this;
  this.instance_13.setTransform(285.7,200);
  this.instance_13._off = true;

  this.instance_14 = new lib.Tween48("synched",0);
  this.instance_14.parent = this;
  this.instance_14.setTransform(285.7,200);
  this.instance_14._off = true;

  this.instance_15 = new lib.Tween49("synched",0);
  this.instance_15.parent = this;
  this.instance_15.setTransform(282.1,200);
  this.instance_15._off = true;

  this.instance_16 = new lib.Tween50("synched",0);
  this.instance_16.parent = this;
  this.instance_16.setTransform(275.5,200);
  this.instance_16._off = true;

  this.instance_17 = new lib.Tween51("synched",0);
  this.instance_17.parent = this;
  this.instance_17.setTransform(275.5,200);
  this.instance_17._off = true;

  this.instance_18 = new lib.Tween52("synched",0);
  this.instance_18.parent = this;
  this.instance_18.setTransform(275.5,200);
  this.instance_18._off = true;

  this.instance_19 = new lib.Tween53("synched",0);
  this.instance_19.parent = this;
  this.instance_19.setTransform(275.5,200);
  this.instance_19._off = true;

  this.shape_179 = new cjs.Shape();
  this.shape_179.graphics.f("#FFFFFF").s().p("AogUKQj7hrjCjBQjCjChqj7QhukEAAkdQAAkcBukEQBqj7DCjCQDCjCD7hqQEEhuEcAAQEdAAEEBuQD7BqDCDCQDCDCBqD7QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDBj7BrQkEBukdAAQkcAAkEhugAn9zPQjzBli+C9Qi8C9hlDzQhlDzABEKQgBEKBlD0QBlDzC8C9QC+C9DzBkQDzBlEKAAQEKAAD0hlQDzhkC9i9QC8i9BmjzQBkj0AAkKQAAkKhkjzQhmjzi8i9Qi9i9jzhlQj0hlkKAAQkKAAjzBlg");
  this.shape_179.setTransform(275.5,200);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_179}]},91).to({state:[{t:this.shape_179}]},2).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(110));
  this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},1).to({_off:true,x:299,y:331.8},1).wait(109));
  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},1).to({_off:true,x:265,y:306.4},1).wait(108));
  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},1).to({_off:true,x:280.6,y:295.8},1).wait(107));
  this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},1).to({_off:true,x:285.7,y:270},1).wait(106));
  this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},1).to({_off:true,y:239.7},1).wait(105));
  this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},1).to({_off:true,y:240.5},1).wait(104));
  this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},1).to({_off:true,y:207.3},1).wait(103));
  this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({_off:false},1).to({_off:true,y:200},1).wait(102));
  this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({_off:false},1).to({_off:true},1).wait(101));
  this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({_off:false},1).to({_off:true},1).wait(100));
  this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({_off:false},1).to({_off:true,x:282.1},1).wait(99));
  this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(11).to({_off:false},1).to({_off:true,x:275.5},1).wait(98));
  this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(12).to({_off:false},1).to({_off:true},1).wait(97));
  this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(13).to({_off:false},1).to({_off:true},1).wait(96));
  this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(14).to({_off:false},1).to({_off:true},1).wait(95));
  this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(15).to({_off:false},1).to({_off:true},1).wait(94).call(loadMountains));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
  width: 550,
  height: 400,
  fps: 24,
  color: "#AADFE3",
  opacity: 1.00,
  webfonts: {},
  manifest: [],
  preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;