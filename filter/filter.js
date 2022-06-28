function userCreatedFilter(array,checkPositive){
    const resultArray = []
    for(let i=0;i<array.length;i++){
        if(checkPositive(array[i])){
            resultArray.push(array[i])
        }
    }
    return resultArray
}

function checkPositive(number){
    if(number >= 0){
        return true;
    }
    return false;
}

const numbers = [1,2,-1,-3,5,0,-1.-2]
const positives = userCreatedFilter(numbers,checkPositive);
console.log(positives);