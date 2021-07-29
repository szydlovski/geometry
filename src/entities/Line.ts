import { Pointlike } from '../Types.js';
import Point from './Point.js';
export default class Line {
	public p1: Point;
	public p2: Point;
	constructor(p1: Pointlike, p2: Pointlike) {
		this.p1 = Point.fromPointlike(p1);
		this.p2 = Point.fromPointlike(p2);
	}
	get points(): [Point, Point] {
		return [this.p1, this.p2];
	}
	get length() {
		return Point.distanceBetween(this.p1, this.p2);
	}
	get midpoint() {
		return this.pointAt(0.5);
	}
	translate(x: number, y: number) {
		return new Line(this.p1.translate(x, y), this.p2.translate(x, y));
	}
	pointAt(percentage = 0.5) {
		return Point.interpolate(this.p1, this.p2, percentage);
	}
}

