/*
function calculateage (birth) {
 var age = 2017 - birth ;

return age ;
}


var agejohn = calculateage(1990) ; // 2017 - 1990
// console.log(agejohn) ;

//덧셈함수
function sum(num1, num2) {
    var test2 = num1 + num2 ;
    return test2 ;
}

//빼기 함수
function minus(num1, num2) {
    var test2 = num1 - num2 ;
    return test2 ;

 }
 //곱하기 함수
 function mul(num1, num2) {
    var test2 = num1 * num2 ;
    return test2;
}

//연산자 인식 함수
function operate(num1, num2, operator) {
    if (operator == "+"){
        return sum(num1, num2);
    }
    else if (operator == "-"){
        return minus(num1, num2);
    }

   if (operator == "*"){
        return mul(num1, num2);
    }

}




var num1 = 2 ;
var num2 = 5 ;
var operator = "-" ;
document.write("("+num1+"+"+num2+")="+sum(2,5) +"<br>") ;
document.write("("+num1+"-"+num2+")="+minus(2,5) +"<br>") ;
document.write("("+num1+"*"+num2+")="+mul(2,5) +"<br>")  ;
document.write("("+num1+operator+num2+")="+operate(num1, num2, operator)) ;
*/
/*
이름, 년도
은퇴 65세  은퇴 년도2017년
얼마나 남았는지
남았으면  얼마나 남았습니다.
오버됐으면 이미 은퇴했습니다.
html 브라우저 출력
*/

/*

function yearsRetirement(name, birth) {
        var age = 2017 - birth;

        if (age < 65) {
        return age = (65-age)+"세남았습니다.";
        }

        return age ;

        }

var age = yearsRetirement('john', 1980);
document.write(age);
*/


function checkretirement(retireage, year2) {
    var between = year2 - retireage;
    return between;

}

function yearsRetirement(birth, year, year2) {
        var age = year - birth;
        var remain = checkretirement(age, year2) ;
        return remain ;
}

function displayretire(between){
        if(between == 0) {
            document.write("올해가 은퇴입니다.");
        }  else if (between > 0) {
            document.write("은퇴가 "+between+"년 남았습니다.") ;
        } else {
            document.write("이미 은퇴했습니다.")
         }
}

/* 이름, 생년, 현재년도, 일하는기간 */
var currentyear = 2017
var remain = yearsRetirement(2007, currentyear, 20); //이름, 생년, 현재년도, 은퇴나이
document.write("현재는" +currentyear+ "년입니다.<br>") ;;
displayretire(remain) ;
// document.write("은퇴는 남은 기간" +remain+"년 남았습니다.");

//yearsRetirement('jane', 2000, 2020, 40);


var name = "john" ;

function third(){
    var c = "hey" ;
    console.log("third hey")
}

function second() {
    var b ="hi";
    third();
    console.log("second hi")
}

function first() {
    var a ="hello" ;
    second()
    console.log("first hello")
}

first()


