
function Node(value) {
    this.value = value;
    this.next = null;
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

function bianLink(root) {
    let temp = root;
    while(true) {
        if(temp != null) {
            console.log(temp.value);
        }else {
            break;
        }
        temp = temp.next;
    }
}

bianLink(a);