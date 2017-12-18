	/* This is the JavaScript program to run a clock in p5.js*/

	function setup() {
		createCanvas(390, 390);
		angleMode(DEGREES);
	}


	function draw() {
		background(255,15);
		translate(200, 200);
		rotate(-90);
	  let hr = hour();
		let mn = minute();
		let sc = second();

		strokeWeight(4);
		stroke(82, 242, 202);
		noFill();
		let secondAngle = map(sc, 0, 60, 0, 360);
		//arc(0, 0, 300, 300, 0, secondAngle);
		stroke(247, 232, 27);
		let minuteAngle = map(mn, 0, 60, 0, 360);
			//arc(0, 0, 280, 280, 0, minuteAngle);
		stroke(216, 65, 65);
		let hourAngle = map(hr % 12, 0, 12, 0, 360);
		//arc(0, 0, 260, 260, 0, hourAngle);
		strokeWeight(5.5);
		stroke(45, 132, 198);
		noFill();
		let end1 = map (sc, 0, 59, 0, 360);
		arc(0,0,300,300,0, end1);

		stroke(247, 232, 27);
		noFill();
		let end2 = map (mn, 0, 59, 0, 360);
		arc(0,0,280,280,0, end2);

		stroke(216, 65, 65);
		let end3 = map (hr, 0, 11, 0, 360);
		arc(0,0,260,260,0, end3);

		push();
		rotate(secondAngle);
		stroke(45, 132, 198);
		line(0, 0, 100, 0);
		pop();

		push();
		rotate(minuteAngle);
		stroke(247, 232, 27);
		line(0, 0, 75, 0);
		pop();

		push();
		rotate(hourAngle);
		stroke(216, 65, 65);
		line(0, 0, 50, 0);
		pop();

		stroke(255);
		point(0, 0);

	}
