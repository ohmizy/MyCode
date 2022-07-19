//1

function print1to255 () {
for (i = 1; i <= 255; i ++) {
    console.log (i) ;
}
}
print1to255 () ;

//2

function printodd255 () {
    for (i =1; i <= 255; i += 2)
    console.log (i) ;
    }
    printodd255 () ;

//3

function print1to255 () {
    var sum = 0 
    for (i = 0; i <= 255; i ++) { 
        sum = sum + i 
        console.log(i, sum); 
    }
}
print1to255 () ;

//4

function IntArrVal () {
    var arr = [1,24,99,52,33] ; 
        max = arr [0] 
        for (i = 0; i <= arr.length; i ++) {
        if (arr [i] > max) max = arr [i];
        console.log (max) ; } 
}

//5
function BiggestNumber (arr) {
    var B = arr[0] ;
    for (var i = 0; i < arr.length ; i++) {
        if (B < arr[i]) {
            B = arr[i];
        }
    }
    console.log(B);
}

var arr1 = [1,11,20,24]
BiggestNumber(arr1)

//6
function average (arr) {
    sum = 0
    for ( var i = 0; i < arr.length; i ++) {
        sum += arr[i];
    }
    console.log (sum / arr.length)
}
average ([1,11,20,24])

//7

function oddsNum(){
    var arr = []
    for( var i = 1; i <= 255; i += 2){
        arr.push(i)
    }
    console.log(arr)
}
oddsNum()

//8

function squareValues(arr){
    for( var i=0; i<arr.length; i++){
        arr[i] = arr[i]**2
    } 
    return arr
}
var i = squareValues([67,32,40,16])
console.log(i)
console.log(squareValues([67,32,40,16]))

//9

var arr = [1,2,3,4,5];
function GreaterthanY (arr,y) {
    var c = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            c = c + 1;
            console.log(arr[i]);
        }
    }
}
GreaterthanY(arr,2) ;

//10

var arr = [1,-2,3,-4,5] ;
function NegativeNumbers (arr) {
    for (i = 0; i < arr.length; i++){
        if (arr [i] < 0) {
            arr [i] = 0
        }
    }
    return arr
}

NegativeNumbers(arr);
console.log(arr);