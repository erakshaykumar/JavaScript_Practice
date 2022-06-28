const arr = [10,20,30,40,50];

const sumReducer = (accumalator, currentItem)=> accumalator + currentItem;

const reduce = (reducer,initialValue, array)=> {
    let acc = initialValue;
    for(let item in array){
        let currentItem = array[item];
        acc = reducer(acc,currentItem);
    }
    return acc;
}

const sum1 = reduce(sumReducer, 0,arr);
console.log(sum1)