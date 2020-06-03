var 바디=document.body;
var 단어=document.createElement('div');

var 숫자1=Math.ceil(Math.random()*9);
var 숫자2=Math.ceil(Math.random()*9);


단어.textContent=String(숫자1)+" 곱하기 "+String(숫자2)+" 는? ";
document.body.append(단어);

var 폼=document.createElement('form');
var 입력창=document.createElement('input');
var 버튼=document.createElement('button');
var 결과창=document.createElement('div');

버튼.textContent='입력';
document.body.append(폼);
폼.append(입력창);
폼.append(버튼);
document.body.append(결과창);



폼.addEventListener('submit',function(이벤트){
    이벤트.preventDefault();
    if(parseInt(숫자1*숫자2)===parseInt(입력창.value)){
        결과창.textContent='딩동댕';
        
        숫자1=Math.ceil(Math.random()*9);
        숫자2=Math.ceil(Math.random()*9);

        단어.textContent=String(숫자1)+" 곱하기 "+String(숫자2)+" 는? ";
        입력창.value='';

        입력창.focus();
    }else{
        결과창.textContent='땡';
        입력창.value='';
        입력창.focus();
    }
});