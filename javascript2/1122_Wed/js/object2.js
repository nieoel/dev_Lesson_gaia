var now = new Date();
var date = now.getDate();
var year = now.getFullYear();
var month = now.getMonth();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();


var Park = {
    name : 'Park',
    job : 'doctor',
    city : 'seoul',
    address : 101,
    date : year+"년"+"-"+(month+1)+"월"+"-"+date+"일",
    hour : hours+"시"+"-"+minutes+"분"+"-"+seconds+"초"
    }

var Marry = {
    name : 'Marry',
    job : 'designer',
    city : 'pusan',
    address : 102,
    date :year+"년"+"-"+(month+1)+"월"+"-"+date+"일",
    hour :hours+"시"+"-"+minutes+"분"+"-"+seconds+"초"
    }

var Peter = {
    name : 'Peter',
    job : 'teacher',
    city : 'suwon',
    address : 103,
    date : year+"년"+"-"+(month+1)+"월"+"-"+date+"일",
    hour : hours+"시"+"-"+minutes+"분"+"-"+seconds+"초"
    }

var Jane = {
    name : 'Jane',
    job : 'student',
    city : 'jeonju',
    address : 104,
    date : year+"년"+"-"+(month+1)+"월"+"-"+date+"일",
    hour : hours+"시"+"-"+minutes+"분"+"-"+seconds+"초"
    }

var Bill = {
    name : 'Bill',
    job : 'programmer',
    city : 'kyeongju',
    address : 105,
    date : year+"년"+"-"+(month+1)+"월"+"-"+date+"일",
    hour : hours+"시"+"-"+minutes+"분"+"-"+seconds+"초"
    }



var Person = function (name, job, city, address ,date, hour) {
    this.name = name;
    this.job = job;
    this.city = city;
    this.address = address;
    this.date = date;
    this.hour = hour;
    }

var arr = [];
arr.push(Park);
arr.push(Marry);
arr.push(Peter);
arr.push(Jane);
arr.push(Bill);

var text="";

text +="<table border='1'>";
    text += "<tr>";
        text += "<th>순위</th>";
        text += "<th>이름</th>";
        text += "<th>직업</th>";
        text += "<th>사는 곳</th>;"
        text += "<th>우편번호</th>;"
        text += "<th>가입날짜</th>;"
        text += "<th>가입시간"
    text += "</tr>";

          for (var i=0 ; i < arr.length ; i++) {
            text += "<tr>";
            text += "<td>"+(arr.length-i)+"</td>"
            text+="<td>"+arr[i].name+"</td>"
            text +="<td>"+arr[i].job+"</td>"
            text +="<td>"+arr[i].city+"</td>"
            text +="<td>"+arr[i].address+"</td>"
            text +="<td>"+arr[i].date+"</td>"
            text +="<td>"+arr[i].hour+"</td>"
            text +="</tr>";
}

text +="</table>"
document.write(text) ;