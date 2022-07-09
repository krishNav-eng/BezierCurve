function Lerp(p0, p1, t) {
    return new Vector(p0.x + t*(p1.x - p0.x), p0.y + t*(p1.y - p0.y));
}

function linearBezierCurve(p0, p1) {
    beginShape();
    for(let t=0; t <= 1; t+=0.01) {
        let p = Lerp(p0, p1, t);
        vertex(p.x, p.y);
    }
    endShape();
}

function quadraticBezierCurve(p0, p1, p2) {
    beginShape();
    for(let t=0; t <= 1; t+=0.01) {
        let p = Lerp(Lerp(p0, p1, t), Lerp(p1, p2, t), t);
        point(p.x, p.y);
    }
    endShape();
}