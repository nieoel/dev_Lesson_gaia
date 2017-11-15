/*var name = 'john' ;
var name2 = 'john' ;
var number = 20 ;
var check = true ;
var check2 = false ;

function display(con) {
    console.log("안녕하세요") ;
}

var displayCon2 = function (){
    console.log("안녕하세요 2...")
}


var arr = [ "john", "jane", "mark", "tom"] ;
var arr2 = new Array("john1", "jane2", "mark2", "tom2") ;
var arr3 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] ;
var arr4 = [ "john", 11, true, arr2, displayCon2 ] ;

document.write(arr) ;

var tag = "<h1>안녕하세요</h1>" ;
document.write(tag) ;
*/
/*

var number2 = 10;                   console.log(number2)
number2 = number2+1 ;               console.log(number2)
number2++ ;                         console.log(number2)
number2 +=1;                        console.log(number2)
number2 +=3 ;                        console.log(number2)

for (var i=0 ; i<10 ; i+=2){
   console.log(i)

}
//짝수만출력

var num3 = 10/2 ;
var num4 = 11%2 ;
var number = 0

if(number){
    console.log("number true");
}   else {
    console.log("number false")
    }



for (var i=0 ; i<10 ; i++){
    if ( (i%2 === 0 ) ) {
   console.log(i);
    }

}
*/
/*
for (var i=0 ; i <10 ; i++) {
    //1일때는 "안녕하세요"
    //5일때는 "절반입니다"
    //8일때는 "거의 끝나갑니다.
    //나머지는 "숫자출력
    if(i==1) {
    console.log("안녕하세요")
    }
    else if(i==5) {
    continue ;
    console.log("절반입니다")
    }
    else if(i==8) {
    console.log("거의 끝나갑니다.")
    } else {
    console.log(i+"num")
    }
}
*/
//3보다 크고 7보다 작거나 같으면  "안녕하세요"

/*
for (var i=0 ; i <10 ; i++) {

    if(i>3 && i <=7) {
    console.log("안녕하세요") ;
    }  else if(i==8) {
    console.log("거의 끝나갑니다.") ;
    } else {
    console.log(i+"num") ;
    }
}

var i =0 ;

while(true){
        i++;
        if(i >=10){
            break;
         }
        console.log("안녕하세요: ["+i+"]");

var i =0 ;

while(i <10){
        i++;
        console.log("안녕하세요: ["+i+"]");
}

*/

/*
console.log(col[3]);
console.log(col.length);

for(var i=0 ; i < col7.length ; i++ ){
    console.log(col7[i]);
    }
col.push(11) ;

var col10 = [] ;
    for(i=100 ; i<=120 ; i++){
        col10.push(i)
    }
console.log(col10) ;
*/

/*
var col = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
var col2 = [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] ;
var col2 = [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] ;
var col3 = [ 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] ;
var col4 = [ 41, 42, 43, 44, 45, 46, 47, 48, 49 ,50] ;
var col5 = [ 51, 52, 53, 54, 55, 56, 57, 58 ,59, 60] ;
var col6 = [ 61, 62, 63, 64 ,65 ,66 ,67, 68, 69, 70] ;
var col7 = [ 71, 72, 73, 74, 75, 76 ,77, 78, 79 ,80] ;
var col8 = [ 81, 82 ,83, 84, 85, 86, 87, 88, 89, 90] ;
var col9 = [ 91, 92, 93, 94, 95, 96 ,97, 98, 99, 100] ;

var row = [col, col2, col3, col4, col5, col6, col7, col8, col9];

console.log(row[0][0]);
console.log(row[1][0]);

for(var i=0 ; i< row.length ; i++){
    console.log(row[i])
    for(var j=0 ; j<row[i].length ; j++){
    console.log(row[i][j])
    }
}
*/


var arr = [];
for (var i=0 ; i<10 ; i++){
    arr[i] = [] ;
    for(var j=0 ; j <10 ; j++){
        var num = i*10+ j+1;
        arr[i][j] = num;
        console.log(num);
     }
}

for(var i=0; i<arr.length ; i++){
    console.log(arr[i])
    for(var j=0; j < arr[i].length ; j++){
    console.log(arr[i][j])
    }
}



