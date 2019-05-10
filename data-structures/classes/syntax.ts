class Student {
	get lates() {
		return this.timesLate;
	}

	get currentGrade() {
		return this.grade;
	}

	public static enrollStudents(students: Student[]) {
		students.forEach((student) => {
			console.log(
				"Enrolled student: ",
				student.firstName,
				student.lastName
			);
		});
	}

	public firstName: string;
	public lastName: string;
	public year: number;
	public testResults: number[] = [];
	private timesLate: number = 0;
	private grade: string;

	constructor(firstName: string, lastName: string, year: number) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.year = year;
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
			} time${this.timesLate > 1 ? "s" : ""}.`
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
		const total: number = this.testResults.reduce(
			(a: number, b: number) => a + b
		);
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
james.addToLates(); // timesLate = 1
james.addToLates(); // timesLate = 2
james.addToLates(); // timesLate = 3 - Report
james.getInfo(); // Your full name is James Gower. You are in year 10. You have been late 3 times.
james.addTestResult(80); // B
james.addTestResult(90); // A
james.addTestResult(5); // F
// james.grade = "A" - throws error as it's private
console.log(james.currentGrade);
Student.enrollStudents([james, bill]);
