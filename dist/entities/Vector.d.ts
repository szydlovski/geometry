import { Pointlike } from '../Types.js';
import Angle from './Angle.js';
export default class Vector {
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number);
    get angle(): Angle;
    static dotProduct(vector1: Vector, vector2: Vector): number;
    static fromPoints(p1: Pointlike, p2: Pointlike): Vector;
}
