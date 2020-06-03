var body =document.body;
var table =document.createElement('table');
var horizon=[];
var vertical=[];
var turn='X';

var callBack=function(event){
    // console.log(event.target);

    var wLine=horizon.indexOf(event.target.parentNode);
    var wVold=vertical[wLine].indexOf(event.target);

    if(vertical[wLine][wVold].textContent !== ''){

    }else {
        vertical[wLine][wVold].textContent=turn;
        var fully=false;

        if(vertical[wLine][0].textContent===turn && vertical[wLine][1].textContent===turn && vertical[wLine][2].textContent===turn){
            fully=true;
        }
    
        if(vertical[0][wVold].textContent===turn && vertical[1][wVold].textContent===turn && vertical[2][wVold].textContent===turn){
            fully=true;
        }
        
        if(wLine-wVold===0){
            if(vertical[0][0].textContent===turn && vertical[1][1].textContent===turn && vertical[2][2].textContent===turn){
                fully=true;
            }
        }
        if(Math.abs(wLine-wVold)===2){
            if(vertical[0][2].textContent===turn && vertical[1][1].textContent===turn && vertical[2][0].textContent===turn){
                fully=true;
            }
        }

       
        if(vertical[0][0].textContent !=='' && vertical[0][1].textContent !=='' && vertical[0][2].textContent !=='' 
        && vertical[1][0].textContent !=='' && vertical[1][1].textContent !=='' && vertical[1][2].textContent !==''
        && vertical[2][0].textContent !=='' && vertical[2][1].textContent !=='' && vertical[2][2].textContent !==''){
            alert("무승부!");

            setTimeout(() => {
                for(i=0;i<3;i++){
               for(j=0;j<3;j++){
                   vertical[i][j].textContent='';
               }
           }
           turn='X';
           }, 1000);
        }
        // var draw=(chack) => chack!=='';


        if(fully){
            alert(turn+"님의 승리!");
            
            setTimeout(() => {
                 for(i=0;i<3;i++){
                for(j=0;j<3;j++){
                    vertical[i][j].textContent='';
                }
            }
            turn='X';
            }, 1000);
           
            // horizon.forEach(function (line){
            //     line.forEach(function(vold){
            //         vold.textContent='';
            //     })
            // })
        }else {
            if(turn=='X'){
            turn='O';
            }else{
            turn='X';
           }
        }
    }

};

for(i=0;i<3;i++){
    var line=document.createElement('tr');
    horizon.push(line);
    vertical.push([]);
        for(j=0;j<3;j++){
            var vold=document.createElement('td');
            vold.addEventListener('click',callBack);
            vertical[i].push(vold);
            line.appendChild(vold);
        }
    table.appendChild(line);
}
body.appendChild(table);