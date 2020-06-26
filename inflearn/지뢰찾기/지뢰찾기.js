    var tbody=document.querySelector('#table tbody');

document.querySelector('#exec').addEventListener('click',function(){
    tbody.innerHTML='';

    var hor=parseInt(document.querySelector('#hor').value);
    var ver=parseInt(document.querySelector('#ver').value);
    var mine=parseInt(document.querySelector('#mine').value);

    // console.log(hor,ver,mine);

    //지뢰 위치 뽑기
    var lottoArr=Array(hor*ver).fill().map(function(value,index){
        return index;
    })
    
    var shuffle=[];
    
    while(lottoArr.length>(100-mine)){
        var moveValue=lottoArr.splice(Math.floor(Math.random()*lottoArr.length),1)[0];
        shuffle.push(moveValue);
    
    }

    // console.log(shuffle);

    var dataset=[];

    for(var i=0;i<ver;i++){
        var arr=[];
        var tr=document.createElement('tr');
        dataset.push(arr);
        for(var j=0;j<hor;j++){
            arr.push(1);
            var td=document.createElement('td');
            td.addEventListener('contextmenu',function(e){
                e.preventDefault();
                var Ptr=e.currentTarget.parentNode;
                var Ptbody=e.currentTarget.parentNode.parentNode;
                var box=Array.prototype.indexOf.call(Ptr.children,e.currentTarget);
                var line=Array.prototype.indexOf.call(Ptbody.children,Ptr);
                if(e.currentTarget.textContent==='' || e.currentTarget.textContent==='X'){
                    e.currentTarget.textContent='!';
                    
                }else if(e.currentTarget.textContent==='!'){
                    e.currentTarget.textContent='?';
                    
                }else if(e.currentTarget.textContent==='?'){
                    if(dataset[line][box]===1){
                        e.currentTarget.textContent='';
                         
                    }else if(dataset[line][box]==='X'){
                        e.currentTarget.textContent='X';
                    }
                     
                }


                
            });
            td.addEventListener('click', function(e){
                var Ptr=e.currentTarget.parentNode;
                var Ptbody=e.currentTarget.parentNode.parentNode;
                var box=Array.prototype.indexOf.call(Ptr.children,e.currentTarget);
                var line=Array.prototype.indexOf.call(Ptbody.children,Ptr);
                if(dataset[line][box]==='X'){
                    e.currentTarget.textContent='펑!';
                }else{
                    var corner=[
                        dataset[line][box-1],dataset[line][box+1],
                    ];
                    if(dataset[line-1]){
                        corner=corner.concat([dataset[line-1][box-1],dataset[line-1][box],dataset[line-1][box+1]])
                    }
                    if(dataset[line+1]){
                        corner=corner.concat([dataset[line+1][box-1],dataset[line+1][box],dataset[line+1][box+1]])
                    }
                    e.currentTarget.textContent=corner.filter(function(v){
                       return v==='X'
                    }).length;


                    
                }
            })
            tr.appendChild(td);
            td.textContent;
        }
        tbody.appendChild(tr);
    }
//지뢰 심기
    for(var k=0;k<shuffle.length;k++){
        var y=Math.floor(shuffle[k]/10);
        var x=shuffle[k]%10;
        // console.log(y,x);
        tbody.children[y].children[x].textContent='X';
        dataset[y][x]='X';
    }
    // console.log(dataset);
});

