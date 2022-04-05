const arr = [5, 1, 3, 2, 6];
// I want to transform these 
// Double - [10, 2, 6, 4, 12]
// Triple - [15, 3, 9, 6, 18]
// Binary - ["101", "1", "11", "10", "110"]

const ans = function (arrEle) {
    return 2*arrEle;
}
// const binary = function (arrEle) {
//     return arrEle.toString(2);
// }
console.log(arr.map((x) => {
    x.toString(2);
}));