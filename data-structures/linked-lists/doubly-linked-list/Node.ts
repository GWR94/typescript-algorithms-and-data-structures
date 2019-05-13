export default class Node {
	public val: any;
	public next: Node;
	public prev: Node;

	constructor(val: any, next: Node, prev: Node) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}
