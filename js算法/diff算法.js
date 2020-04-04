function Node(value) {
	this.value = value
	this.left = null
	this.right = null
}

const A1 = new Node('A')
const B1 = new Node('B')
const C1 = new Node('C')
const D1 = new Node('D')
const E1 = new Node('E')
const F1 = new Node('F')
const G1 = new Node('G')

A1.left = B1
A1.right = C1
B1.left = D1
B1.right = E1
C1.left = F1
C1.right = G1

const A2 = new Node('A')
const B2 = new Node('B')
const C2 = new Node('M')
const D2 = new Node('D')
const E2 = new Node('E')
const F2 = new Node('F')
const G2 = new Node('X')

A2.left = B2
A2.right = C2
B2.left = D2
B2.right = E2
C2.left = F2
C2.right = G2

function diff(root1, root2, diffArr) {
	if (root1 == root2) return diffArr
	if (root1 == null && root2 != null) {
		diffArr.push({ type: '增加', origin: null, new: root2 })
	} else if (root1 != null && root2 == null) {
		diffArr.push({ type: '删除', origin: root1, new: null })
	} else if (root1.value != root2.value) {
		diffArr.push({ type: '修改', origin: root1, new: root2 })
		diff(root1.left, root2.left, diffArr)
		diff(root1.right, root2.right, diffArr)
	} else {
		diff(root1.left, root2.left, diffArr)
		diff(root1.right, root2.right, diffArr)
	}
}

let diffArr = []

diff(A1, A2, diffArr)

console.log(diffArr)
