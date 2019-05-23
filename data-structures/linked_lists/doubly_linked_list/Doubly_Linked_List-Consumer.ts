import DoublyLinkedList from "./Doubly_Linked_List";

export default class DoublyLinkedListConsumer {
	public DoublyLinkedList: DoublyLinkedList;
	constructor() {
		this.DoublyLinkedList = new DoublyLinkedList();
	}

	public push() {
		const value = "2";
		this.DoublyLinkedList.push(value);
	}
}
