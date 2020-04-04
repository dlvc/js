const max = 100000
let pointSet = []
const distance = [
	[0, 4, 7, max, max],
	[4, 0, 8, 6, max],
	[7, 8, 0, 5, max],
	[max, 6, 5, 0, 7],
	[max, max, max, 7, 0]
]

function Node(value) {
	this.value = value
	this.neiqhbor = []
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')

pointSet.push(a, b, c, d, e)

function kruskal(pointSet, distance) {
	let list = []
	while (true) {
		let plen = pointSet.length
		for (let i = 0; i < plen; i++) {
			let dlen = distance[plen].length
			for (let j = 0; j < dlen; j++) {}
		}
	}
}
