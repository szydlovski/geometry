
type Bounds = {
	minX: number;
	maxX: number;
	minY: number;
	maxY: number;
}

type Dimensions = {
	width: number;
	height: number;
}

import Point from './Point.js';
import Line from './Line.js';
import Vector from './Vector.js';
import Angle from './Angle.js';
import { Pointlike } from '../Types.js';

export default class Rectangle {
	public readonly p1: Point;
	public readonly p2: Point;
	public readonly p3: Point;
	public readonly p4: Point;
	constructor(p1: Pointlike, p2: Pointlike, p3: Pointlike, p4: Pointlike) {
		this.p1 = Point.fromPointlike(p1);
		this.p2 = Point.fromPointlike(p2);
		this.p3 = Point.fromPointlike(p3);
		this.p4 = Point.fromPointlike(p4);
	}
	get width() {
		return new Line(this.p1, this.p2).length;
	}
	get height() {
		return new Line(this.p2, this.p3).length;
	}
	get diagonal() {
		return new Line(this.p1, this.p3);
	}
	get center() {
		return this.diagonal.midpoint;
	}
	get points(): [Point, Point, Point, Point] {
		return [this.p1, this.p2, this.p3, this.p4];
	}
	get bounds(): Bounds {
		const pointX = this.points.map((point) => point.x);
		const pointY = this.points.map((point) => point.y);
		return {
			minX: Math.min(...pointX),
			maxX: Math.max(...pointX),
			minY: Math.min(...pointY),
			maxY: Math.max(...pointY)
		};
	}
	get boundingBox() {
		const { minX, maxX, minY, maxY } = this.bounds;
		return Rectangle.fromOriginAndDimensions(new Point(minX, minY), {
			width: maxX - minX,
			height: maxY - minY,
		});
	}
	translate(x: number, y: number) {
		const [p1, p2, p3, p4] = this.points.map((point) => point.translate(x, y));
		return new Rectangle(p1, p2, p3, p4);
	}
	rotate(angle: Angle | number, pivot?: Pointlike) {
		const [p1, p2, p3, p4] = this.points.map((point) => point.rotate(pivot || this.center, angle));
		return new Rectangle(
			p1, p2, p3, p4
		);
	}
	containsPoint(point: Pointlike) {
		const am = Vector.fromPoints(this.p1, point);
		const ab = Vector.fromPoints(this.p1, this.p2);
		const ad = Vector.fromPoints(this.p1, this.p4);

		const amab = Vector.dotProduct(am, ab);
		const abab = Vector.dotProduct(ab, ab);
		const amad = Vector.dotProduct(am, ad);
		const adad = Vector.dotProduct(ad, ad);

		return (0 < amab && amab < abab) && (0 < amad && amad < adad);
	}
	intersectsWith(other: Rectangle) {
		return other.points.some(point => this.containsPoint(point));
	}
	static fromOriginAndDimensions(origin: Pointlike, dimensions: Dimensions) {
		const { x, y } = origin;
		const { width, height } = dimensions;
		return new Rectangle(
			new Point(x, y),
			new Point(x + width, y),
			new Point(x + width, y + height),
			new Point(x, y + height)
		);
	}
}

