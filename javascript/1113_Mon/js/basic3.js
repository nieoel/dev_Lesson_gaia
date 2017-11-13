
var name = 'john' ;
var age = 25 ;
var isMarried = 'yes' ; // no, not no1, not
var isMarried2 = 'yes' ;

if(isMarried === 'yes'){
    console.log("John is married") ;
} else if(isMarried === 'no'){
    console.log("Jane is married") ;
} else if(isMarried ==='no1'){
    console.log("Tome is Married") ;
} else {
     console.log("I don't know") ;
}

if(23 == '23'){
    console.log("23 == 숫자")
}

if(23 == "23"){
    console.log("23 ==")
}

if(23 === "23"){
    console.log("23 === 3개")
}

var job = 'driver' ;

job = prompt('what does john do?');

switch(job){
    case 'driver' :
        console.log("job is driver");
         break ;
    case 'teacher' :
        console.log("job is teacher");
        break ;
    case 'coach' :
        console.log("job is coach");
        break ;

     default :
        console.log("I don't know");
        }