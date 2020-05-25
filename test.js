function add(a, b, callback) { // 継続渡しスタイル(CPS: Continuation-Passing Style)
	callback(a + b);
}

console.log("before");

add(1, 2, result => console.log("Result: " + result));
console.log("after");
