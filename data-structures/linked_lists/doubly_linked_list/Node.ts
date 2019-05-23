export default class Node {
	public val: any;
	public next: Node;
	public prev: Node;

	constructor(val: any) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}
