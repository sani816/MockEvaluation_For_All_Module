function createWallet(){
    let balance=0
    return{
        addMoney:function(amount){
            balance=balance+amount
            console.log("deposite:",amount)},
        CheckBalance:function(amount){
            console.log("after deposite all money total balance is:",balance)
        }    

        }
    }
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.CheckBalance();  // should show 700
