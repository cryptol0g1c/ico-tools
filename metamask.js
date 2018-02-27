
/** 
 * Check if MetaMask is installed
*/
let checkInstalled = function (){
  if(typeof web3 === 'undefined' || !web3.currentProvider.isMetaMask)
    return false;
  else 
    return true;
};

/** 
 * Get MetaMask account list
*/
let getAccounts = function (){
  if(web3.eth.accounts.length == 0 || web3.eth.accounts == null)
    console.log("Accounts not found or MetaMask probably unlocked");
  else
    return web3.eth.accounts;
};

/**
 * Detect Network ID
 * "1": Main Net
 * "2": Morden
 * "3": Ropsten
 * "4": Rinkeby
 * "42": Kovan
 * other: unknown
 * @param {callback} cb 
 */
let getNetworkId = function(cb){
  web3.version.getNetwork((err, netId) => {
    if(err)
      cb(err)
    else
      cb(null, netId);
  });
};

/**
 * 
 * @param {from account} _from 
 * @param {to account} _to 
 * @param {amount to send in Ether} _amount 
 * @param {gas amount} _gas 
 * @param {data to send} _data 
 * @param {callback function} cb 
 */
let createTransaction = function(_from, _to, _amount, _gas, _data, cb) {

  if(_from === undefined || _to === undefined)
    cb("Missing Parameters");

  web3.eth.sendTransaction({
    from: _from,
    to: _to,
    value: web3.toWei(_amount || 0, "ether"),
    gasPrice: 1000000000,
    gas: _gas || 21000,
    data: _data || null
  }, (error, txHash) => {
    if(error)
      cb(error);
    else{
      cb(null, txHash);
    }
  });
};
