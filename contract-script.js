const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(''));

const ABI = [];
const contractAddr = '';

const MyContract = new web3.eth.Contract(ABI, contractAddr);


MyContract.methods.myMethod().call(function(e, result){
    console.log(result);
});
