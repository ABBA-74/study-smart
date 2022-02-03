let sum = 0;
let arr = [2, 6, 18, 90];
let arr2 = [];
arr.forEach((element, index) => {
  sum += index % 2 && element;
  index % 2 && arr2.push(element);
});
console.log(sum);
console.log(arr2);
