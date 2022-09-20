


function primeBaaKiNa(num){
    let factors=0;
    for(i=1;i<=num;i++){
if(num%i==0){
    factors++;
}
    }
    if(factors==2){
        return true;
    }
return false;
}
let answer=primeBaaKiNa(13);
if(answer=true){
console.log("Prime Ba");}
else{
    console.log("Prime Na Ba ho Kahe Pareshan Bani");
}

