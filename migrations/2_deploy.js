const FerrariToken = artifacts.require('FerrariToken');

require('@openzeppelin/test-helpers/configure')({ provider: web3.currentProvider, environment: 'truffle' });

module.exports = async function (deployer, network, accounts) {

  await deployer.deploy(FerrariToken);

};
