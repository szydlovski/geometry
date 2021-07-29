import { Pointlike } from '../Types.js';
import Point from './Point.js';
export default class Line {
    p1: Point;
    p2: Point;
    constructor(p1: Pointlike, p2: Pointlike);
    get points(): [Point, Point];
    get length(): number;
    get midpoint(): Point;
    translate(x: number, y: number): Line;
    pointAt(percentage?: number): Point;
}
