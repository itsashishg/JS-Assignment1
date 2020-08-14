// Q3. Remove Duplicates from an Array

const removeDups = (arr) => {
    let newArr = [];
    let j=0;
    for(let i=0; i<arr.length; i++){
        if( newArr.includes(arr[i])){
            continue;
        }
        else{
            newArr[j] = arr[i];
            j++;
        }
    }
    return newArr;
}

let arr = ["John", "Taylor", "John", "Steve"];
console.log(arr);