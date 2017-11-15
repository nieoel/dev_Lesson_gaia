

var name = 'john' ;
var birth = 20 ;
function getAge(birthage){
    var num = 2017-birthage
        return num ;
}

var person = {
    name : 'john',
    birth : 2000,
    getAge : function (birthage){
        var num = 2017- this.birth ;
            return num ;
    }
}

console.log(person.getAge()) ;
person.birth = 2010;
console.log(person.getAge()) ;
person.name = 'mike';
console.log(person);
/*
var person2 = new Object() ;
person2.name = 'jane' ;

console.log(person2.name) ;
console.log(person2['name'])
*/

var building = {
    nation : "china",
    city : "beijing",
    birth : 2000,
    period : function (){
        var num = 2017 - this.birth
        return num;
    } ,
    maker : ["john2", "jane2", "mike2"]
}


//setTimeout( function()  {  window.open("http://daum.net", "네이버", "width=500, height=500, resizable=yes"); }, 2000) ;

var i=0
//math.round() ; 반올림
//math. ceil () ;  올림
//math. floor() ; 내림

/*
setInterval(function() {
    var num = Math.random() ;
    document.write(Math.ceil(( num*10)+1));
    }, 1000);
*/

var date = new Date();
console.log(date.getYear()+1900)
console.log(date.getFullYear()+"년");
console.log(date.getMonth()+"월");
console.log(date.getDate()+"일");
console.log(date.getDay()+"요일")
console.log(date.getHours()+"시");
console.log(date.getMinutes()+"분");
console.log(date.getMilliseconds()+"초");