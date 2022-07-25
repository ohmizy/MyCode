//1 

function printodds1to20 () {
  for (i = 1; i <= 20; i += 2){
  console.log (i);
  }
}
printodds1to20 () ;

//2

for (var i = 100; i > 0; i--) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

//3

for (var i = 4; i > -4; i -= 1.5) {
  console.log(i);
}

//4 

var sum = 0;
for (var i = 1; i < 101; i++) {
  sum += i;
}
console.log(sum);

//5

var product = 1;
for (var i = 1; i < 13; i++) {
  product *= i;
}
console.log(product);