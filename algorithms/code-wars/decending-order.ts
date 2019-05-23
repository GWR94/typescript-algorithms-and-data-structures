export class Kata {
	public static descendingOrder(n: number): number {
		return parseInt(
			n
				.toString()
				.split("")
				.map(Number)
				.sort((a, b) => a - b)
				.reverse()
				.join("")
		);
	}
}
console.log(Kata.descendingOrder(534322));
