class Point {
	/**
	 * Static method which compares two Point instances and returns
	 * the distance between the two.
	 * @param a: Point instance which contains the x and y values to
	 * find distance to b
	 * @param b: Point instance which contains the x and y values to
	 * find distance to b
	 */
	public static distance(a: Point, b: Point): number {
		const dx: number = a.x - b.x;
		const dy: number = a.y - b.y;
		console.log(Math.hypot(dx, dy));
		return Math.hypot(dx, dy);
	}

	public x: number;
	public y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

Point.distance(p1, p2);
