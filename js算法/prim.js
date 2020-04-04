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

function prim(pointSet, distance, start) {
	let nowPointSet = [start]
	while (true) {
		let startPoint = null,
			endPoint = null,
			maxDis = max
		for (let i = 0; i < nowPointSet.length; i++) {
			const idx = pointSet.indexOf(nowPointSet[i])
			for (let j = 0; j < distance.length; j++) {
				if (!nowPointSet.includes(pointSet[j]) && distance[idx][j] < maxDis) {
					startPoint = nowPointSet[i]
					endPoint = pointSet[j]
					maxDis = distance[idx][j]
				}
			}
		}
		nowPointSet.push(endPoint)
		console.log(nowPointSet.length)
		pointSet[pointSet.indexOf(startPoint)].neiqhbor.push(endPoint)
		pointSet[pointSet.indexOf(endPoint)].neiqhbor.push(startPoint)
		if (nowPointSet.length === 5) break
	}
	return pointSet
}

const tree = prim(pointSet, distance, c)

console.log(tree)
