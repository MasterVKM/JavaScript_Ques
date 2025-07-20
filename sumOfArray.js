function sumArrays(arr)
{
    let sum = 0;
    for(let i =0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
console.log(sumArrays([11,10,0,100,19]));