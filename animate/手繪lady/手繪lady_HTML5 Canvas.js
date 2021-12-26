(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"手繪lady_HTML5 Canvas_atlas_1", frames: [[547,1855,54,128],[0,1855,312,103],[1087,1419,299,231],[314,1855,231,138],[1087,1652,192,322],[625,1419,180,465],[1388,1419,153,408],[807,1419,278,280],[0,1419,623,434],[0,0,1890,1417]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(ss["手繪lady_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["手繪lady_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["手繪lady_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["手繪lady_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["手繪lady_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["手繪lady_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["手繪lady_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["手繪lady_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["手繪lady_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["手繪lady_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgjbAalMAAAg1JMBG3AAAMAAAA1Jg");
	mask.setTransform(226.8,170.05);

	// 圖層_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.24,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,453.6,340.1), null);


(lib.手握筆 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 手握筆
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(226.8,170.1,1,1,0,0,0,226.8,170.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.手握筆, new cjs.Rectangle(0,0,453.6,340.1), null);


// stage content:
(lib.手繪lady_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pen
	this.instance = new lib.手握筆();
	this.instance.setTransform(180.5,269.15,1,1,0,0,0,226.8,170.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:172.5,y:243.65},0).wait(1).to({y:214.15},0).wait(1).to({x:184.5,y:188.15},0).wait(1).to({x:213.65,y:174.95},0).wait(1).to({x:239.15,y:170.1},0).wait(1).to({x:266.15,y:183.1},0).wait(1).to({x:285.35,y:200.6},0).wait(1).to({x:302.35,y:220.6},0).wait(1).to({x:319.15,y:245.1},0).wait(1).to({x:334.65,y:266.1},0).wait(1).to({x:351.15,y:289.6},0).wait(1).to({x:369.45,y:310.6},0).wait(1).to({x:384.95,y:331.1},0).wait(1).to({x:402.15,y:347.1},0).wait(1).to({x:426.65,y:367.05},0).wait(1).to({x:448.65,y:380.05},0).wait(1).to({x:476.65,y:363.45},0).wait(1).to({x:465.15,y:337.35},0).wait(1).to({x:446.15,y:312.8},0).wait(1).to({x:427.25,y:288.45},0).wait(1).to({x:304.25,y:180.45},0).wait(1).to({x:319.25,y:170.1},0).wait(1).to({x:337.75,y:162.1},0).wait(1).to({x:355.25},0).wait(1).to({x:372.75},0).wait(1).to({x:387.75,y:170.1},0).wait(1).to({x:398.75,y:177.1},0).wait(1).to({x:413.75,y:186.6},0).wait(1).to({x:424.75,y:200.1},0).wait(1).to({y:216.6},0).wait(1).to({y:235.1},0).wait(1).to({y:252.1},0).wait(1).to({y:268.2},0).wait(1).to({x:418.75,y:285.45},0).wait(1).to({x:406.25,y:290.3},0).wait(1).to({x:392.75,y:278.45},0).wait(1).to({x:376.25,y:268.2},0).wait(1).to({x:360.75,y:257.65},0).wait(1).to({x:345.75,y:245.15},0).wait(1).to({x:297.75,y:255.15},0).wait(1).to({x:271.75,y:285.15},0).wait(1).to({x:239.8,y:299.15},0).wait(1).to({y:326.15},0).wait(1).to({x:264.75,y:358.15},0).wait(1).to({x:254.75,y:392.15},0).wait(1).to({x:269.7,y:433.15},0).wait(1).to({x:259.7,y:242.2},0).wait(1).to({x:226.8,y:252.2},0).wait(1).to({x:203.8,y:279.2},0).wait(1).to({y:309.2},0).wait(1).to({x:221.8,y:335.75},0).wait(1).to({y:358.7},0).wait(1).to({y:388.7},0).wait(1).to({x:233.8,y:418.75},0).wait(1).to({x:247.2,y:443.75},0).wait(1).to({x:262.2,y:475.75},0).wait(1).to({x:284.2,y:387.75},0).wait(1).to({y:431.1},0).wait(1).to({x:261.2,y:462.1},0).wait(1).to({x:222.25,y:479.6},0).wait(1).to({x:188.25,y:507.6},0).wait(1).to({x:378.2,y:362.65},0).wait(1).to({x:352.2,y:382.6},0).wait(1).to({x:313.2},0).wait(1).to({x:286.2,y:352.6},0).wait(1).to({x:266.2,y:321.65},0).wait(1).to({x:373.2,y:391.6},0).wait(1).to({x:390.2,y:419.6},0).wait(1).to({x:422.2},0).wait(1).to({x:457.2},0).wait(1).to({x:493.2,y:438.1},0).wait(1).to({x:520.2,y:484.1},0).wait(1).to({x:371.2,y:441.1},0).wait(1).to({x:333.2,y:462.1},0).wait(1).to({x:297.2,y:475.1},0).wait(1).to({x:253.2,y:486.1},0).wait(1).to({x:332.2,y:341.6},0).wait(1).to({x:344.7},0).wait(1).to({x:355.7,y:346.6},0).wait(1).to({x:364.2,y:352.1},0).wait(1).to({x:335.2,y:357.1},0).wait(1).to({x:346.2},0).wait(1).to({x:355.2,y:351.6},0).wait(1).to({x:270.7,y:340.1},0).wait(1).to({x:408.2,y:379.1},0).wait(1).to({x:420.2,y:391.1},0).wait(1).to({x:415.2,y:409.6},0).wait(1).to({y:430.6},0).wait(12));

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_1 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_2 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_3 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_4 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_5 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_6 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_7 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_8 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_9 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_10 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_11 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_12 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_13 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_14 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_15 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_16 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_17 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_18 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_19 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");
	var mask_graphics_20 = new cjs.Graphics().p("AEFQbQgygzAAhHQAAhGAygzQAzgyBHAAQBHAAAyAyQAyAzAABGQAABHgyAzQgyAyhHAAQhHAAgzgyg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_1,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_2,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_3,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_4,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_5,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_6,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_7,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_8,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_9,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_10,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_11,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_12,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_13,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_14,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_15,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_16,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_17,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_18,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_19,x:55.425,y:110.1}).wait(1).to({graphics:mask_graphics_20,x:55.425,y:110.1}).wait(80));

	// lady01
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// 遮色片02 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_21 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_22 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_23 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_24 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_25 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_26 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_27 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_28 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_29 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_30 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_31 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_32 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_33 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_34 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_35 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_36 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_37 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_38 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");
	var mask_1_graphics_39 = new cjs.Graphics().p("ANqI7QgfgfAAgrQAAgrAfgfQAegeArAAQArAAAfAeQAeAfAAArQAAArgeAfQgfAegrAAQgrAAgegeg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(21).to({graphics:mask_1_graphics_21,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_22,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_23,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_24,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_25,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_26,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_27,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_28,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_29,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_30,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_31,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_32,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_33,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_34,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_35,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_36,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_37,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_38,x:105.125,y:60.1}).wait(1).to({graphics:mask_1_graphics_39,x:105.125,y:60.1}).wait(61));

	// lady02
	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(195.3,77.3,0.5,0.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).wait(79));

	// 遮色片03 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_40 = new cjs.Graphics().p("ALhMtQhDhDAAhgQAAhfBDhEQBDhDBgAAQBgAABCBDQBEBEAABfQAABghEBDQhCBDhgAAQhgAAhDhDg");
	var mask_2_graphics_41 = new cjs.Graphics().p("ALhMtQhDhDAAhgQAAhfBDhEQBDhDBgAAQBgAABCBDQBEBEAABfQAABghEBDQhCBDhgAAQhgAAhDhDg");
	var mask_2_graphics_42 = new cjs.Graphics().p("ALhMtQhDhDAAhgQAAhfBDhEQBDhDBgAAQBgAABCBDQBEBEAABfQAABghEBDQhCBDhgAAQhgAAhDhDg");
	var mask_2_graphics_43 = new cjs.Graphics().p("ALhMtQhDhDAAhgQAAhfBDhEQBDhDBgAAQBgAABCBDQBEBEAABfQAABghEBDQhCBDhgAAQhgAAhDhDg");
	var mask_2_graphics_44 = new cjs.Graphics().p("ALhMtQhDhDAAhgQAAhfBDhEQBDhDBgAAQBgAABCBDQBEBEAABfQAABghEBDQhCBDhgAAQhgAAhDhDg");
	var mask_2_graphics_45 = new cjs.Graphics().p("ALhMtQhDhDAAhgQAAhfBDhEQBDhDBgAAQBgAABCBDQBEBEAABfQAABghEBDQhCBDhgAAQhgAAhDhDg");
	var mask_2_graphics_46 = new cjs.Graphics().p("ALhMtQhDhDAAhgQAAhfBDhEQBDhDBgAAQBgAABCBDQBEBEAABfQAABghEBDQhCBDhgAAQhgAAhDhDg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_2_graphics_40,x:113,y:88.025}).wait(1).to({graphics:mask_2_graphics_41,x:113,y:88.025}).wait(1).to({graphics:mask_2_graphics_42,x:113,y:88.025}).wait(1).to({graphics:mask_2_graphics_43,x:113,y:88.025}).wait(1).to({graphics:mask_2_graphics_44,x:113,y:88.025}).wait(1).to({graphics:mask_2_graphics_45,x:113,y:88.025}).wait(1).to({graphics:mask_2_graphics_46,x:113,y:88.025}).wait(54));

	// lady03
	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(128,146.85,0.5,0.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).wait(60));

	// 遮色片04 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_47 = new cjs.Graphics().p("AKmNeQg4g5gBhQQABhQA4g5QA5g4BQgBQBQABA5A4QA4A5AABQQAABQg4A5Qg5A4hQAAQhQAAg5g4g");
	var mask_3_graphics_48 = new cjs.Graphics().p("AKmNeQg4g5gBhQQABhQA4g5QA5g4BQgBQBQABA5A4QA4A5AABQQAABQg4A5Qg5A4hQAAQhQAAg5g4g");
	var mask_3_graphics_49 = new cjs.Graphics().p("AKmNeQg4g5gBhQQABhQA4g5QA5g4BQgBQBQABA5A4QA4A5AABQQAABQg4A5Qg5A4hQAAQhQAAg5g4g");
	var mask_3_graphics_50 = new cjs.Graphics().p("AKmNeQg4g5gBhQQABhQA4g5QA5g4BQgBQBQABA5A4QA4A5AABQQAABQg4A5Qg5A4hQAAQhQAAg5g4g");
	var mask_3_graphics_51 = new cjs.Graphics().p("AKmNeQg4g5gBhQQABhQA4g5QA5g4BQgBQBQABA5A4QA4A5AABQQAABQg4A5Qg5A4hQAAQhQAAg5g4g");
	var mask_3_graphics_52 = new cjs.Graphics().p("AKmNeQg4g5gBhQQABhQA4g5QA5g4BQgBQBQABA5A4QA4A5AABQQAABQg4A5Qg5A4hQAAQhQAAg5g4g");
	var mask_3_graphics_53 = new cjs.Graphics().p("AKmNeQg4g5gBhQQABhQA4g5QA5g4BQgBQBQABA5A4QA4A5AABQQAABQg4A5Qg5A4hQAAQhQAAg5g4g");
	var mask_3_graphics_54 = new cjs.Graphics().p("AKmNeQg4g5gBhQQABhQA4g5QA5g4BQgBQBQABA5A4QA4A5AABQQAABQg4A5Qg5A4hQAAQhQAAg5g4g");
	var mask_3_graphics_55 = new cjs.Graphics().p("AKmNeQg4g5gBhQQABhQA4g5QA5g4BQgBQBQABA5A4QA4A5AABQQAABQg4A5Qg5A4hQAAQhQAAg5g4g");
	var mask_3_graphics_56 = new cjs.Graphics().p("AKmNeQg4g5gBhQQABhQA4g5QA5g4BQgBQBQABA5A4QA4A5AABQQAABQg4A5Qg5A4hQAAQhQAAg5g4g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_3_graphics_47,x:100.85,y:91.85}).wait(1).to({graphics:mask_3_graphics_48,x:100.85,y:91.85}).wait(1).to({graphics:mask_3_graphics_49,x:100.85,y:91.85}).wait(1).to({graphics:mask_3_graphics_50,x:100.85,y:91.85}).wait(1).to({graphics:mask_3_graphics_51,x:100.85,y:91.85}).wait(1).to({graphics:mask_3_graphics_52,x:100.85,y:91.85}).wait(1).to({graphics:mask_3_graphics_53,x:100.85,y:91.85}).wait(1).to({graphics:mask_3_graphics_54,x:100.85,y:91.85}).wait(1).to({graphics:mask_3_graphics_55,x:100.85,y:91.85}).wait(1).to({graphics:mask_3_graphics_56,x:100.85,y:91.85}).wait(44));

	// lady04
	this.instance_4 = new lib.CachedBmp_4();
	this.instance_4.setTransform(99.25,158.25,0.5,0.5);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).wait(53));

	// 遮色片05 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_57 = new cjs.Graphics().p("AJrXEQhHhGAAhlQAAhlBHhGQBHhHBkAAQBlAABHBHQBHBGAABlQAABlhHBGQhHBHhlABQhkgBhHhHg");
	var mask_4_graphics_58 = new cjs.Graphics().p("AJrXEQhHhGAAhlQAAhlBHhGQBHhHBkAAQBlAABHBHQBHBGAABlQAABlhHBGQhHBHhlABQhkgBhHhHg");
	var mask_4_graphics_59 = new cjs.Graphics().p("AJrXEQhHhGAAhlQAAhlBHhGQBHhHBkAAQBlAABHBHQBHBGAABlQAABlhHBGQhHBHhlABQhkgBhHhHg");
	var mask_4_graphics_60 = new cjs.Graphics().p("AJrXEQhHhGAAhlQAAhlBHhGQBHhHBkAAQBlAABHBHQBHBGAABlQAABlhHBGQhHBHhlABQhkgBhHhHg");
	var mask_4_graphics_61 = new cjs.Graphics().p("AJrXEQhHhGAAhlQAAhlBHhGQBHhHBkAAQBlAABHBHQBHBGAABlQAABlhHBGQhHBHhlABQhkgBhHhHg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(57).to({graphics:mask_4_graphics_57,x:103.275,y:154.75}).wait(1).to({graphics:mask_4_graphics_58,x:103.275,y:154.75}).wait(1).to({graphics:mask_4_graphics_59,x:103.275,y:154.75}).wait(1).to({graphics:mask_4_graphics_60,x:103.275,y:154.75}).wait(1).to({graphics:mask_4_graphics_61,x:103.275,y:154.75}).wait(39));

	// lady05
	this.instance_5 = new lib.CachedBmp_5();
	this.instance_5.setTransform(96.75,268.65,0.5,0.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(57).to({_off:false},0).wait(43));

	// 遮色片06 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_62 = new cjs.Graphics().p("ASMVRQhDhDAAheQAAheBDhDQBDhCBeAAQBeAABDBCQBDBDAABeQAABehDBDQhDBDheAAQheAAhDhDg");
	var mask_5_graphics_63 = new cjs.Graphics().p("ASMVRQhDhDAAheQAAheBDhDQBDhCBeAAQBeAABDBCQBDBDAABeQAABehDBDQhDBDheAAQheAAhDhDg");
	var mask_5_graphics_64 = new cjs.Graphics().p("ASMVRQhDhDAAheQAAheBDhDQBDhCBeAAQBeAABDBCQBDBDAABeQAABehDBDQhDBDheAAQheAAhDhDg");
	var mask_5_graphics_65 = new cjs.Graphics().p("ASMVRQhDhDAAheQAAheBDhDQBDhCBeAAQBeAABDBCQBDBDAABeQAABehDBDQhDBDheAAQheAAhDhDg");
	var mask_5_graphics_66 = new cjs.Graphics().p("ASMVRQhDhDAAheQAAheBDhDQBDhCBeAAQBeAABDBCQBDBDAABeQAABehDBDQhDBDheAAQheAAhDhDg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_5_graphics_62,x:155.25,y:142.775}).wait(1).to({graphics:mask_5_graphics_63,x:155.25,y:142.775}).wait(1).to({graphics:mask_5_graphics_64,x:155.25,y:142.775}).wait(1).to({graphics:mask_5_graphics_65,x:155.25,y:142.775}).wait(1).to({graphics:mask_5_graphics_66,x:155.25,y:142.775}).wait(34));

	// lady06
	this.instance_6 = new lib.CachedBmp_6();
	this.instance_6.setTransform(179.55,246.75,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(62).to({_off:false},0).wait(38));

	// 遮色片07 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_67 = new cjs.Graphics().p("ARiXfQhDhEAAhfQAAhgBDhDQBEhDBfAAQBgAABDBDQBDBDAABgQAABfhDBEQhDBDhgAAQhfAAhEhDg");
	var mask_6_graphics_68 = new cjs.Graphics().p("ARiXfQhDhEAAhfQAAhgBDhDQBEhDBfAAQBgAABDBDQBDBDAABgQAABfhDBEQhDBDhgAAQhfAAhEhDg");
	var mask_6_graphics_69 = new cjs.Graphics().p("ARiXfQhDhEAAhfQAAhgBDhDQBEhDBfAAQBgAABDBDQBDBDAABgQAABfhDBEQhDBDhgAAQhfAAhEhDg");
	var mask_6_graphics_70 = new cjs.Graphics().p("ARiXfQhDhEAAhfQAAhgBDhDQBEhDBfAAQBgAABDBDQBDBDAABgQAABfhDBEQhDBDhgAAQhfAAhEhDg");
	var mask_6_graphics_71 = new cjs.Graphics().p("ARiXfQhDhEAAhfQAAhgBDhDQBEhDBfAAQBgAABDBDQBDBDAABgQAABfhDBEQhDBDhgAAQhfAAhEhDg");
	var mask_6_graphics_72 = new cjs.Graphics().p("ARiXfQhDhEAAhfQAAhgBDhDQBEhDBfAAQBgAABDBDQBDBDAABgQAABfhDBEQhDBDhgAAQhfAAhEhDg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(67).to({graphics:mask_6_graphics_67,x:151.525,y:157}).wait(1).to({graphics:mask_6_graphics_68,x:151.525,y:157}).wait(1).to({graphics:mask_6_graphics_69,x:151.525,y:157}).wait(1).to({graphics:mask_6_graphics_70,x:151.525,y:157}).wait(1).to({graphics:mask_6_graphics_71,x:151.525,y:157}).wait(1).to({graphics:mask_6_graphics_72,x:151.525,y:157}).wait(28));

	// lady07
	this.instance_7 = new lib.CachedBmp_7();
	this.instance_7.setTransform(270.45,282.15,0.5,0.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({_off:false},0).wait(33));

	// 遮色片08 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_73 = new cjs.Graphics().p("ATAcqQhAhAAAhaQAAhaBAhAQBAg/BaAAQBaAABAA/QA/BAABBaQgBBag/BAQhABAhaAAQhaAAhAhAg");
	var mask_7_graphics_74 = new cjs.Graphics().p("ATAcqQhAhAAAhaQAAhaBAhAQBAg/BaAAQBaAABAA/QA/BAABBaQgBBag/BAQhABAhaAAQhaAAhAhAg");
	var mask_7_graphics_75 = new cjs.Graphics().p("ATAcqQhAhAAAhaQAAhaBAhAQBAg/BaAAQBaAABAA/QA/BAABBaQgBBag/BAQhABAhaAAQhaAAhAhAg");
	var mask_7_graphics_76 = new cjs.Graphics().p("ATAcqQhAhAAAhaQAAhaBAhAQBAg/BaAAQBaAABAA/QA/BAABBaQgBBag/BAQhABAhaAAQhaAAhAhAg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(73).to({graphics:mask_7_graphics_73,x:158.75,y:189.775}).wait(1).to({graphics:mask_7_graphics_74,x:158.75,y:189.775}).wait(1).to({graphics:mask_7_graphics_75,x:158.75,y:189.775}).wait(1).to({graphics:mask_7_graphics_76,x:158.75,y:189.775}).wait(24));

	// lady08
	this.instance_8 = new lib.CachedBmp_8();
	this.instance_8.setTransform(153.35,351.75,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(73).to({_off:false},0).wait(27));

	// 遮色片09 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_77 = new cjs.Graphics().p("AQfU7QgVgVAAgeQAAgeAVgVQAVgVAeAAQAeAAAVAVQAVAVAAAeQAAAegVAVQgVAVgeAAQgeAAgVgVg");
	var mask_8_graphics_78 = new cjs.Graphics().p("AQfU7QgVgVAAgeQAAgeAVgVQAVgVAeAAQAeAAAVAVQAVAVAAAeQAAAegVAVQgVAVgeAAQgeAAgVgVg");
	var mask_8_graphics_79 = new cjs.Graphics().p("AQfU7QgVgVAAgeQAAgeAVgVQAVgVAeAAQAeAAAVAVQAVAVAAAeQAAAegVAVQgVAVgeAAQgeAAgVgVg");
	var mask_8_graphics_80 = new cjs.Graphics().p("AQfU7QgVgVAAgeQAAgeAVgVQAVgVAeAAQAeAAAVAVQAVAVAAAeQAAAegVAVQgVAVgeAAQgeAAgVgVg");
	var mask_8_graphics_81 = new cjs.Graphics().p("AQfU7QgVgVAAgeQAAgeAVgVQAVgVAeAAQAeAAAVAVQAVAVAAAeQAAAegVAVQgVAVgeAAQgeAAgVgVg");
	var mask_8_graphics_82 = new cjs.Graphics().p("AQfU7QgVgVAAgeQAAgeAVgVQAVgVAeAAQAeAAAVAVQAVAVAAAeQAAAegVAVQgVAVgeAAQgeAAgVgVg");
	var mask_8_graphics_83 = new cjs.Graphics().p("AQfU7QgVgVAAgeQAAgeAVgVQAVgVAeAAQAeAAAVAVQAVAVAAAeQAAAegVAVQgVAVgeAAQgeAAgVgVg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(77).to({graphics:mask_8_graphics_77,x:117.8,y:136.025}).wait(1).to({graphics:mask_8_graphics_78,x:117.8,y:136.025}).wait(1).to({graphics:mask_8_graphics_79,x:117.8,y:136.025}).wait(1).to({graphics:mask_8_graphics_80,x:117.8,y:136.025}).wait(1).to({graphics:mask_8_graphics_81,x:117.8,y:136.025}).wait(1).to({graphics:mask_8_graphics_82,x:117.8,y:136.025}).wait(1).to({graphics:mask_8_graphics_83,x:117.8,y:136.025}).wait(17));

	// lady09
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("AhhBNQgWgWgpghIgsgjQgJgJACgHQABgEAGgDQAxgVAmgUQBKgoAjAAQAGABATAHQATAIAKAAQADAAAXgIQASgGARAHQAZALAiAmQAmArAHAmQAEAEgHAIIgWAWIgkAmQgdAYggAAQiSAAgogpgAhWgdIg0AKQAYAAA7ARQBEATANACQAYAEAsgEIA8gGQgwgvgMABQglAEgWAAQgKAAgQgFQgPgFgLgBQgOAAg3ALg");
	this.shape.setTransform(243.4226,270.45);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(77).to({_off:false},0).wait(23));

	// 遮色片10 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_84 = new cjs.Graphics().p("AKQU5QgzgyAAhIQAAhHAzgzQAygyBIAAQBHAAAzAyQAyAzAABHQAABIgyAyQgzAzhHAAQhIAAgygzg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(84).to({graphics:mask_9_graphics_84,x:95.025,y:138.775}).wait(16));

	// lady10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape_1.setTransform(170.825,260.625);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(84).to({_off:false},0).wait(16));

	// 遮色片11 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_85 = new cjs.Graphics().p("AV4W+QgognAAg4QAAg4AogoQAngnA4AAQA4AAAoAnQAnAoAAA4QAAA4gnAnQgoAog4AAQg4AAgngog");
	var mask_10_graphics_86 = new cjs.Graphics().p("AV4W+QgognAAg4QAAg4AogoQAngnA4AAQA4AAAoAnQAnAoAAA4QAAA4gnAnQgoAog4AAQg4AAgngog");
	var mask_10_graphics_87 = new cjs.Graphics().p("AV4W+QgognAAg4QAAg4AogoQAngnA4AAQA4AAAoAnQAnAoAAA4QAAA4gnAnQgoAog4AAQg4AAgngog");
	var mask_10_graphics_88 = new cjs.Graphics().p("AV4W+QgognAAg4QAAg4AogoQAngnA4AAQA4AAAoAnQAnAoAAA4QAAA4gnAnQgoAog4AAQg4AAgngog");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(85).to({graphics:mask_10_graphics_85,x:163.025,y:150.975}).wait(1).to({graphics:mask_10_graphics_86,x:163.025,y:150.975}).wait(1).to({graphics:mask_10_graphics_87,x:163.025,y:150.975}).wait(1).to({graphics:mask_10_graphics_88,x:163.025,y:150.975}).wait(12));

	// lady11
	this.instance_9 = new lib.CachedBmp_9();
	this.instance_9.setTransform(302.3,281.05,0.5,0.5);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(85).to({_off:false},0).wait(15));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(182.7,245,564.3,432.6);
// library properties:
lib.properties = {
	id: '9E73C4D62D1B1A46B742AF18B90F53B1',
	width: 474,
	height: 506,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/手繪lady_HTML5 Canvas_atlas_1.png", id:"手繪lady_HTML5 Canvas_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9E73C4D62D1B1A46B742AF18B90F53B1'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;