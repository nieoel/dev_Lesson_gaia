function calculateage(birth2, birth){
    var age = birth2 - birth;

    if (age === 27) {
        return "20대" ;
    } else if(age === 10) {
        return "10대" ;
    } else if(age === 7){
        return "아동" ;
    }

    return age ;
}

var birth = 2017 ;
var birth2 = 2011 ;

var agejohn = calculateage(birth, birth2) ;
console.log(agejohn);


var scope ="global scope" ;
    function checkscope(scope) {
    // scope = scope;
    console.log(scope);
    scope = 'local scope' ;

}
checkscope(scope);
console.log(scope);

//var agejohn = calculateage(2011);
//console.log(agejohn);
/*
var agemike = calculateage(2000);
console.log(agemike);

var agemary = calculateage(2010);
console.log(agemary);

console.log("agemike:"+agemike) ;
console.log("agemary:"+agemary) ;*/

