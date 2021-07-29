import { Pointlike } from '../Types.js';
import Angle from './Angle.js';

export default class Vector {
	constructor(public readonly x: number, public readonly y: number) { }
	get angle() {
		return Angle.fromRadians(Math.atan2(this.y, this.x));
	}
	static dotProduct(vector1: Vector, vector2: Vector) {
		return vector1.x * vector2.x + vector1.y * vector2.y;
	}
	static fromPoints(p1: Pointlike, p2: Pointlike) {
		return new Vector(p2.x - p1.x, p2.y - p1.y);
	}
}
