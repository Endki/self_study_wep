var 바디=document.body;
var 단어=document.createElement('div');
단어.textContent='뚱키';
document.body.append(단어);


var 폼=document.createElement('form');
var 입력창=document.createElement('input');
var 버튼=document.createElement('button');
var 결과창=document.createElement('div');
var 기록창=document.createElement('div');


버튼.textContent='입력';
document.body.append(폼);
폼.append(입력창);
폼.append(버튼);
document.body.append(결과창);
document.body.append(기록창);


폼.addEventListener('submit',function(이벤트){
    이벤트.preventDefault();
    if(단어.textContent[단어.textContent.length-1]===입력창.value[0]){
        결과창.textContent='딩동댕';
        단어.textContent=입력창.value;
        입력창.value='';
        기록창.textContent+=단어.textContent+(" > ");


        입력창.focus();

        

    }else{
        결과창.textContent='땡';
        입력창.value='';
        입력창.focus();
    }
});


// var word=prompt("");
// while(true){
//     var answer=prompt(word);
//     if(word[word.length-1]===answer[0]){
//         alert('정답!');
//         word=answer;
//     }else if(answer==="그만"){
//         alert('그만!');
//         break;
//     }else{
//         alert('실패!');
//     }
// }
