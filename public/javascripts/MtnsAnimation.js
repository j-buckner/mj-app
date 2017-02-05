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


(lib.Symbol6 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#DFC75E").s().p("Ah9B+Qg0g0AAhKQAAhJA0g0QA0g0BJAAQBKAAA0A0QA0A0AABJQAABKg0A0Qg0A0hKAAQhJAAg0g0g");
  this.shape.setTransform(17.8,17.8);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,35.7,35.7), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#644182").s().p("Ax8B+Qg3h/AAiIMAlnAAAQgBCNg7CGg");
  this.shape.setTransform(120.4,13.8);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,240.7,27.6), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#274F6D").s().p("ArjDUQlCjvhzl7QgGgSAMgQQAMgPATAAMAjoAACQATAAALAPQAMAPgGASQg7DBhwCdIgBAAQgOAKgHAIIgBAMIgFAHIgYAUIAAAJQghAngkAkIgkAjQgzAwg7ArQlID0mbAAQmbAAlIj0g");
  this.shape.setTransform(117.9,45.6);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,235.9,91.3), null);


// stage content:
(lib.MtnsAnimation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; } this.initialize(mode,startPosition,loop,{});

  // cloud2
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("Ag5ArQgqgBgegNQgdgOAAgSQAAgUAdgOQAfgOArAAIALABQAUgNAaAAQAlAAAYAYIARgBQAiAAAXAMQAWAMAAARQAAARgWAMQgXANgiAAIgSgCQgYAXgkAAQgjAAgYgVg");
  this.shape.setTransform(277.7,139.6,0.232,0.232);
  this.shape._off = true;

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AghAYQgYAAgRgIQgSgHAAgLQAAgLASgIQARgJAZAAIAHABQAMgHAOAAQAWAAANAOIALgBQATAAANAHQAOAHAAAKQAAAJgOAIQgNAGgTAAIgLgBQgOAOgVAAQgUAAgOgNg");
  this.shape_1.setTransform(277.7,139.6);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("Ag0AnQgoAAgbgNQgcgNAAgQQAAgSAcgNQAcgNAoAAIAKAAQATgLAYAAQAiAAAXAWIAQgBQAfAAAVALQAVALAAAQQAAAQgVALQgVALgfAAIgRgBQgWAVgiAAQghAAgVgUg");
  this.shape_2.setTransform(277.7,139.6);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AhJA3Qg2gBgmgRQgmgSAAgXQAAgZAmgSQAogSA3AAIANAAQAbgPAgAAQAwAAAfAfQAHgCAPAAQAqAAAdAQQAeAPAAAVQAAAXgeAPQgdAQgqAAIgYgCQgeAdgvAAQgsAAgfgbg");
  this.shape_3.setTransform(277.8,139.6);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},124).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape}]},8).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(124).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.63,scaleY:1.63},0).wait(3).to({scaleX:1,scaleY:1},0).wait(14));

  // cloud1
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgcAVQgVAAgPgHQgPgGAAgJQAAgKAPgHQAPgHAWAAIAFAAQAKgGANAAQATAAALAMIAJAAQARAAALAGQAMAGAAAHQAAAJgMAGQgLAGgRAAIgJAAQgLALgTAAQgRAAgMgLg");
  this.shape_4.setTransform(333.7,172.9,0.137,0.137);
  this.shape_4._off = true;

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgQAMQgNAAgIgDQgJgFAAgFQAAgFAJgFQAIgDANAAIADAAQAGgEAIAAQALAAAHAHIAFAAQAKAAAHAEQAGADAAAFQAAAEgGAEQgHADgKAAIgGAAQgGAHgLAAQgKAAgHgHg");
  this.shape_5.setTransform(333.4,172.9);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgdAWQgXAAgPgHQgQgHAAgJQAAgKAQgIQAQgHAWAAIAGAAQALgGANAAQAUAAAMAMIAKAAQARAAAMAGQAMAGAAAIQAAAJgMAHQgMAGgRAAIgLAAQgLALgUAAQgSAAgMgLg");
  this.shape_6.setTransform(333.2,172.9);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AgqAgQghAAgVgKQgYgKABgOQgBgPAYgLQAWgLAhABIAIAAQAPgJAUAAQAdAAARASIANgBQAZAAASAKQAQAIABAMQgBANgQAKQgSAJgZAAIgOAAQgRAQgcAAQgbAAgRgQg");
  this.shape_7.setTransform(332.9,173);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},122).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_4}]},7).to({state:[{t:this.shape_4}]},8).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(122).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.97,scaleY:1.97,x:332.7},0).wait(3).to({scaleX:1,scaleY:1},0).wait(16));

  // tree4
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#69886B").s().p("AgkCRQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAABgBIAkkXQABgEAEAAQAFAAABAEIAlEXQAAAGgGAAg");
  this.shape_8.setTransform(357.9,232.6,0.151,0.151);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#69886B").s().p("AgLAvIgBgBIAAgCIALhZQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAIAMBZQAAABgBAAQAAABAAAAQAAAAAAAAQgBABAAAAg");
  this.shape_9.setTransform(357.8,232.6);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#69886B").s().p("AgRBHIgDgBIAAgCIASiIQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABIASCIQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAg");
  this.shape_10.setTransform(357.9,232.6);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#69886B").s().p("AgXBgQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAYi4QABgDACAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABIAYC4QAAAEgEAAg");
  this.shape_11.setTransform(357.8,232.6);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#69886B").s().p("AgeB5QAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAejnQABgEADAAQAEAAAAAEIAgDnQgBAGgFAAg");
  this.shape_12.setTransform(357.9,232.6);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8,p:{scaleX:0.151,scaleY:0.151,x:357.9}}]},120).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_8,p:{scaleX:1,scaleY:1,x:357.8}}]},1).to({state:[{t:this.shape_8,p:{scaleX:1,scaleY:1,x:357.8}}]},19).wait(1));

  // trunk4
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f().s("#1B1D21").ss(1.3,1).p("AAAgJIAAAT");
  this.shape_13.setTransform(357.9,250.9);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f().s("#1B1D21").ss(1.3,1).p("AAAgRIAAAj");
  this.shape_14.setTransform(357.9,250.1);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f().s("#1B1D21").ss(1.3,1).p("AAAgVIAAAr");
  this.shape_15.setTransform(357.9,249.6);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},118).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},24).wait(1));

  // tree3
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#69886B").s().p("AgkCRQgGAAABgGIAkkWQABgFAEAAQAFAAABAFIAkEWQABAGgGAAg");
  this.shape_16.setTransform(349.2,244.9,0.196,0.238);

  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#69886B").s().p("AgMA5QgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIANhsQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIANBsQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAg");
  this.shape_17.setTransform(349.2,244.9);

  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#69886B").s().p("AgSBPQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIATiWQAAgBAAAAQABgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIATCWQAAABAAABQAAAAgBABQAAAAAAABQgBAAgBAAg");
  this.shape_18.setTransform(349.2,244.9);

  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#69886B").s().p("AgYBlQgEAAAAgEIAZjBQABgEACAAQAEAAAAAEIAZDBQAAAEgEAAg");
  this.shape_19.setTransform(349.2,244.9);

  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#69886B").s().p("AgeB7QgFAAABgFIAejsQABgEADAAQAEAAABAEIAeDsQABAFgFAAg");
  this.shape_20.setTransform(349.2,244.9);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16,p:{scaleX:0.196,scaleY:0.238}}]},111).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_16,p:{scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_16,p:{scaleX:1,scaleY:1}}]},28).wait(1));

  // trunk3
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f().s("#1B1D21").ss(1.3,1).p("AAAgJIAAAT");
  this.shape_21.setTransform(349.2,263.1);

  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f().s("#1B1D21").ss(1.3,1).p("AAAgVIAAAr");
  this.shape_22.setTransform(349.2,262);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},110).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},33).wait(1));

  // tree2
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#69886B").s().p("AgkCRQgGAAABgGIAkkWQABgFAEAAQAFAAABAFIAkEWQABAGgGAAg");
  this.shape_23.setTransform(207,236.7,0.241,0.224);
  this.shape_23._off = true;

  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#69886B").s().p("AgOA6QgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAQhvQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAQBvQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAg");
  this.shape_24.setTransform(207,236.7);

  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#69886B").s().p("AgUBTQgEAAAAgDIAWigQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAIAVCgQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAg");
  this.shape_25.setTransform(206.9,236.7);

  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#69886B").s().p("AgbBtQgFAAABgFIAbjQQACgEACAAQAEAAAAAEIAcDQQABAFgFAAg");
  this.shape_26.setTransform(206.9,236.7);

  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#69886B").s().p("AghCGQgGAAABgGIAhkAQACgFADAAQAFAAAAAFIAiEAQABAGgGAAg");
  this.shape_27.setTransform(206.9,236.8);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23}]},103).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},35).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(103).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,scaleX:1.1,scaleY:1.1,x:206.9,y:236.8},0).wait(1).to({scaleX:1,scaleY:1,y:236.7},0).wait(36));

  // trunk2
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f().s("#1B1D21").ss(1.3,1).p("AAAgKIAAAV");
  this.shape_28.setTransform(206.9,254.9);

  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f().s("#1B1D21").ss(1.3,1).p("AAAgVIAAAr");
  this.shape_29.setTransform(206.9,253.8);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28}]},102).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},41).wait(1));

  // tree1
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#69886B").s().p("AgzDNQgDAAgDgCQgCgDAAgEIA0mJQABgHAGAAQAHAAABAHIA0GJQAAAEgCADQgDACgDAAg");
  this.shape_30.setTransform(194.9,219.1,0.168,0.167);
  this.shape_30._off = true;

  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#69886B").s().p("AgPA/IgCgBIAAgCIAPh4QAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIAQB4IgBACIgCABg");
  this.shape_31.setTransform(195,219.2);

  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#69886B").s().p("AgXBcQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgDIAXiwQABgBAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQADAAABADIAXCwQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAg");
  this.shape_32.setTransform(195,219.2);

  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#69886B").s().p("AgeB5QAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAIAejoQABgEADAAQAEAAABAEIAfDoQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
  this.shape_33.setTransform(195,219.2);

  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#69886B").s().p("AglCWIgFgCQgBgCAAgDIAmkfQABgFAEAAQAFAAABAFIAmEfQAAADgCACQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAg");
  this.shape_34.setTransform(195,219.2);

  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#69886B").s().p("AgsCzQgDAAgDgDQgCgCABgDIAtlXQABgGAFAAQAHAAAAAGIAuFXQAAADgDACQgCADgDAAg");
  this.shape_35.setTransform(195,219.3);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30}]},97).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},30).to({state:[{t:this.shape_30}]},10).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(97).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,scaleX:1.01,scaleY:1.01,x:195,y:219.3},0).wait(1).to({scaleX:1,scaleY:1,y:219.1},0).wait(41));

  // trunk1
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f().s("#1B1D21").ss(1.8,1).p("AAAgEIAAAJ");
  this.shape_36.setTransform(195,245.9);

  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f().s("#1B1D21").ss(1.8,1).p("AAAgSIAAAl");
  this.shape_37.setTransform(195,244.4);

  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f().s("#1B1D21").ss(1.8,1).p("AAAgZIAAAz");
  this.shape_38.setTransform(195,243.8);

  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f().s("#1B1D21").ss(1.8,1).p("AAAgeIAAA9");
  this.shape_39.setTransform(195,243.3);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36}]},94).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},37).to({state:[{t:this.shape_39}]},10).wait(1));

  // peak3
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#C2CCD3").s().p("Ag4AnIA6htIA3BtIg3Agg");
  this.shape_40.setTransform(284.3,165.9,0.105,0.105);
  this.shape_40._off = true;

  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#C2CCD3").s().p("AgiAYIAjhCIAiBCIgiATg");
  this.shape_41.setTransform(284.4,165.9);

  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#C2CCD3").s().p("Ag/AsIBCh6IA9B6Ig9Ajg");
  this.shape_42.setTransform(284.4,165.9);

  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#C2CCD3").s().p("AhbA+IBfivIBYCvIhYA0g");
  this.shape_43.setTransform(284.4,166);

  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#C2CCD3").s().p("Ah4BSIB9jnIB0DnIh0BEg");
  this.shape_44.setTransform(284.4,166);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},88).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},40).to({state:[{t:this.shape_40}]},10).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(88).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,scaleX:2.63,scaleY:2.63,x:284.4,y:166},0).wait(1).to({scaleX:1,scaleY:1,x:284.3,y:165.8},0).wait(51));

  // mtn3
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#A7A6D1").s().p("AmRGIIGRsPIGSMPg");
  this.shape_45.setTransform(284.5,237.1,1,0.02,0,0,0,0,40);
  this.shape_45._off = true;

  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#A7A6D1").s().p("AmRAuIGRhbIGSBbg");
  this.shape_46.setTransform(284.5,232.5);

  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#A7A6D1").s().p("AmRBVIGRipIGSCpg");
  this.shape_47.setTransform(284.5,228.7);

  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#A7A6D1").s().p("AmRB7IGRj1IGSD1g");
  this.shape_48.setTransform(284.5,224.8);

  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#A7A6D1").s().p("AmRChIGRlCIGSFCg");
  this.shape_49.setTransform(284.5,221);

  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#A7A6D1").s().p("AmRDIIGRmPIGSGPg");
  this.shape_50.setTransform(284.5,217.2);

  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#A7A6D1").s().p("AmRDvIGRndIGSHdg");
  this.shape_51.setTransform(284.5,213.3);

  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#A7A6D1").s().p("AmREVIGRopIGSIpg");
  this.shape_52.setTransform(284.5,209.5);

  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#A7A6D1").s().p("AmRE8IGRp3IGSJ3g");
  this.shape_53.setTransform(284.5,205.7);

  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#A7A6D1").s().p("AmRFiIGRrDIGSLDg");
  this.shape_54.setTransform(284.5,201.8);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_45}]},69).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},55).to({state:[{t:this.shape_45}]},10).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(69).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false,regY:0,scaleY:1,y:198},0).wait(66));

  // peak2
  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#B9CFE7").s().p("Ag4AnIA6htIA3BtIg3Agg");
  this.shape_55.setTransform(244.2,154.4,0.106,0.106);
  this.shape_55._off = true;

  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#B9CFE7").s().p("AgjAZIAlhFIAiBFIgiAVg");
  this.shape_56.setTransform(244.2,154.5);

  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#B9CFE7").s().p("AhCAtIBEh/IBBB/IhBAmg");
  this.shape_57.setTransform(244.3,154.5);

  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#B9CFE7").s().p("AhgBCIBki6IBdC6IhdA3g");
  this.shape_58.setTransform(244.3,154.5);

  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#B9CFE7").s().p("Ah/BXICDj0IB8D0Ih8BHg");
  this.shape_59.setTransform(244.3,154.6);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_55}]},84).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},44).to({state:[{t:this.shape_55}]},10).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(84).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,scaleX:2.77,scaleY:2.77,x:244.3,y:154.6},0).wait(1).to({scaleX:1,scaleY:1,x:244.2,y:154.4},0).wait(55));

  // mtn2
  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#A6B9D5").s().p("AnMHCIHMuDIHNODg");
  this.shape_60.setTransform(244.4,237.2,1,0.044,0,0,0,0,44.5);
  this.shape_60._off = true;

  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#A6B9D5").s().p("AnNA/IHNh9IHOB9g");
  this.shape_61.setTransform(244.4,230.9);

  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#A6B9D5").s().p("AnNBqIHNjTIHODTg");
  this.shape_62.setTransform(244.4,226.6);

  this.shape_63 = new cjs.Shape();
  this.shape_63.graphics.f("#A6B9D5").s().p("AnNCVIHNkpIHOEpg");
  this.shape_63.setTransform(244.4,222.3);

  this.shape_64 = new cjs.Shape();
  this.shape_64.graphics.f("#A6B9D5").s().p("AnNDAIHNl/IHOF/g");
  this.shape_64.setTransform(244.4,218);

  this.shape_65 = new cjs.Shape();
  this.shape_65.graphics.f("#A6B9D5").s().p("AnNDrIHNnVIHOHVg");
  this.shape_65.setTransform(244.4,213.7);

  this.shape_66 = new cjs.Shape();
  this.shape_66.graphics.f("#A6B9D5").s().p("AnNEWIHNorIHOIrg");
  this.shape_66.setTransform(244.4,209.4);

  this.shape_67 = new cjs.Shape();
  this.shape_67.graphics.f("#A6B9D5").s().p("AnNFBIHNqBIHOKBg");
  this.shape_67.setTransform(244.4,205.1);

  this.shape_68 = new cjs.Shape();
  this.shape_68.graphics.f("#A6B9D5").s().p("AnNFsIHNrXIHOLXg");
  this.shape_68.setTransform(244.4,200.8);

  this.shape_69 = new cjs.Shape();
  this.shape_69.graphics.f("#A6B9D5").s().p("AnNGXIHNstIHOMtg");
  this.shape_69.setTransform(244.4,196.5);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60}]},64).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},60).to({state:[{t:this.shape_60}]},10).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(64).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false,regY:0,scaleY:1,y:192.2},0).wait(71));

  // peak1
  this.shape_70 = new cjs.Shape();
  this.shape_70.graphics.f("#D3DFE9").s().p("Ag4AnIA7htIA2BtIg2Agg");
  this.shape_70.setTransform(314,175.4,0.085,0.085);
  this.shape_70._off = true;

  this.shape_71 = new cjs.Shape();
  this.shape_71.graphics.f("#D3DFE9").s().p("AgZASIAagyIAZAyIgZAPg");
  this.shape_71.setTransform(314,175.4);

  this.shape_72 = new cjs.Shape();
  this.shape_72.graphics.f("#D3DFE9").s().p("AgvAgIAxhaIAuBaIguAbg");
  this.shape_72.setTransform(314,175.4);

  this.shape_73 = new cjs.Shape();
  this.shape_73.graphics.f("#D3DFE9").s().p("AhEAvIBHiEIBCCEIhCAng");
  this.shape_73.setTransform(314,175.4);

  this.shape_74 = new cjs.Shape();
  this.shape_74.graphics.f("#D3DFE9").s().p("AhaA+IBeiuIBXCuIhXAzg");
  this.shape_74.setTransform(314,175.4);

  this.shape_75 = new cjs.Shape();
  this.shape_75.graphics.f("#D3DFE9").s().p("AhwBNIB1jXIBsDXIhsA/g");
  this.shape_75.setTransform(314,175.4);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_70}]},79).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},48).to({state:[{t:this.shape_70}]},10).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(79).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,scaleX:2.36,scaleY:2.36},0).wait(1).to({scaleX:1,scaleY:1},0).wait(59));

  // mtn1
  this.shape_76 = new cjs.Shape();
  this.shape_76.graphics.f("#B9CFE7").s().p("AlhFaIFhqzIFiKzg");
  this.shape_76.setTransform(313.9,237.2,1,0.029,0,0,0,0,35.1);
  this.shape_76._off = true;

  this.shape_77 = new cjs.Shape();
  this.shape_77.graphics.f("#B9CFE7").s().p("AlhArIFhhWIFiBWg");
  this.shape_77.setTransform(313.9,232.9);

  this.shape_78 = new cjs.Shape();
  this.shape_78.graphics.f("#B9CFE7").s().p("AlhBNIFhiZIFiCZg");
  this.shape_78.setTransform(313.9,229.5);

  this.shape_79 = new cjs.Shape();
  this.shape_79.graphics.f("#B9CFE7").s().p("AlhBvIFhjdIFiDdg");
  this.shape_79.setTransform(313.9,226.2);

  this.shape_80 = new cjs.Shape();
  this.shape_80.graphics.f("#B9CFE7").s().p("AlhCQIFhkfIFiEfg");
  this.shape_80.setTransform(313.9,222.8);

  this.shape_81 = new cjs.Shape();
  this.shape_81.graphics.f("#B9CFE7").s().p("AlhCyIFhljIFiFjg");
  this.shape_81.setTransform(313.9,219.5);

  this.shape_82 = new cjs.Shape();
  this.shape_82.graphics.f("#B9CFE7").s().p("AlhDTIFhmlIFiGlg");
  this.shape_82.setTransform(313.9,216.1);

  this.shape_83 = new cjs.Shape();
  this.shape_83.graphics.f("#B9CFE7").s().p("AlhD1IFhnpIFiHpg");
  this.shape_83.setTransform(313.9,212.7);

  this.shape_84 = new cjs.Shape();
  this.shape_84.graphics.f("#B9CFE7").s().p("AlhEWIFhorIFiIrg");
  this.shape_84.setTransform(313.9,209.4);

  this.shape_85 = new cjs.Shape();
  this.shape_85.graphics.f("#B9CFE7").s().p("AlhE4IFhpvIFiJvg");
  this.shape_85.setTransform(313.9,206);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_76}]},59).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_76}]},65).to({state:[{t:this.shape_76}]},10).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_76).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false,regY:0,scaleY:1,y:202.7},0).wait(76));

  // lake lines
  this.shape_86 = new cjs.Shape();
  this.shape_86.graphics.f().s("#29506C").ss(3.2,1).p("Ah1AAIDrAA");
  this.shape_86.setTransform(249.4,255.7,0.09,1);

  this.shape_87 = new cjs.Shape();
  this.shape_87.graphics.f().s("#29506C").ss(3.2,1).p("AjBAAIGDAA");
  this.shape_87.setTransform(246,247.5,0.09,1);

  this.shape_88 = new cjs.Shape();
  this.shape_88.graphics.f().s("#29506C").ss(3.2,1).p("Ag+goIBFAAAAVApIAqAA");
  this.shape_88.setTransform(250.8,251.6);

  this.shape_89 = new cjs.Shape();
  this.shape_89.graphics.f().s("#29506C").ss(3.2,1).p("AhegoIBoAAAAfApIBAAA");
  this.shape_89.setTransform(254.3,251.6);

  this.shape_90 = new cjs.Shape();
  this.shape_90.graphics.f().s("#29506C").ss(3.2,1).p("Ah+goICMAAAAqApIBVAA");
  this.shape_90.setTransform(257.7,251.6);

  this.shape_91 = new cjs.Shape();
  this.shape_91.graphics.f().s("#29506C").ss(3.2,1).p("AiegoICvAAAA0ApIBrAA");
  this.shape_91.setTransform(261.2,251.6);

  this.shape_92 = new cjs.Shape();
  this.shape_92.graphics.f().s("#29506C").ss(3.2,1).p("Ai+goIDTAAAA/ApICAAA");
  this.shape_92.setTransform(264.7,251.6);

  this.shape_93 = new cjs.Shape();
  this.shape_93.graphics.f().s("#29506C").ss(3.2,1).p("AjegoID2AAABKApICVAA");
  this.shape_93.setTransform(268.1,251.6);

  this.shape_94 = new cjs.Shape();
  this.shape_94.graphics.f().s("#29506C").ss(3.2,1).p("Aj+goIEaAAABUApICqAA");
  this.shape_94.setTransform(271.6,251.6);

  this.shape_95 = new cjs.Shape();
  this.shape_95.graphics.f().s("#29506C").ss(3.2,1).p("AkegoIE9AAABeApIDAAA");
  this.shape_95.setTransform(275,251.6);

  this.shape_96 = new cjs.Shape();
  this.shape_96.graphics.f().s("#29506C").ss(3.2,1).p("Ak9goIFfAAABpApIDVAA");
  this.shape_96.setTransform(278.5,251.6);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_87,p:{scaleX:0.09,x:246}},{t:this.shape_86,p:{scaleX:0.09,x:249.4}}]},128).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_87,p:{scaleX:1,x:266.3}},{t:this.shape_86,p:{scaleX:1,x:305.2}}]},1).to({state:[{t:this.shape_87,p:{scaleX:1,x:266.3}},{t:this.shape_86,p:{scaleX:1,x:305.2}}]},1).to({state:[{t:this.shape_87,p:{scaleX:1,x:266.3}},{t:this.shape_86,p:{scaleX:1,x:305.2}}]},5).wait(1));

  // lake
  this.shape_97 = new cjs.Shape();
  this.shape_97.graphics.f("#51C4C0").s().p("AlwCWQh9AAhYhXQhYhYAAh8IU7AAQAAB8hYBYQhYBXh9AAg");
  this.shape_97.setTransform(290,266.9,0.139,0.169,0,0,0,-0.1,15.2);
  this.shape_97._off = true;

  this.shape_98 = new cjs.Shape();
  this.shape_98.graphics.f("#51C4C0").s().p("AhMAkQgbAAgSgVQgTgUAAgeIEZAAQAAAegSAUQgTAVgaAAg");
  this.shape_98.setTransform(290,263.3);

  this.shape_99 = new cjs.Shape();
  this.shape_99.graphics.f("#51C4C0").s().p("AhnAvQgkAAgYgcQgZgaAAgnIF5AAQAAAngZAaQgZAcgjAAg");
  this.shape_99.setTransform(290,262.3);

  this.shape_100 = new cjs.Shape();
  this.shape_100.graphics.f("#51C4C0").s().p("AiCA5QgsAAgfgiQgfggAAgvIHZAAQAAAvgfAgQgfAigsAAg");
  this.shape_100.setTransform(290,261.2);

  this.shape_101 = new cjs.Shape();
  this.shape_101.graphics.f("#51C4C0").s().p("AicBDQg1AAgmgnQglgnAAg3II5AAQAAA3glAnQgmAng1AAg");
  this.shape_101.setTransform(290,260.2);

  this.shape_102 = new cjs.Shape();
  this.shape_102.graphics.f("#51C4C0").s().p("Ai3BOQg+AAgsguQgrgtAAhAIKaAAQgBBAgrAtQgsAug/AAg");
  this.shape_102.setTransform(290,259.1);

  this.shape_103 = new cjs.Shape();
  this.shape_103.graphics.f("#51C4C0").s().p("AjRBYQhHAAgyg0QgzgzAAhIIL6AAQAABIgxAzQgzA0hHAAg");
  this.shape_103.setTransform(290,258.1);

  this.shape_104 = new cjs.Shape();
  this.shape_104.graphics.f("#51C4C0").s().p("AjrBiQhRAAg4g5Qg5g5AAhRINbAAQAABRg4A5Qg5A5hQAAg");
  this.shape_104.setTransform(290,257);

  this.shape_105 = new cjs.Shape();
  this.shape_105.graphics.f("#51C4C0").s().p("AkGBtQhaAAg+hAQg/g/AAhaIO7AAQAABag/A/Qg+BAhZAAg");
  this.shape_105.setTransform(290,256);

  this.shape_106 = new cjs.Shape();
  this.shape_106.graphics.f("#51C4C0").s().p("AkgB3QhjAAhFhFQhFhFAAhjIQbAAQAABjhFBFQhFBFhiAAg");
  this.shape_106.setTransform(290,254.9);

  this.shape_107 = new cjs.Shape();
  this.shape_107.graphics.f("#51C4C0").s().p("Ak7CCQhrAAhMhMQhLhMAAhrIR7AAQAABrhLBMQhMBMhqAAg");
  this.shape_107.setTransform(290,253.9);

  this.shape_108 = new cjs.Shape();
  this.shape_108.graphics.f("#51C4C0").s().p("AlWCMQh0AAhShSQhRhSAAhzITbAAQAABzhSBSQhRBSh0AAg");
  this.shape_108.setTransform(290,252.9);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_97}]},52).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},70).to({state:[{t:this.shape_97}]},10).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.shape_97).wait(52).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false,regX:0,regY:0,scaleX:1,scaleY:1,y:251.8},0).wait(81));

  // mtn ground
  this.instance = new lib.Symbol4();
  this.instance.parent = this;
  this.instance.setTransform(310.4,272,0.999,0.999,-25,0,0,116.1,48.7);
  this.instance._off = true;

  this.shape_109 = new cjs.Shape();
  this.shape_109.graphics.f("#274F6D").s().p("ArjDUQlCjvhzl7QgGgSAMgQQAMgPATAAMAjoAACQATAAALAPQAMAPgGASQg7DBhwCdIgBAAQgOAKgHAIIgBAMIgFAHIgYAUIAAAJQghAngkAkIgkAjQgzAwg7ArQlID0mbAAQmbAAlIj0g");
  this.shape_109.setTransform(276.4,281);
  this.shape_109._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).wait(1).to({regX:117.9,regY:45.6,scaleX:1,scaleY:1,rotation:-14.9,x:297.5,y:268.8},0).wait(1).to({rotation:-4.8,x:284.3,y:269.2},0).wait(1).to({rotation:5.4,x:271.1,y:269.7},0).wait(1).to({rotation:15.5,x:257.7,y:270.4},0).wait(1).to({rotation:25.7,x:244.3,y:271},0).wait(1).to({rotation:19.6,x:252.2,y:272.4},0).wait(1).to({rotation:13.6,x:260.1,y:273.8},0).wait(1).to({rotation:7.6,x:267.9,y:275.2},0).wait(1).to({rotation:1.6,x:275.7,y:276.7},0).wait(1).to({rotation:-4.4,x:283.5,y:278.1},0).wait(1).to({rotation:-2.7,x:281.6,y:277.8},0).wait(1).to({rotation:-1,x:279.7,y:277.5},0).wait(1).to({rotation:0.8,x:277.8,y:277.3},0).wait(1).to({rotation:2.5,x:275.9,y:277},0).wait(1).to({rotation:4.2,x:274,y:276.8},0).wait(5).to({_off:true},1).wait(107));
  this.timeline.addTween(cjs.Tween.get(this.shape_109).wait(38).to({_off:false},0).wait(107));

  // dark purple sky
  this.instance_1 = new lib.Symbol5();
  this.instance_1.parent = this;
  this.instance_1.setTransform(276.7,248.9,0.949,0.964,0,0,0,119.8,13.8);
  this.instance_1._off = true;

  this.shape_110 = new cjs.Shape();
  this.shape_110.graphics.f("#644182").s().p("AxfB+Qg1h/AAiIMAkpAAAQAACMg6CHg");
  this.shape_110.setTransform(276.7,235.9);

  this.shape_111 = new cjs.Shape();
  this.shape_111.graphics.f("#29506C").s().p("Ax8B+Qg3h/AAiIMAlnAAAQgBCNg7CGg");
  this.shape_111.setTransform(276.6,235.9);

  this.shape_112 = new cjs.Shape();
  this.shape_112.graphics.f("#644182").s().p("Ax8B+Qg3h/AAiIMAlnAAAQgBCNg7CGg");
  this.shape_112.setTransform(276.6,235.9);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},38).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},59).to({state:[{t:this.shape_112}]},4).to({state:[{t:this.shape_112}]},22).to({state:[{t:this.shape_112}]},10).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).wait(1).to({regX:120.4,scaleX:0.95,scaleY:1,x:276.9,y:247.6},0).wait(1).to({scaleX:0.96,scaleY:1.04,x:276.7,y:246.4},0).wait(1).to({scaleX:0.96,scaleY:1.07,x:276.5,y:245.1},0).wait(1).to({scaleX:0.97,scaleY:1.11,x:276.2,y:243.9},0).wait(1).to({y:242.8},0).wait(1).to({y:241.7},0).wait(1).to({y:240.5},0).wait(1).to({y:239.4},0).wait(2).to({_off:true},1).wait(96));

  // sun
  this.instance_2 = new lib.Symbol6();
  this.instance_2.parent = this;
  this.instance_2.setTransform(214.3,259.9,1,1,0,0,0,17.8,17.8);
  this.instance_2._off = true;

  this.shape_113 = new cjs.Shape();
  this.shape_113.graphics.f("#DFC75E").s().p("Ah9B+Qg0g0AAhKQAAhJA0g0QA0g0BJAAQBKAAA0A0QA0A0AABJQAABKg0A0Qg0A0hKAAQhJAAg0g0g");
  this.shape_113.setTransform(214.3,137.9);
  this.shape_113._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({_off:false},0).wait(1).to({y:253.5},0).wait(1).to({y:247.1},0).wait(1).to({y:240.7},0).wait(1).to({y:234.4},0).wait(1).to({y:217.2},0).wait(1).to({y:199.4},0).wait(1).to({y:187.6},0).wait(1).to({y:175.9},0).wait(1).to({y:166.4},0).wait(1).to({y:156.4},0).wait(1).to({y:148.9},0).wait(1).to({y:144.4},0).to({_off:true},1).wait(90));
  this.timeline.addTween(cjs.Tween.get(this.shape_113).wait(55).to({_off:false},0).wait(90));

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

  this.shape_114 = new cjs.Shape();
  this.shape_114.graphics.f("#FFFFFF").s().p("AogUKQj7hrjCjBQjCjChqj7QhukEAAkdQAAkcBukEQBqj7DCjCQDCjCD7hqQEEhuEcAAQEdAAEEBuQD7BqDCDCQDCDCBqD7QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDBj7BrQkEBukdAAQkcAAkEhugAn9zPQjzBli+C9Qi8C9hlDzQhlDzABEKQgBEKBlD0QBlDzC8C9QC+C9DzBkQDzBlEKAAQEKAAD0hlQDzhkC9i9QC8i9BmjzQBkj0AAkKQAAkKhkjzQhmjzi8i9Qi9i9jzhlQj0hlkKAAQkKAAjzBlg");
  this.shape_114.setTransform(275.5,200);
  this.shape_114._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(144));
  this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},1).to({_off:true,x:299,y:331.8},1).wait(143));
  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},1).to({_off:true,x:265,y:306.4},1).wait(142));
  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},1).to({_off:true,x:280.6,y:295.8},1).wait(141));
  this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},1).to({_off:true,x:285.7,y:270},1).wait(140));
  this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},1).to({_off:true,y:239.7},1).wait(139));
  this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},1).to({_off:true,y:240.5},1).wait(138));
  this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},1).to({_off:true,y:207.3},1).wait(137));
  this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({_off:false},1).to({_off:true,y:200},1).wait(136));
  this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({_off:false},1).to({_off:true},1).wait(135));
  this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({_off:false},1).to({_off:true},1).wait(134));
  this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({_off:false},1).to({_off:true,x:282.1},1).wait(133));
  this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(11).to({_off:false},1).to({_off:true,x:275.5},1).wait(132));
  this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(12).to({_off:false},1).to({_off:true},1).wait(131));
  this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(13).to({_off:false},1).to({_off:true},1).wait(130));
  this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(14).to({_off:false},1).to({_off:true},1).wait(129));
  this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(15).to({_off:false},1).to({_off:true},1).wait(128));
  this.timeline.addTween(cjs.Tween.get(this.shape_114).wait(16).to({_off:false},1).wait(128));

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