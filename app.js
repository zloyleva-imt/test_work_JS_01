const data = {
	a: 1,
	b: -1,
	c: "Abc",
	d: -5,
	e: "ebc",
	f: 10,
	g: 5,
	h: "abc",
	k: "абв"
}

const expected = {
	f: 10,
	g: 5,
	a: 1,
	b: -1,
	d: -5,
	h: "abc",
	c: "Abc",
	e: "ebc",
	k: "абв",
}


const sortMy = obj => {
	return [
		...Object.keys(obj).filter(el => typeof obj[el] === "number").sort((a,b) => obj[b] - obj[a]),
		...Object.keys(obj).filter(el => typeof obj[el] === "string").sort((a,b) => obj[a].localeCompare(obj[b], "en"))
	]
	.reduce((acc, el) => {acc[el] = obj[el];return acc}, {});
}

console.table(sortMy(data));