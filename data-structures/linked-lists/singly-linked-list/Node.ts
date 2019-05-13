export default class Node {
	public val: any;
	public next: Node;

	constructor(val: any) {
		this.val = val;
		this.next = null;
	}
}
