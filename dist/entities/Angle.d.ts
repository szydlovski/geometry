export default class Angle {
    private readonly _degrees;
    private constructor();
    get degrees(): number;
    get radians(): number;
    get gradians(): number;
    get turns(): number;
    static degreesToRadians(degrees: number): number;
    static degreesToGradians(degrees: number): number;
    static degreesToTurns(degrees: number): number;
    static radiansToDegrees(radians: number): number;
    static radiansToGradians(radians: number): number;
    static radiansToTurns(radians: number): number;
    static gradiansToDegrees(gradians: number): number;
    static gradiansToRadians(gradians: number): number;
    static gradiansToTurns(gradians: number): number;
    static turnsToDegrees(turns: number): number;
    static turnsToRadians(turns: number): number;
    static turnsToGradians(turns: number): number;
    static fromDegrees(degrees: number): Angle;
    static fromRadians(radians: number): Angle;
    static fromGradians(gradians: number): Angle;
    static fromTurns(turns: number): Angle;
}
