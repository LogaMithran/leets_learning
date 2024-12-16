/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
var reverseList = function (head) {
    let temp = head
    let prev = null;

    while (temp !== null) {
        let front = temp.next;
        temp.next = prev;

        prev = temp;
        temp = front;
    }

    return prev
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null; // Validate input
    let head = new ListNode(arr[0]); // Create the head node
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]); // Create and link next node
        current = current.next;
    }
    return head; // Return the head of the linked list
}

let inputArray = [1, 2, 3, 4, 5];

let head = createLinkedList(inputArray);

// Pass this `head` to reverseList
console.log(reverseList(head));
