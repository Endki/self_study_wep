// var lottoArr=Array(45);
// var fill=lottoArr.fill();

// fill.forEach(function(variable,index){
//     fill[index]=index+1;
// })

var lottoArr=Array(45).fill().map(function(value,index){
    return index+1;
})

var shuffle=[];

while(lottoArr.length>0){
    var moveValue=lottoArr.splice(Math.floor(Math.random()*lottoArr.length),1)[0];
    shuffle.push(moveValue);

}

var bonus=shuffle[shuffle.length-1];
var winning=shuffle.slice(0,6).sort(function(p,c){return p-c});
//sort는 설명해주시는 거 들어보니 시간 복잡도 n^2 예상


// for(i=0;i<winning.length;i++){
//         var ball=document.createElement('div');
//         ball.textContent=winning[i];
//         result.appendChild(ball);        
// }
var result=document.getElementById('result');
// var result=document.querySelector('result'); //요새는 이거 많이 사용.


function ballPaint(value,result){
    var ball=document.createElement('div');
    ball.textContent=value;
    ball.style.display ='inline-block';
    ball.style.border='1px solid black';
    ball.style.borderRadius='10px';
    ball.style.width='20px';
    ball.style.height='20px';
    ball.style.fontSize='12px';
    ball.style.textAlign='center';
    ball.style.marginRight='10px';

    ball.className='ballID'+value; //.class 는 사용불가
    // ball.id='ballID'+value;
    var backG;
    // switch(value){
    //     case value<=10:
    //         backG='red';
    //         alert("www");
    //         break;
    //     case value<=20:
    //         backG='orange';
    //         break;
    //     case value<=30:
    //         backG='yellow';
    //         break;
    //     case value<=40:
    //         backG='blue';
    //         break;
    //     default:
    //         backG='green';
    //         break;

    // }
    if(value<=10){
        backG='red';
    }else if(value<=20){
        backG='orange';
    }else if(value<=30){
        backG='yellow';
    }else if(value<=40){
        backG='blue';
    }else{
        backG='green';
    }


    ball.style.background=backG;
    result.appendChild(ball);     
}

setTimeout(() => {
    ballPaint(winning[0],result);
}, 1000);

setTimeout(() => {
    ballPaint(winning[1],result);
}, 2000);

setTimeout(() => {
    ballPaint(winning[2],result);    
}, 3000);

setTimeout(() => {
    ballPaint(winning[3],result);
}, 4000);

setTimeout(() => {
    ballPaint(winning[4],result);   
}, 5000);

setTimeout(() => {
    ballPaint(winning[5],result);   
}, 6000);

var bonusText=document.getElementsByClassName('bonus')[0];
// var bonusText=document.querySelector('.bonus'); //요새는 이렇게 사용가능.
                                        // class는 . 붙여서 사용한다!
//뒤에 숫자 입력해주어야 한다. why? -> class 이름을 가진 개체들은 중복이 가능함!


setTimeout(() => {
    ballPaint(bonus,bonusText);   
}, 7000);


