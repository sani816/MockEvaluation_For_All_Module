function sumAll(...num){
    return num.reduce((Acc,ele)=>Acc+ele,0)
}
console.log(sumAll(1,2,3,4))