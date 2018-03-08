const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(''));

const deployedBlock;
const address = '';
const abi = [];

const instance = new web3.eth.Contract(abi, address);

function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

instance.getPastEvents('allEvents', {fromBlock: deployedBlock}, (e,d)=>{
    for (let i = 0; i < d.length; i++) {
        sleep(150, function() {
            console.log("\n --- On: ", Date.now());
            console.log(d[i]);
          })        
    }
});
