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

	this.initialize(mode,startPosition,loop,{});
  console.log(startPosition);
	// stake1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1B1D21").ss(1.5,1).p("AgDADIAHgF");
	this.shape.setTransform(283.2,235.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(105).to({_off:true},1).wait(12));

	// stake2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1B1D21").ss(1.5,1).p("AALAFIgUgJ");
	this.shape_1.setTransform(263.1,235.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(105).to({_off:true},1).wait(12));

	// stake3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1B1D21").ss(1.5,1).p("AAPAIIgdgP");
	this.shape_2.setTransform(225.4,235);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(105).to({_off:true},1).wait(12));

	// tent-orange
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C47C2A").s().p("AjUCIQgHgBgFgGQgEgGACgIIBCjuQADgLALAAIFmAAQAIAAAEAGQAFAGgDAIIhBDuQgEAMgKAAg");
	this.shape_3.setTransform(248.9,222.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(105).to({_off:true},1).wait(12));

	// tentflap2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7BA97").s().p("AAPCCIhHkDIBxEDg");
	this.shape_4.setTransform(277.1,223.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(105).to({_off:true},1).wait(12));

	// white flap
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5E0DA").s().p("AgMBZIgBgDIAQjNIALDvg");
	this.shape_5.setTransform(271.3,224.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(105).to({_off:true},1).wait(12));

	// tentflap1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D7BA97").s().p("AgqCBIBKkBIALEBg");
	this.shape_6.setTransform(268.4,223.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(105).to({_off:true},1).wait(12));

	// tentinside
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#884E14").s().p("AhcB/IBKj8IBvD8g");
	this.shape_7.setTransform(273.5,223.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(105).to({_off:true},1).wait(12));

	// evergreen2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#194319").ss(3.6,1).p("ABMB2QhUghgnhPQgbg2gBhF");
	this.shape_8.setTransform(281.9,201.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#194319").ss(3.6,1).p("AABgVQAAABgBAMQAAAOAAAP");
	this.shape_9.setTransform(274.3,187.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#194319").ss(3.6,1).p("ABRhwQgIBLgdA1QgrBOhRAT");
	this.shape_10.setTransform(266,202.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#194319").ss(3.6,1).p("AABgVQAAACgBAo");
	this.shape_11.setTransform(274.3,187.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#194319").ss(3.6,1).p("AAAAEIAAgH");
	this.shape_12.setTransform(274.2,190.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#194319").ss(3.6,1).p("ABHBfQhZgFgihVQgTguABg1");
	this.shape_13.setTransform(281.4,172.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#194319").ss(3.6,1).p("AhFBVQBFgEAmg/QAZgpAHg9");
	this.shape_14.setTransform(267.1,174.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#194319").ss(3.6,1).p("AAAANIABgZ");
	this.shape_15.setTransform(274.2,164.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#194319").ss(3.6,1).p("AA0A7QgygDgfg4IgWg5");
	this.shape_16.setTransform(279.3,150.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#194319").ss(3.6,1).p("AgzA7QAzgDAeg4QAQgdAGgc");
	this.shape_17.setTransform(268.9,150.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#194319").ss(3.6,1).p("AAAjcIAAG6");
	this.shape_18.setTransform(274.1,213.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#194319").ss(3.6,1).p("AAAh9IAAD6");
	this.shape_19.setTransform(274.1,178.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#194319").ss(3.6,1).p("AAABrIAAjV");
	this.shape_20.setTransform(274.1,155.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},105).to({state:[]},1).wait(12));

	// shorttrunk2
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAjTIAAGn");
	this.shape_21.setTransform(337.8,215.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(105).to({_off:true},1).wait(12));

	// short2
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#194319").s().p("AiRCRQg7g8AAhVQAAhUA7g8QA9g9BUAAQBVAAA9A9QA7A8AABUQAABVg7A8Qg9A9hVAAQhUAAg9g9g");
	this.shape_22.setTransform(337.6,194);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(105).to({_off:true},1).wait(12));

	// recttree
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#75A775").s().p("AhJGmQgRAAgLgLQgLgLAAgQIAAr/QAAgQALgLQALgLARAAICUAAQAQAAALALQALALAAAQIAAL/QAAAQgLALQgLALgQAAg");
	this.shape_23.setTransform(362.7,179.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(105).to({_off:true},1).wait(12));

	// recttrunk
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAg8IAAB5");
	this.shape_24.setTransform(362.7,229.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(105).to({_off:true},1).wait(12));

	// trit2
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#194319").s().p("AhkGRQgHAAgFgGQgFgFABgHIBlsCQACgNANAAQAOAAACANIBlMCQABAHgFAFQgFAGgHAAg");
	this.shape_25.setTransform(298.3,183.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(105).to({_off:true},1).wait(12));

	// tritrunk2
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAg8IAAB5");
	this.shape_26.setTransform(298.4,230.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(105).to({_off:true},1).wait(12));

	// tallroundtrunk
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#1B1D21").ss(3.6,1).p("ABkBEQgyAGgygOQhjgcAAhl");
	this.shape_27.setTransform(307.2,147.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#1B1D21").ss(3.6,1).p("AhaBYIAagFQAggGAcgOQBXguAIho");
	this.shape_28.setTransform(326.5,154.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAnFIAAOL");
	this.shape_29.setTransform(317.4,190.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},105).to({state:[]},1).wait(12));

	// tallround
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#69886B").s().p("Ai2C3QhMhMAAhrQAAhqBMhMQBMhLBqgBQBrABBMBLQBLBMAABqQAABrhLBMQhMBMhrAAQhqAAhMhMg");
	this.shape_30.setTransform(317.2,145.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(105).to({_off:true},1).wait(12));

	// trit1trunk
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#1B1D21").ss(3.6,1).p("AAAkKIAAIV");
	this.shape_31.setTransform(223.9,207.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(105).to({_off:true},1).wait(12));

	// trit1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#194319").s().p("AhkGRQgHAAgFgGQgFgFABgGIBlsDQACgNANAAQAOAAACANIBlMDQABAGgFAFQgFAGgHAAg");
	this.shape_32.setTransform(223.8,156.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(105).to({_off:true},1).wait(12));

	// everygreen1
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#194319").ss(3.6,1).p("ABMB2QhUghgmhPQgbg2gChF");
	this.shape_33.setTransform(220.4,202.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#194319").ss(3.6,1).p("AABgUQgCAKABAf");
	this.shape_34.setTransform(212.9,188.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#194319").ss(3.6,1).p("ABRhwQgIBLgdA1QgrBOhRAT");
	this.shape_35.setTransform(204.6,203.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#194319").ss(3.6,1).p("AABgUQAAACgBAn");
	this.shape_36.setTransform(212.9,188.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#194319").ss(3.6,1).p("AAAAEIAAgI");
	this.shape_37.setTransform(212.8,191.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#194319").ss(3.6,1).p("ABHBfQhZgEgihWQgUguACg1");
	this.shape_38.setTransform(220,173.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#194319").ss(3.6,1).p("AhFBVQBFgDAmhAQAZgpAHg9");
	this.shape_39.setTransform(205.7,175.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#194319").ss(3.6,1).p("AAAANQABgPAAgK");
	this.shape_40.setTransform(212.8,165.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#194319").ss(3.6,1).p("AA0A6QgzgDgfg4IgVg5");
	this.shape_41.setTransform(217.9,151.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#194319").ss(3.6,1).p("AgzA6QAzgDAeg4QAQgdAGgc");
	this.shape_42.setTransform(207.5,151.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#194319").ss(3.6,1).p("AAAjdIAAG6");
	this.shape_43.setTransform(212.7,214);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#194319").ss(3.6,1).p("AAAh9IAAD7");
	this.shape_44.setTransform(212.7,179.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#194319").ss(3.6,1).p("AAABrIAAjV");
	this.shape_45.setTransform(212.7,156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},105).to({state:[]},1).wait(12));

	// rt1trunk
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#1B1D21").ss(2.9,1).p("AAAjTIAAGn");
	this.shape_46.setTransform(199.6,214.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(105).to({_off:true},1).wait(12));

	// roundt1
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#69886B").s().p("AiRCRQg7g8AAhVQAAhUA7g8QA9g9BUAAQBVAAA9A9QA7A8AABUQAABVg7A8Qg9A9hVAAQhUAAg9g9g");
	this.shape_47.setTransform(199.4,193.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(105).to({_off:true},1).wait(12));

	// sun
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DFC75E").s().p("Ah9B+Qg0g0AAhKQAAhJA0g0QA0g0BJAAQBKAAA0A0QA0A0AABJQAABKg0A0Qg0A0hKAAQhJAAg0g0g");
	this.shape_48.setTransform(214.3,137.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(105).to({_off:true},1).wait(12));

	// ground
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(310.4,272,0.999,0.999,-25,0,0,116.2,48.6);
	this.instance._off = true;

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#69886B").s().p("ArjDUQlCjvhzl7QgGgSAMgQQAMgPATAAMAjoAACQATAAALAPQAMAPgGASQg7DBhwCdIgBAAQgOAKgHAIIgBAMIgFAHIgYAUIAAAJQghAngkAkIgkAjQgzAwg7ArQlID0mbAAQmbAAlIj0g");
	this.shape_49.setTransform(276.4,281);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#69886B").s().p("ArjDUQlCjvhzl7QgGgSAMgQQAMgPATAAMAjoAACQATAAALAPQAMAPgGASQhzF7lDDuQlID0mbAAQmbAAlIj0g");
	this.shape_50.setTransform(276.4,281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},17).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},79).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).wait(1).to({regX:117.9,regY:45.6,scaleX:1,scaleY:1,rotation:-14.9,x:297.5,y:268.9},0).wait(1).to({rotation:-4.8,x:284.2,y:269.3},0).wait(1).to({rotation:5.4,x:271,y:269.9},0).wait(1).to({rotation:15.5,x:257.6,y:270.5},0).wait(1).to({rotation:25.7,x:244.2,y:271.1},0).wait(1).to({rotation:19.6,x:252.1,y:272.5},0).wait(1).to({rotation:13.6,x:260,y:273.9},0).wait(1).to({rotation:7.6,x:267.8,y:275.3},0).wait(1).to({rotation:1.6,x:275.6,y:276.8},0).wait(1).to({rotation:-4.4,x:283.4,y:278.2},0).wait(1).to({rotation:-2.7,x:281.5,y:277.9},0).wait(1).to({rotation:-1,x:279.7,y:277.7},0).wait(1).to({rotation:0.8,x:277.7,y:277.4},0).wait(1).to({rotation:2.5,x:275.8,y:277.1},0).wait(1).to({rotation:4.2,x:273.9,y:276.9},0).wait(5).to({_off:true},1).wait(80));

	// dark blue sky
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#29506C").s().p("Ax8B+Qg3h/AAiIMAlnAAAQgBCNg7CGg");
	this.shape_51.setTransform(276.6,235.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(105).to({_off:true},1).wait(12));

	// white circle
	this.instance_1 = new lib.Tween37("synched",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.Tween38("synched",0);
	this.instance_2.parent = this;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween39("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(299,331.8);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween40("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(265,306.4);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween41("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(280.6,295.8);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween42("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(285.7,270);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween43("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(285.7,239.7);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween44("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(285.7,240.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween45("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(285.7,207.3);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween46("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(285.7,200);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween47("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(285.7,200);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween48("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(285.7,200);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween49("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(282.1,200);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween50("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(275.5,200);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween51("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(275.5,200);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween52("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(275.5,200);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween53("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(275.5,200);
	this.instance_17._off = true;

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AogUKQj7hrjCjBQjCjChqj7QhukEAAkdQAAkcBukEQBqj7DCjCQDCjCD7hqQEEhuEcAAQEdAAEEBuQD7BqDCDCQDCDCBqD7QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDBj7BrQkEBukdAAQkcAAkEhugAn9zPQjzBli+C9Qi8C9hlDzQhlDzABEKQgBEKBlD0QBlDzC8C9QC+C9DzBkQDzBlEKAAQEKAAD0hlQDzhkC9i9QC8i9BmjzQBkj0AAkKQAAkKhkjzQhmjzi8i9Qi9i9jzhlQj0hlkKAAQkKAAjzBlg");
	this.shape_52.setTransform(275.5,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},90).to({state:[]},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},1).to({_off:true,x:299,y:331.8},1).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},1).to({_off:true,x:265,y:306.4},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},1).to({_off:true,x:280.6,y:295.8},1).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},1).to({_off:true,x:285.7,y:270},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},1).to({_off:true,y:239.7},1).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},1).to({_off:true,y:240.5},1).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},1).to({_off:true,y:207.3},1).wait(110));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7).to({_off:false},1).to({_off:true,y:200},1).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},1).to({_off:true},1).wait(108));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},1).to({_off:true},1).wait(107));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10).to({_off:false},1).to({_off:true,x:282.1},1).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(11).to({_off:false},1).to({_off:true,x:275.5},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(12).to({_off:false},1).to({_off:true},1).wait(104));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(13).to({_off:false},1).to({_off:true},1).wait(103));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(14).to({_off:false},1).to({_off:true},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(15).to({_off:false},1).to({_off:true},1).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(431.3,316.2,240.7,133.5);
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