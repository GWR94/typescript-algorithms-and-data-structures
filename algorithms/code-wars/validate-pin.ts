export class Kata {
	public static validatePin(pin: string): boolean {
		const fourDigit: RegExp = /[0-9]{4}/;
		const sixDigit: RegExp = /[0-9]{6}/;
		if (pin.length === 4 || pin.length === 6) {
			if (pin.match(fourDigit) || pin.match(sixDigit)) return true;
		}
		return false;
	}
}

console.log(Kata.validatePin("123456"));
