import Point from './Point.js';
import Line from './Line.js';
import Vector from './Vector.js';
export default class Rectangle {
    constructor(p1, p2, p3, p4) {
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
    get points() {
        return [this.p1, this.p2, this.p3, this.p4];
    }
    get bounds() {
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
    translate(x, y) {
        const [p1, p2, p3, p4] = this.points.map((point) => point.translate(x, y));
        return new Rectangle(p1, p2, p3, p4);
    }
    rotate(angle, pivot) {
        const [p1, p2, p3, p4] = this.points.map((point) => point.rotate(pivot || this.center, angle));
        return new Rectangle(p1, p2, p3, p4);
    }
    containsPoint(point) {
        const am = Vector.fromPoints(this.p1, point);
        const ab = Vector.fromPoints(this.p1, this.p2);
        const ad = Vector.fromPoints(this.p1, this.p4);
        const amab = Vector.dotProduct(am, ab);
        const abab = Vector.dotProduct(ab, ab);
        const amad = Vector.dotProduct(am, ad);
        const adad = Vector.dotProduct(ad, ad);
        return (0 < amab && amab < abab) && (0 < amad && amad < adad);
    }
    intersectsWith(other) {
        return other.points.some(point => this.containsPoint(point));
    }
    static fromOriginAndDimensions(origin, dimensions) {
        const { x, y } = origin;
        const { width, height } = dimensions;
        return new Rectangle(new Point(x, y), new Point(x + width, y), new Point(x + width, y + height), new Point(x, y + height));
    }
}
//# sourceMappingURL=Rectangle.js.map