function check() {
   // alert('check입니다') ;
   //var name = document.frm.name.value ;
   var name = document.getElementById('name').value ;
   console.log(name);
   var id = document.getElementById('id').value ;
   var password = document.frm.password.value;
   var password2 = document.frm.password2.value;

   if(name == "") {
        alert("이름을 입력하세요") ;
        document.frm.name.focus() ;
        document.querySelector('#perr').style.display = 'block'
        document.getElementById('perr').textContent = '이름을 입력하세요.' ;
        return false;

    }
document.querySelector('#perr').style.display = 'none' ;
    if(id == "") {
        alert("아이디를 입력하세요");
        document.frm.id.focus() ;


        return false;

     }

    if(password =="") {
        alert("비밀번호를 입력하세요") ;
        document.frm.password.focus() ;
        return false;
    }

    if(password2 == "") {
        alert("패스워드 확인을 입력하세요")
        document.frm.password2.focus();
        return false;
    }

    console.log(password+"-"+password2);

    if(password2 !== password) {
        alert("패스워드가 일치하지 않습니다") ;
        document.frm.password2.value="" ;
        document.frm.password2.focus();
        return false;
    }

    var chk = confirm(' 입력된 데이터를 서버로 전송합니다')
    if(chk) {
    console.log("name="+name+", id="+id);
    document.frm.submit();
    } else {
        return false;
    }
}
