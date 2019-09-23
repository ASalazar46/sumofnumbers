const test = [1, 2, 3, 4, 5];

function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list, i) {
  if (i <= 0) {
    return 0;
  }
  return sumRecursion(list, i - 1) + list[i - 1];
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, sum) { return memo + sum; }, 0);
}

console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursion(test, test.length));
console.log(sumTheSimpleWay(test));
