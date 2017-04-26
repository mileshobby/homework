// function mysteryScoping1() {
//   var x = 'out of block';
//   if (true) {
//     x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var y = 'in block';
//     console.log(y);
//   }
//   console.log(x);
// }
//
// // mysteryScoping3();
//
// function mysteryScoping4() {
//   let x = 'out of block';
//   if (true) {
//     x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// // mysteryScoping4();
// //
// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     x = 'in block';
//     console.log(x);
//   }
//   x = 'out of block again';
//   console.log(x);
// }
//
// mysteryScoping5();

// function madLib(verb, adj, noun) {
//   return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`;
// }
// console.log( madLib("defend", "great", "wall"));
//
// function fizzBuzz(array) {
//   let fizz = [];
//   for(let i = 0; i < array.length; i++ ){
//     if (array[i] % 3 === 0 || array[i] % 5 === 0) {
//       if (array[i] % 15 != 0) fizz.push(array[i]);
//     }
//   }
//   return fizz;
// }
//
// console.log(fizzBuzz([1,2,3,4,5,15]));

function isPrime(num){
  if (num < 2) return false;
  for(let i = 2; i < num; i++){
    if (num % i === 0) return false;
  }
  return true;
}
//
// console.log(isPrime(16));

function sumOfNPrimes(n) {
  let sum = 0;
  let i = 0;
  let num = 2;
  while (i < n) {
    if (isPrime(num)) {
      sum += num;
      i++;
    }
    num++;
  }
  return sum;
}

console.log(sumOfNPrimes(4));
