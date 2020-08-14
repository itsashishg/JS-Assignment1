// Q2. Numbers in Strings

function numinStr(arrStr){
    let newArr=[];
    let len=arrStr.length;
   for(i=0;i<len;i++)
   {
    arr1 =  arrStr[i].split("") ;
    let arr1len=arr1.length;
        for(j = 0; j< arr1len;j++)
            {
                if(arr1[j] >="0" && arr1[j]<="9")
                {
                    newArr.push(arr1.join(""));
                    break;
                }
                

            }
   }
   return console.log(newArr);
}

numinStr(["1a","a","2b","b"]);
numinStr(["abc","abc10"]);
numinStr(["abc","ab10c","ab10c","bcd"]);