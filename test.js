/*
function add(a, b, callback) { // 継続渡しスタイル(CPS: Continuation-Passing Style)
	callback(a + b);
}
console.log("before");
add(1, 2, result => console.log("Result: " + result));
console.log("after");
*/

// 非同期CPS
function addAsync(a, b, callback) {
	setTimeout(() => callback(a + b), 100);
}
console.log("before");
addAsync(1, 2, result => console.log("Result: " + result));
console.log("after");
// before
// after
// Result: 3

// 継続渡しでないコールバック
const result = [1, 3, 5, 7].map((el) => el = el - 1);
console.log(result);
// [ 0, 2, 4, 6 ]
