import { Pointlike } from '../Types.js';
import Angle from './Angle.js';
import Line from './Line.js';
export default class Point {
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number);
    get coordinates(): [number, number];
    isSameAs(point: Pointlike): boolean;
    rotate(pivot: Pointlike, angleOrRadians: Angle | number): Point;
    translate(x: number, y: number): Point;
    distanceTo(point: Pointlike): number;
    liesOnSegment(segment: Line, epsilon?: number): boolean;
    distanceFromSegment(segment: Line): number;
    static distanceBetween(p1: Pointlike, p2: Pointlike): number;
    static fromMidpoint(p1: Pointlike, p2: Pointlike): Point;
    static fromPointlike(point: Pointlike): Point;
    static interpolate(p1: Pointlike, p2: Pointlike, percentage?: number): Point;
}
