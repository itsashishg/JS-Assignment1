// Q2. Divides Evenly

function dividesEvenly(a,b)
 {
if(a>=b){
        return (a/b)%2==0?true:false;
    }
    else{
        return;
    }
}
console.log(dividesEvenly(98,7));
console.log(dividesEvenly(85,5));
console.log(dividesEvenly(83,4));