


var Person = function (name, birthday,  job, city, address ,date) {
    this.name = name;
    this.birthday = birthday;
    this.job = job;
    this.city = city;
    this.address = address;
    this.date = date;

}

var registerArr = [];

var now1 = new Date();
registerArr.push(new Person('Park',"2000",'doctor','seoul','101',now1))
var now2 = new Date();
registerArr.push(new Person('Marry','1990', 'designer','pusan','102',now2))
var now3 = new Date();
registerArr.push(new Person('Peter','2010','teacher','suwon','103',now3))
var now4 = new Date();
registerArr.push(new Person('Jane','1995','student','jeonju','104',now4))
var now5 = new Date();
registerArr.push(new Person('Bill','2011','programmer','kyeongju','105',now5))

var jobs = ['docter','designer','teacher','student','programmer']
var text="";

text +="<h1 align='center'>게시판</h1>"

text +="<table border='1' align='center' width='700'>";
    text += "<tr>";
        text += "<th>순위</th>";
        text +=  "<th>이름</th>";
        text += "<th>생년</th>";
        text += "<th>직업</th>";
        text += "<th>사는 곳</th>";
        text += "<th>우편번호</th>";
        text += "<th>가입날짜</th>";
        text += "<th>가입시간</th>";
    text += "</tr>";

          for (var i=0 ; i < registerArr.length ; i++) {
            text += "<tr align='center'>";
            text += "<td>"+(registerArr.length-i)+"</td>"
            text+="<td>"+registerArr[i].name+"</td>"
            text+="<td><button onclick=\"btn(\'"+registerArr[i].name+"\'," +registerArr[i].birthday+")\">"+registerArr[i].birthday+"</button></td>"
            text +="<td>" ;
            text += "<select>";
            for (var j=0 ; j < jobs.length ; j++) {
            text += "<option>"+jobs[j]+"</option>";
                if(registerArr[i].job == jobs[j]) {
             text+=  "<option selected>"+jobs[j]+"</option>"
                }
            }
            text += "</select>";
            text += "</td>";
          //text += "</td>"
            text +="<td>"+registerArr[i].city+"</td>"
            text +="<td><input type=text value="+registerArr[i].address+"></td>"
            var day = registerArr[i].date;
           text +="<td>"+day.getFullYear()+"-"+(day.getMonth()+1)+"-"+day.getDate()+"</td>" ;
            text +="<td>"+day.getHours()+":"+day.getMinutes()+":"+day.getSeconds()+"</td>" ;
           text +="</tr>";
}


function btn(name, birthday) {
    var now6 = new Date();
    alert(name+"는"+(now6.getFullYear()-birthday)+"살입니다.")
    }

text +="</table>"
document.write(text);


