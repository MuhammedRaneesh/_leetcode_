1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} head
10 * @return {ListNode}
11 */
12var reverseList = function(head) {
13    
14    let prev = null;
15    let current = head;
16
17    while(current !== null){
18
19        let next = current.next;
20
21        current.next = prev;
22
23        prev = current;
24
25        current = next;
26    }
27
28    return prev;
29};