import { Pointlike } from '../Types.js';
import { interpolateValue } from '../util.js';
import Angle from './Angle.js';
import Line from './Line.js';

export default class Point {
	constructor(public readonly x: number, public readonly y: number) { }
	get coordinates(): [number, number] {
		return [this.x, this.y];
	}
	isSameAs(point: Pointlike): boolean {
		if (point.x === this.x && point.y === this.y) {
			return true;
		} else {
			return false;
		}
	}
	rotate(pivot: Pointlike, angleOrRadians: Angle | number) {
		const dx = this.x - pivot.x;
		const dy = this.y - pivot.y;
		const distance = Math.sqrt(dx * dx + dy * dy);
		const angleValue = angleOrRadians instanceof Angle ? angleOrRadians.radians : angleOrRadians;
		const radians = angleValue + Math.atan2(dy, dx);
		return new Point(
			pivot.x + distance * Math.cos(radians),
			pivot.y + distance * Math.sin(radians)
		);
	}
	translate(x: number, y: number) {
		return new Point(this.x + x, this.y + y);
	}
	distanceTo(point: Pointlike) {
		return Point.distanceBetween(this, point);
	}
	liesOnSegment(segment: Line, epsilon = 0.01) {
		return this.distanceFromSegment(segment) < epsilon;
	}
	distanceFromSegment(segment: Line) {
		const { p1, p2 } = segment;
		return Math.abs(
			(p2.y-p1.y) * this.x
			- (p2.x - p1.x) * this.y
			+ (p2.x * p1.y)
			- (p2.y * p1.x)
		)/Math.sqrt(segment.length);
	}
	static distanceBetween(p1: Pointlike, p2: Pointlike) {
		return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
	}
	static fromMidpoint(p1: Pointlike, p2: Pointlike) {
		return new Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
	}
	static fromPointlike(point: Pointlike) {
		if (point instanceof Point) {
			return point;
		} else {
			return new Point(point.x, point.y);
		}
	}
	static interpolate(p1: Pointlike, p2: Pointlike, percentage = 0.5) {
		return new Point(
			interpolateValue(p1.x, p2.x, percentage),
			interpolateValue(p1.y, p2.y, percentage)
		);
	}
}