function ramdomimage(){
    let img1 = Math.random()*5+1;
    let d1=Math.floor(img1);
    let img2 = Math.random()*5+1;
    let d2=Math.floor(img2);
    let a="images/dice"+d1+".png"
    let b="images/dice"+d2+".png"
    document.querySelector('#dice1').setAttribute('src',a);
    document.querySelector('#dice2').setAttribute('src',b);
    if(d1>d2){
        document.querySelector(".win").innerHTML='Player1 win'
    }
    else if(d2>d1){
        document.querySelector(".win").innerHTML='Player2 win'
    }
    else if(d2==d1){
        document.querySelector(".win").innerHTML='Draw'
    }
    
}
