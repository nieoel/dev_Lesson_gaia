
function bt(sitename){
 var site ;
 if(sitename === 'daum'){
    site='다음';
   }else if(sitename ==='naver'){
    site="네이버";
    }
 var check = confirm(site+'으로 가시겠습니까?')
 console.log("check="+check);
 if (sitename === 'daum' && check) {
    window.open('http://www.daum.net')
    } else if (sitename === 'naver' && check) {
    window.open('http://www.naver.com')
    }


}

function bt2(){
alert('마우스를 올려놓았습니다.')
}

function input2_alert(){
/* alert('세자이상 작성해주십시오') */
}

