import Angle from './Angle.js';
export default class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get angle() {
        return Angle.fromRadians(Math.atan2(this.y, this.x));
    }
    static dotProduct(vector1, vector2) {
        return vector1.x * vector2.x + vector1.y * vector2.y;
    }
    static fromPoints(p1, p2) {
        return new Vector(p2.x - p1.x, p2.y - p1.y);
    }
}
//# sourceMappingURL=Vector.js.map