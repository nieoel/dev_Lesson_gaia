var John = {
    name : 'john',
    birthYear : 1990,
    job : 'student'
}



var Jane = {
    name : 'Jane',
    birthYear : 2000,
    job : 'teacher'
}

var Person = function (name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

var Mark = new Person("Mark", 2010, 'doctor');

var arr = [] ;
arr.push(John);
arr.push(Jane);
arr.push(Mark);



var text="" ;

text +="<table border='1'>" ;
    text += "<tr>";
        text += "<th>#</th>";
        text += "<th>이름</th>";
        text += "<th>생년</th>";
        text += "<th>직업</th>"
    text += "</tr>";

        for (var i=0 ; i < arr.length ; i++) {
            text += "<tr>";
            text += "<td>"+(i+1)+"</td>"
            text+="<td>"+arr[i].name+"</td>"
            text +="<td>"+arr[i].birthYear+"</td>"
            text +="<td>"+arr[i].job+"</td>"
            text +="</tr>";
            }
text +="</table>"
document.write(text) ;