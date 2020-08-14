// Q1. Count instances of a Character in a String


function charCount(l, str)
{
    var count = 0;
    for (var i = 0; i < str.length;i++)
    {
        if(str.charAt(i) == l)
        {
            count += 1;
        }
    }
    return count;
}
console.log(charCount('A','qwerty'));