// Q2. Hitting the Jackpot

function testJackpot2(arr){
    let flag = true;
    for(let i=1;i<arr.length;i++){
        if(arr[i]!=arr[i-1]) 
        flag = false;
    }
    return equal;
}

testJackpot(["@","@","@","@"]);
testJackpot(["abc","abc","abc","abc"]);