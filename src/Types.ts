import type Point from "./entities/Point";

export type Pointlike = {
	x: number;
	y: number;
} | Point;