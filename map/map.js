function userCreatedMap(array){
    const resultArray = [];
    for(let i=0;i<array.length;i++){
        resultArray.push(squareNumber(array[i]))
    }

    return resultArray;
}

function squareNumber(number){
    return number*number;
}

const array = [2,4,6,8,10];
const result = userCreatedMap(array);
console.log(result);
