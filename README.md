# Geometry

Basic immutable utilities for working with 2d geometry - points, rectangles, lines, vectors and angles.

# Usage

```
npm install @szydlovski/geometry
```

```js
import { Point, Rectangle, Angle } from '@szydlovski/geometry';

const p1 = new Point(5,5);

const rect1 = Rectangle.fromOriginAndDimensions(
  new Point(0, -10),
  { width: 10, height: 10}
);
const rect2 = rect1.rotate(Angle.fromDegrees(-90), new Point(0,0));
const rect3 = rect1.translate(0, 10);

rect1.containsPoint(p1) // false
rect2.containsPoint(p1) // true
rect3.containsPoint(p1) // true

```