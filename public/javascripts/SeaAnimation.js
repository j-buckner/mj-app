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


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#29506C").ss(1.7,1).p("AhQAAIChAA");
	this.shape.setTransform(9.7,57.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMANQgGgGAAgHQAAgHAGgFQAFgFAHgBQAHABAGAFQAFAFAAAHQAAAHgFAGQgGAGgHgBQgHABgFgGg");
	this.shape_1.setTransform(19.5,45.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#509995").s().p("AhvBTIgBgCQAKgoAqgbQAXgOAlgQQBdgzASgQIABACQABAtgcAqQgxBOh1AAIgegBg");
	this.shape_2.setTransform(85.3,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#509995").s().p("AhUAGQgSgagHghIgCgcIAAgCIAVAOQAhAVA5AgIA9AeQAqAbAKAoIgBACIgeABQh1AAgxhOg");
	this.shape_3.setTransform(62.7,8.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#509995").s().p("AkZEEQgqAAgdgdQgegdAAgqIAAicQAAgpAegdQAdgeAqAAIIwAAQAJAAAGgFQAIgGABgIIAqiQIAhAAIAECjIAADfQAAA3gRAnQgSAmgYAAIgzAAIAAABg");
	this.shape_4.setTransform(38.3,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,96.5,67.4), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFC75E").s().p("Ah9B+Qg0g0AAhKQAAhJA0g0QA0g0BJAAQBKAAA0A0QA0A0AABJQAABKg0A0Qg0A0hKAAQhJAAg0g0g");
	this.shape.setTransform(17.8,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,35.7,35.7), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#29506C").s().p("Ax8B+Qg3h/AAiIMAlnAAAQgBCNg7CGg");
	this.shape.setTransform(120.4,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,240.7,27.6), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#55BFAF").s().p("ArjDUQlCjvhzl7QgGgSAMgQQAMgPATAAMAjoAACQATAAALAPQAMAPgGASQg7DBhwCdIgBAAQgOAKgHAIIgBAMIgFAHIgYAUIAAAJQghAngkAkIgkAjQgzAwg7ArQlID0mbAAQmbAAlIj0g");
	this.shape.setTransform(117.9,45.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,235.9,91.3), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#29506C").s().p("AAvAaQgVARgjAAQgdAAgUgMQgVgMAAgSQAAgPAVgNQAUgLAdAAQAjAAAUAQIAhgXIABBag");
	this.shape.setTransform(8,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,15.9,9.1), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#29506C").s().p("Ahwg1IAvAbQAfgTAwAAQApAAAeAOQAdAOAAATQAAAUgdAPQgeAOgpAAQgzgBgegUIguAYg");
	this.shape.setTransform(11.4,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,22.8,10.7), null);


// stage content:
(lib.SeaAnimation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},93).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape}]},8).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(93).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.63,scaleY:1.63},0).wait(3).to({scaleX:1,scaleY:1},0).wait(17));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},91).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_4}]},7).to({state:[{t:this.shape_4}]},8).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(91).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.97,scaleY:1.97,x:332.7},0).wait(3).to({scaleX:1,scaleY:1},0).wait(19));

	// fish1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(244.4,306.7,1,1,0,0,0,11.3,5.4);
	this.instance.alpha = 0.66;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).wait(1).to({regX:11.4,regY:5.3,x:241.9,y:306.6},0).wait(1).to({x:239.3},0).wait(1).to({x:236.8},0).wait(1).to({x:234.2},0).wait(1).to({x:231.6},0).wait(1).to({x:229.1},0).wait(1).to({regX:11.3,regY:5.4,x:244.4,y:306.7},0).wait(16));

	// fish2
	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.8,286.3,1,1,0,0,0,8,4.5);
	this.instance_1.alpha = 0.66;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).wait(1).to({x:340.7,y:291.7},0).wait(1).to({x:336.1,y:295.9},0).wait(1).to({x:330.1,y:296.2},0).wait(1).to({x:324.8,y:293},0).wait(21));

	// whale
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(312.3,273.7,1,1,2.3,0,0,47.2,32.6);
	this.instance_2._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#29506C").ss(1.7,1).p("AhQAAIChAA");
	this.shape_8.setTransform(252.5,271.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMANQgGgGAAgHQAAgHAGgFQAFgFAHgBQAHABAGAFQAFAFAAAHQAAAHgFAGQgGAGgHgBQgHABgFgGg");
	this.shape_9.setTransform(262.3,259.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#509995").s().p("AhvBTIgBgCQAKgoAqgbQAXgOAlgQQBdgzASgQIABACQABAtgcAqQgxBOh1AAIgegBg");
	this.shape_10.setTransform(328,222.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#509995").s().p("AhUAGQgSgagHghIgCgcIAAgCIAVAOQAhAVA5AgIA9AeQAqAbAKAoIgBACIgeABQh1AAgxhOg");
	this.shape_11.setTransform(305.5,222.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#509995").s().p("AkZEEQgqAAgdgdQgegdAAgqIAAicQAAgpAegdQAdgeAqAAIIwAAQAJAAAGgFQAIgGABgIIAqiQIAhAAIAECjIAADfQAAA3gRAnQgSAmgYAAIgzAAIAAABg");
	this.shape_12.setTransform(281,255.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},84).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).wait(1).to({regX:48.3,regY:33.7,rotation:2,x:309.2,y:268},0).wait(1).to({rotation:1.5,x:306.4,y:262},0).wait(1).to({rotation:1,x:303.9,y:255.8},0).wait(1).to({rotation:0.5,x:301.8,y:249.5},0).wait(1).to({rotation:0,x:300,y:243.1},0).to({_off:true},1).wait(27));

	// wave2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#29506C").ss(3.2,1).p("Ah2AAIDtAA");
	this.shape_13.setTransform(380.6,244.1,0.059,1,0,0,0,13.4,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#29506C").ss(3.2,1).p("AgiAAIBFAA");
	this.shape_14.setTransform(376.7,244.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#29506C").ss(3.2,1).p("Ag+AAIB9AA");
	this.shape_15.setTransform(373.5,244.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#29506C").ss(3.2,1).p("AhaAAIC1AA");
	this.shape_16.setTransform(370.3,244.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13,p:{regX:13.4,scaleX:0.059,x:380.6}}]},79).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_13,p:{regX:0,scaleX:1,x:367.1}}]},1).wait(34));

	// wave1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#29506C").ss(3.2,1).p("Ah2AAIDtAA");
	this.shape_17.setTransform(184.5,250.2,0.096,1,0,0,0,-13.3,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#29506C").ss(3.2,1).p("AglAAIBLAA");
	this.shape_18.setTransform(188.9,250.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#29506C").ss(3.2,1).p("AhAAAICCAA");
	this.shape_19.setTransform(191.9,250.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#29506C").ss(3.2,1).p("AhbAAIC3AA");
	this.shape_20.setTransform(194.9,250.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17,p:{regX:-13.3,scaleX:0.096,x:184.5}}]},77).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_17,p:{regX:0,scaleX:1,x:197.9}}]},1).wait(36));

	// window
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_21.setTransform(248.4,227.1);
	this.shape_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(79).to({_off:false},0).wait(38));

	// sail3
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAuB8Qg5gphAgUIAJg7QAFgmgFgpIgKhGIAeAiQBGBOAeBkIAXBPg");
	this.shape_22.setTransform(244.8,210.3,0.039,0.156,0,0,0,-7.3,6.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AALAqQgNgOgPgHIACgUQABgMgBgOIgCgYIAHAMQAQAbAHAgIAFAbg");
	this.shape_23.setTransform(246,208.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUBBQgYgWgcgLIADgeQADgUgCgVIgEgkIANARQAeAqAMAyIAKAqg");
	this.shape_24.setTransform(246.9,208);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAdBXQgkgdgogOIAFgqQAEgagDgdIgGgxIASAYQAsA3ATBGIAPA4g");
	this.shape_25.setTransform(247.9,207.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAnBuQgwgkg1gSIAHg0QAFgigFglIgIg+IAZAfQA7BFAXBYIATBGg");
	this.shape_26.setTransform(248.8,206.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAwCFQg7gshCgWIAJg/QAGgpgGgrIgKhLIAfAkQBIBUAfBqIAXBVg");
	this.shape_27.setTransform(249.7,206);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AA5CbQhGgzhPgZIAKhKQAIgwgHg0IgMhXIAlAqQBWBjAkB8IAcBkg");
	this.shape_28.setTransform(250.6,205.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABCCyQhSg7hbgdIAMhUQAJg3gIg8IgOhjIArAwQBkBxAqCOIAgByg");
	this.shape_29.setTransform(251.5,204.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22,p:{regX:-7.3,regY:6.4,scaleX:0.039,scaleY:0.156,x:244.8,y:210.3}}]},71).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_22,p:{regX:0,regY:0,scaleX:1.616,scaleY:1.616,x:252.4,y:204}}]},1).to({state:[{t:this.shape_22,p:{regX:0,regY:0,scaleX:1,scaleY:1,x:252.4,y:204}}]},1).wait(37));

	// sail2
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag1CfQgFAAABgFIAkk1QAAgBAAAAQAAgBAAgBQABAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAIBIA2QAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABIAAEBQAAAFgEAAg");
	this.shape_30.setTransform(240.5,190.1,0.151,0.074,0,0,0,6,-10.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLAgIgDgBIgBAAIAIg3IAHgHIAAAAIAAAAIAMAHIADAEIABACIAAAlIgHAMIgCABg");
	this.shape_31.setTransform(238.9,192.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgPA1IgGAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgBIAMhWIAGgQIABgBIABAAIASAMIAGAGIABACIAAA9IgGAXQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAg");
	this.shape_32.setTransform(238.2,193.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgTBKIgIAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAAAIAPh3IAHgZIAAgCIACAAIAZASIAJAIIABACIAABTIgFAkQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAg");
	this.shape_33.setTransform(237.5,195);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXBgIgLgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgBIAZi5QAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIACAAIAfAWIAMALIABACIgDCaQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_34.setTransform(236.7,196.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgbB1IgNgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAAAIAdjjQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBIADABIA1AnIABADIgCC8QAAABgBABQAAABAAAAQgBAAAAABQgBAAgBAAg");
	this.shape_35.setTransform(236,197.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgfCKIgPAAQgEAAAAgEIAAgBIAgkLQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABIA+AuIABAEIgBDeQAAAEgDAAg");
	this.shape_36.setTransform(235.3,199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30,p:{regX:6,regY:-10.5,scaleX:0.151,scaleY:0.074,x:240.5,y:190.1}}]},66).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_30,p:{regX:0,regY:0,scaleX:1,scaleY:1,x:234.6,y:200.4}}]},1).wait(44));

	// sail1
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgKACQgBAAAAgIIAAgLIAThrQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAAD3QAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_37.setTransform(220.6,203.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AANBaIgBgDIgbhIQgBAAgCgIIgBgEIAAgEIAahvQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIAIBCIABACIAAADIAACZQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_38.setTransform(219.8,204.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAXBaIgCgCIgpg7QgCgBgCgGIgCgFIgBgEIAhhwIACgCQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIARAkIAAABIABAEIAACgQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABg");
	this.shape_39.setTransform(219,204.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAgBbIgCgBIg3gwQgDAAgCgGIgEgDQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAohzIACgCIACgCIAZAHIABABIABADIAACmIgBAEg");
	this.shape_40.setTransform(218.2,205.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAnBhIhGgkQgDAAgDgEIgFgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAuh2IACgDIADgCIAhgXIABABIABADIABCsIgBAFIgDAMIAAAAIgBAAg");
	this.shape_41.setTransform(217.5,205.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAwBqIhUgYQgEAAgEgCIgFgCQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIA1h5IACgDIADgEIApgzIACAAIABACIABCzIgBAFIgCAZIAAAAIgBAAg");
	this.shape_42.setTransform(216.7,204.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgpBpQgFAAgEgCIgHgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAABgBIA7h8IACgEIADgEIAyhSIACAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIABC6IgBAGIAAAkQAAAAAAABQgBAAAAAAQAAAAAAAAQgBABAAAAg");
	this.shape_43.setTransform(215.9,204.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhAB+QgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBABgBICBj3QAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIABD3QAAABgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_44.setTransform(215.1,203.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37}]},62).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).wait(48));

	// line1
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#1B1D21").ss(2.2,1).p("AAAiKIAAEV");
	this.shape_45.setTransform(223.5,218.7,1,0.083,0,0,0,0,13.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#1B1D21").ss(2.2,1).p("AAAAlIAAhJ");
	this.shape_46.setTransform(223.5,215);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#1B1D21").ss(2.2,1).p("AAAA/IAAh9");
	this.shape_47.setTransform(223.5,212.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#1B1D21").ss(2.2,1).p("AAABYIAAiv");
	this.shape_48.setTransform(223.5,209.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#1B1D21").ss(2.2,1).p("AAABxIAAjh");
	this.shape_49.setTransform(223.5,207.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_45,p:{regY:13.9,scaleY:0.083,y:218.7}}]},57).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_45,p:{regY:0,scaleY:1,y:204.8}}]},1).wait(55));

	// line2
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#1B1D21").ss(2.3,1).p("AAAifIAAE/");
	this.shape_50.setTransform(242,219.6,1,0.047,0,0,0,0,16.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#1B1D21").ss(2.3,1).p("AAAAmIAAhL");
	this.shape_51.setTransform(242,215.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#1B1D21").ss(2.3,1).p("AAABEIAAiH");
	this.shape_52.setTransform(242,212.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#1B1D21").ss(2.3,1).p("AAABjIAAjF");
	this.shape_53.setTransform(242,209.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#1B1D21").ss(2.3,1).p("AAACBIAAkB");
	this.shape_54.setTransform(242,205.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50,p:{regY:16.5,scaleY:0.047,y:219.6}}]},56).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_50,p:{regY:0,scaleY:1,y:202.7}}]},1).wait(56));

	// boat
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C47C2A").s().p("AjgBNQgYAAgMgVQgMgVAMgUIAvhVQADgGAGAAIHMAAQAFAAAEAFQADAEgCAFQgUA+g1AmQg0AnhCAAg");
	this.shape_55.setTransform(234.5,227.9,0.086,0.086);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C47C2A").s().p("AhKAaQgHAAgEgHQgEgHAEgHIAPgcQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAICYAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgGAUgSANQgRANgWAAg");
	this.shape_56.setTransform(234.5,227.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C47C2A").s().p("AiBAsQgNAAgHgMQgHgMAHgLIAbgxQABgDAEAAIEJAAQADAAACACQACADgBACQgMAkgeAWQgeAWgnAAg");
	this.shape_57.setTransform(234.5,227.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C47C2A").s().p("Ai4A/QgUAAgKgRQgJgRAJgRIAnhFQACgFAFAAIF7AAQAEAAADAEQACADgBAEQgQAzgsAgQgrAfg2AAg");
	this.shape_58.setTransform(234.5,227.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C47C2A").s().p("AjwBSQgZAAgNgWQgMgWAMgWIAzhbQADgGAGAAIHsAAQAFAAAEAFQADAEgCAGQgVBCg4ApQg5AphGAAg");
	this.shape_59.setTransform(234.5,227.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C47C2A").s().p("AknBlQgfAAgQgbQgPgcAPgaIA+hwQAEgIAIAAIJdAAQAGAAAFAGQAEAGgCAGQgaBShGAyQhFAzhWAAg");
	this.shape_60.setTransform(234.5,227.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_55,p:{scaleX:0.086,scaleY:0.086}}]},49).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_55,p:{scaleX:1.56,scaleY:1.56}}]},1).to({state:[{t:this.shape_55,p:{scaleX:1,scaleY:1}}]},1).wait(61));

	// ground
	this.instance_3 = new lib.Symbol7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(310.4,272,0.999,0.999,-25,0,0,116.2,48.6);
	this.instance_3._off = true;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#55BFAF").s().p("ArjDUQlCjvhzl7QgGgSAMgQQAMgPATAAMAjoAACQATAAALAPQAMAPgGASQg7DBhwCdIgBAAQgOAKgHAIIgBAMIgFAHIgYAUIAAAJQghAngkAkIgkAjQgzAwg7ArQlID0mbAAQmbAAlIj0g");
	this.shape_61.setTransform(276.4,281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},17).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},75).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).wait(1).to({regX:117.9,regY:45.6,scaleX:1,scaleY:1,rotation:-14.9,x:297.5,y:268.9},0).wait(1).to({rotation:-4.8,x:284.3,y:269.3},0).wait(1).to({rotation:5.4,x:271,y:269.8},0).wait(1).to({rotation:15.5,x:257.6,y:270.4},0).wait(1).to({rotation:25.7,x:244.2,y:271.1},0).wait(1).to({rotation:19.6,x:252.1,y:272.5},0).wait(1).to({rotation:13.6,x:260,y:273.9},0).wait(1).to({rotation:7.6,x:267.8,y:275.3},0).wait(1).to({rotation:1.6,x:275.7,y:276.8},0).wait(1).to({rotation:-4.4,x:283.4,y:278.2},0).wait(1).to({rotation:-2.7,x:281.5,y:277.9},0).wait(1).to({rotation:-1,x:279.7,y:277.6},0).wait(1).to({rotation:0.8,x:277.7,y:277.4},0).wait(1).to({rotation:2.5,x:275.9,y:277.1},0).wait(1).to({rotation:4.2,x:273.9,y:276.8},0).wait(5).to({_off:true},1).wait(79));

	// dark blue sky
	this.instance_4 = new lib.Symbol8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(276.7,248.9,0.949,0.964,0,0,0,119.8,13.8);
	this.instance_4._off = true;

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#29506C").s().p("Ax8B+Qg3h/AAiIMAlnAAAQgBCNg7CGg");
	this.shape_62.setTransform(276.6,235.9,0.975,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},38).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape_62,p:{scaleX:0.975}}]},1).to({state:[{t:this.shape_62,p:{scaleX:1}}]},60).to({state:[{t:this.shape_62,p:{scaleX:1}}]},4).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({_off:false},0).wait(1).to({regX:120.4,scaleX:0.95,scaleY:1,x:276.9,y:247.6},0).wait(1).to({scaleX:0.96,scaleY:1.04,x:276.7,y:246.4},0).wait(1).to({scaleX:0.96,scaleY:1.07,x:276.5,y:245.1},0).wait(1).to({scaleX:0.97,scaleY:1.11,x:276.2,y:243.9},0).wait(1).to({y:242.8},0).wait(1).to({y:241.7},0).wait(1).to({y:240.5},0).wait(1).to({y:239.4},0).wait(2).to({_off:true},1).wait(68));

	// sun
	this.instance_5 = new lib.Symbol9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(214.3,259.9,1,1,0,0,0,17.8,17.8);
	this.instance_5._off = true;

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DFC75E").s().p("Ah9B+Qg0g0AAhKQAAhJA0g0QA0g0BJAAQBKAAA0A0QA0A0AABJQAABKg0A0Qg0A0hKAAQhJAAg0g0g");
	this.shape_63.setTransform(214.3,137.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},42).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},58).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({_off:false},0).wait(1).to({y:253.5},0).wait(1).to({y:247.1},0).wait(1).to({y:240.7},0).wait(1).to({y:234.4},0).wait(1).to({y:217.2},0).wait(1).to({y:199.4},0).wait(1).to({y:187.6},0).wait(1).to({y:175.9},0).wait(1).to({y:166.4},0).wait(1).to({y:156.4},0).wait(1).to({y:148.9},0).wait(1).to({y:144.4},0).to({_off:true},1).wait(62));

	// white circle
	this.instance_6 = new lib.Tween37("synched",0);
	this.instance_6.parent = this;

	this.instance_7 = new lib.Tween38("synched",0);
	this.instance_7.parent = this;
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween39("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(299,331.8);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween40("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(265,306.4);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween41("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(280.6,295.8);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween42("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(285.7,270);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween43("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(285.7,239.7);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween44("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(285.7,240.5);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween45("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(285.7,207.3);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween46("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(285.7,200);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween47("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(285.7,200);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween48("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(285.7,200);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween49("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(282.1,200);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween50("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(275.5,200);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween51("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(275.5,200);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween52("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(275.5,200);
	this.instance_21._off = true;

	this.instance_22 = new lib.Tween53("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(275.5,200);
	this.instance_22._off = true;

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AogUKQj7hrjCjBQjCjChqj7QhukEAAkdQAAkcBukEQBqj7DCjCQDCjCD7hqQEEhuEcAAQEdAAEEBuQD7BqDCDCQDCDCBqD7QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDBj7BrQkEBukdAAQkcAAkEhugAn9zPQjzBli+C9Qi8C9hlDzQhlDzABEKQgBEKBlD0QBlDzC8C9QC+C9DzBkQDzBlEKAAQEKAAD0hlQDzhkC9i9QC8i9BmjzQBkj0AAkKQAAkKhkjzQhmjzi8i9Qi9i9jzhlQj0hlkKAAQkKAAjzBlg");
	this.shape_64.setTransform(275.5,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},94).to({state:[{t:this.shape_64}]},2).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},1).to({_off:true,x:299,y:331.8},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},1).to({_off:true,x:265,y:306.4},1).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},1).to({_off:true,x:280.6,y:295.8},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({_off:false},1).to({_off:true,x:285.7,y:270},1).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},1).to({_off:true,y:239.7},1).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5).to({_off:false},1).to({_off:true,y:240.5},1).wait(110));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},1).to({_off:true,y:207.3},1).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(7).to({_off:false},1).to({_off:true,y:200},1).wait(108));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(8).to({_off:false},1).to({_off:true},1).wait(107));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(9).to({_off:false},1).to({_off:true},1).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10).to({_off:false},1).to({_off:true,x:282.1},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(11).to({_off:false},1).to({_off:true,x:275.5},1).wait(104));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(12).to({_off:false},1).to({_off:true},1).wait(103));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(13).to({_off:false},1).to({_off:true},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(14).to({_off:false},1).to({_off:true},1).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(15).to({_off:false},1).to({_off:true},1).wait(100));

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