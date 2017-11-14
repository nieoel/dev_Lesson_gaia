function first(par){
    console.log('test') ;
}

var first2 = function (par) {
    console.log('test')
}

var names = [ 'john', 'jane', 'mark'] ;
              //0   1  2  3   4  5  6  7  8  9
var numbers = [10, 11, 12,13,14,15,16,17,18,19] ;
var testArr = [1, 'john', true, names] ;

/*
document.write(names) ;
console.log(names) ;
document.write("<br>") ;
document.write(testArr) ;
console.log(testArr) ;
*/

console.log(names[2]);
names.push("log");
console.log(names[3]);
names.push("log2");
console.log(names[4]);
names.push("log3");
names.push("log4");

console.log(names[names.length-1]);
console.log(names.indexOf('jane')) ;
console.log(names.indexOf('log4')) ;

// 초기값 ; 비교해서 참 거짓 ; 액션(값증가)
console.log("length="+numbers.length) ;
for(var i=0 ; i < numbers.length ; i++) {
    if(i<3 || i>5  ) {

    if(numbers[i]==17) {
    console.log(numbers[i]+"입니다.")

    } else {
        console.log(numbers[i])}
    } else {
        console.log("-------------"+numbers[i]+"-------------") }
}

