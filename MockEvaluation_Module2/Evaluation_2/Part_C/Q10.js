function counter(){
    let count=0
    return{
     increment:function(){
             count++
             console.log("curent count",count)},
      }       
    }
const c = counter();
c.increment();
c.increment(); 
c.increment();
