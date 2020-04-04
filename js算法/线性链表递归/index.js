
function Node(value) {
    this.value = value;
    this.next = null;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

//递归遍历，必须有出口
function bianLink(root) {
    if(root == null) return;
    console.log(root.value);
    bianLink(root.next);
}
bianLink(node1);