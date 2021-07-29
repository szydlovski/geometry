import Point from './Point.js';
export default class Line {
    constructor(p1, p2) {
        this.p1 = Point.fromPointlike(p1);
        this.p2 = Point.fromPointlike(p2);
    }
    get points() {
        return [this.p1, this.p2];
    }
    get length() {
        return Point.distanceBetween(this.p1, this.p2);
    }
    get midpoint() {
        return this.pointAt(0.5);
    }
    translate(x, y) {
        return new Line(this.p1.translate(x, y), this.p2.translate(x, y));
    }
    pointAt(percentage = 0.5) {
        return Point.interpolate(this.p1, this.p2, percentage);
    }
}
//# sourceMappingURL=Line.js.map