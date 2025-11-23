//1.
let nums = [10, 3, 7, 20, 13, 2];
const map=nums.map((nums)=>nums*nums)
console.log(map)

//2.
function isPrime(nums){
    if(nums<=1)return false
    for(i=2;i<nums;i++)
        if(nums%i===0) return false;
    return true
    
}
let prime=nums.filter(isPrime)
console.log(prime)

//3.
const reduce=nums.reduce((acc,ele)=>acc+ele,0)
console.log(reduce)

//4.
const sort=nums.sort((a,b)=>b-a)
console.log(sort)