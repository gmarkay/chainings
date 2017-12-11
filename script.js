var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let sortedInt = integers.sort((b,a) => a - b).filter((num) => num <= 19).map((num) => num * 1.5 -1).reduce((total, number) => total + number);
console.log(sortedInt);


