class Student {
	public firstName: string;
	public lastName: string;
	public year: number;
	public testResults: number[];
	private timesLate: number;
	private grade: string;

	get lates() {
		return this.timesLate;
	}

	get currentGrade() {
		return this.grade;
	}

	constructor(
		firstName: string,
		lastName: string,
		year: number,
		timesLate: number = 0,
		testResults: number[] = []
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.year = year;
		this.timesLate = timesLate;
		this.testResults = testResults;
	}

	public getInfo() {
		console.log(
			`Your full name is ${this.firstName} ${
				this.lastName
			}. You are in year ${this.year}. You have been late ${
				this.timesLate
			} times`
		);
	}

	public addToLates() {
		this.timesLate++;
		console.log(
			`${this.firstName} ${this.lastName} has been late ${
				this.timesLate
			} times.`
		);
		if (this.timesLate >= 3) {
			console.log(
				`${this.firstName} has been late too many times (${
					this.timesLate
				}). Report to the headteacher.`
			);
		}
	}

	public addTestResult(score: number) {
		this.testResults.push(score);
		let total = 0;
		this.testResults.forEach((test) => {
			total += test;
		});
		const average = total / this.testResults.length;
		if (average > 80) {
			this.grade = "A";
		} else if (average <= 80 && average >= 60) {
			this.grade = "B";
		} else if (average < 60 && average <= 40) {
			this.grade = "C";
		} else {
			this.grade = "F";
		}
		console.log(
			`After ${this.testResults.length} test${
				this.testResults.length > 1 ? "s" : ""
			}, you have an average score of ${Math.trunc(
				average
			)}. Your current grade is ${this.grade}.`
		);
	}
}

const james = new Student("James", "Gower", 10);
const bill = new Student("Bill", "Bloggs", 8);

james.getInfo();
james.addToLates();
james.addToLates();
james.addToLates();
james.getInfo();
james.addTestResult(80);
james.addTestResult(90);
james.addTestResult(5);
console.log(james.currentGrade);
