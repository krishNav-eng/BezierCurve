let p0;
let p1;
let p2;
let p3;

function setup() {
    createCanvas(1500, 800);
    p0 = new Vector(0, height/2);
    p1 = new Vector(width, height/2);
    p2 = new Vector(200, 0);
    p3 = new Vector(random(width), random(height))
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(10);
    point(p3.x, p3.y);
    // quadraticBezierCurve(p0, p1, p2);
    strokeWeight(3);
    
    for(let t=0; t<=1.001; t+=.01) {
        let a1 = Lerp(p0, p2, t);
        let a2 = Lerp(p2, p3, t);
        let a3 = Lerp(p3, p1, t);
        let a4 = Lerp(a1, a2, t);
        let a5 = Lerp(a2, a3, t);
        let p = Lerp(a4, a5, t);
        stroke(127);
        strokeWeight(2);
        // line(a1.x, a1.y, a2.x, a2.y);
        // line(a2.x, a2.y, a3.x, a3.y);
        stroke(255);
        strokeWeight(4);
        // line(a4.x, a4.y, a5.x, a5.y);
        strokeWeight(10);
        point(p.x, p.y)
    }
    p2 = new Vector(mouseX, mouseY);
}