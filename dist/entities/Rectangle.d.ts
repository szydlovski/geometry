declare type Bounds = {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
};
declare type Dimensions = {
    width: number;
    height: number;
};
import Point from './Point.js';
import Line from './Line.js';
import Angle from './Angle.js';
import { Pointlike } from '../Types.js';
export default class Rectangle {
    readonly p1: Point;
    readonly p2: Point;
    readonly p3: Point;
    readonly p4: Point;
    constructor(p1: Pointlike, p2: Pointlike, p3: Pointlike, p4: Pointlike);
    get width(): number;
    get height(): number;
    get diagonal(): Line;
    get center(): Point;
    get points(): [Point, Point, Point, Point];
    get bounds(): Bounds;
    get boundingBox(): Rectangle;
    translate(x: number, y: number): Rectangle;
    rotate(angle: Angle | number, pivot?: Pointlike): Rectangle;
    containsPoint(point: Pointlike): boolean;
    intersectsWith(other: Rectangle): boolean;
    static fromOriginAndDimensions(origin: Pointlike, dimensions: Dimensions): Rectangle;
}
export {};
