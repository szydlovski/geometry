export default class Angle {
    constructor(_degrees) {
        this._degrees = _degrees;
    }
    ;
    get degrees() {
        return this._degrees;
    }
    get radians() {
        return Angle.degreesToRadians(this._degrees);
    }
    get gradians() {
        return Angle.degreesToGradians(this._degrees);
    }
    get turns() {
        return Angle.degreesToTurns(this._degrees);
    }
    static degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    static degreesToGradians(degrees) {
        return degrees * (10 / 9);
    }
    static degreesToTurns(degrees) {
        return degrees / 360;
    }
    static radiansToDegrees(radians) {
        return radians * (180 / Math.PI);
    }
    static radiansToGradians(radians) {
        return radians * (200 / Math.PI);
    }
    static radiansToTurns(radians) {
        return radians * (Math.PI / 2);
    }
    static gradiansToDegrees(gradians) {
        return gradians * 0.9;
    }
    static gradiansToRadians(gradians) {
        return gradians * (Math.PI / 200);
    }
    static gradiansToTurns(gradians) {
        return gradians / 400;
    }
    static turnsToDegrees(turns) {
        return turns * 360;
    }
    static turnsToRadians(turns) {
        return turns * (2 * Math.PI);
    }
    static turnsToGradians(turns) {
        return turns * 400;
    }
    static fromDegrees(degrees) {
        return new Angle(degrees);
    }
    static fromRadians(radians) {
        return new Angle(Angle.radiansToDegrees(radians));
    }
    static fromGradians(gradians) {
        return new Angle(Angle.gradiansToRadians(gradians));
    }
    static fromTurns(turns) {
        return new Angle(Angle.turnsToDegrees(turns));
    }
}
//# sourceMappingURL=Angle.js.map