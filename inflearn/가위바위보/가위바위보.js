var imageXY='0'; 

var dictionary={
    rock: '0',
    scissor: '-142px',
    paper: '-284px'
};

// var dictionary2={
//     '0': '바위',
//     '-142px': '가위',
//     '-284px': '보'
// };
//딕셔너리의 단점 key-value 형식이라 상호 보완 하려면 2개씩 만들어줘야댐


//1 : 多 표현가능
// ex)
// var dictionary={
//     rock: {
//         한국어: '바위',
//         값: '0',
//         영어: 'rock'
//     },
//     scissor: '-142px',
//     paper: '-284px'
// };

function computerChoice(imageXY){
    return Object.entries(dictionary).find(function(v){
        return v[1]===imageXY;
    })[0];
}
var interval;


function intervalMaker(){
    interval=setInterval(function(){
    if(imageXY===dictionary.rock){
        imageXY=dictionary.scissor;
    }else if(imageXY===dictionary.scissor){
        imageXY=dictionary.paper;
    }else{
        imageXY=dictionary.rock;
    }

    document.querySelector('#computer').style.background ='url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + imageXY + ' 0';
}, 100);
}

intervalMaker();

var pointTable={
    scissor: 1,
    rock: 0,
    paper: -1,
    가위: 1,
    바위: 0,
    보: -1,
};
var point=document.querySelector('#point');
var Dcount=0,Wcount=0,Lcount=0;
document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('click',function(){
        clearInterval(interval);
        setTimeout(function(){
            intervalMaker();
        },1000);
        var result=document.querySelector('#result');
        var myChoice=this.textContent;
        // var myChoice=this.btn.id;
        var myPoint=pointTable[myChoice];
        var computerPoint=pointTable[computerChoice(imageXY)];
        var pointDiv=myPoint-computerPoint;
        

        if(pointDiv===0){
            // console.log("draw");
            result.textContent="draw";
            Dcount++;
        }else if([-1,2].includes(pointDiv)){
            // console.log("win!");
            result.textContent="win";
            Wcount++;
        }else{
            // console.log("loose...");
            result.textContent="loose";
            Lcount++;
        }
        point.textContent=("Win : " +Wcount+" Draw : "+Dcount+" Loose : "+Lcount);
    });
});






