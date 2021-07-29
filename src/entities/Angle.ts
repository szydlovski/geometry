export default class Angle {
  private constructor(private readonly _degrees: number){};

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

  public static degreesToRadians(degrees: number) {
    return degrees * (Math.PI / 180);
  }
  public static degreesToGradians(degrees: number) {
    return degrees * (10/9);
  }
  public static degreesToTurns(degrees: number) {
    return degrees / 360;
  }

  public static radiansToDegrees(radians: number) {
    return radians * (180 / Math.PI);
  }
  public static radiansToGradians(radians: number) {
    return radians * (200 / Math.PI);
  }
  public static radiansToTurns(radians: number) {
    return radians * (Math.PI / 2);
  }

  public static gradiansToDegrees(gradians: number) {
    return gradians * 0.9;
  }
  public static gradiansToRadians(gradians: number) {
    return gradians * (Math.PI / 200);
  }
  public static gradiansToTurns(gradians: number) {
    return gradians / 400;
  }

  public static turnsToDegrees(turns: number) {
    return turns * 360;
  }
  public static turnsToRadians(turns: number) {    
    return turns * (2 * Math.PI);
  }
  public static turnsToGradians(turns: number) {
    return turns * 400;
  }

  public static fromDegrees(degrees: number) {
    return new Angle(degrees);
  }
  public static fromRadians(radians: number) {
    return new Angle(Angle.radiansToDegrees(radians));
  }
  public static fromGradians(gradians: number) {
    return new Angle(Angle.gradiansToRadians(gradians));
  }
  public static fromTurns(turns: number) {
    return new Angle(Angle.turnsToDegrees(turns));
  }
}

