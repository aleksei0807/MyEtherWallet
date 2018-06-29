const state = {
  web3: {

  },
  network: {
    chainId: 0,
    RpcUrl: 'default rpc url',
    port: 8545,
    username: null,
    password: null
  },
  wallet: null,
  ABI: {
    ETH: [],
    ROP: [],
    hashAsKey: {name: '', address: '', ABI: []}
  },
  Tokens: {
    ETH: [],
    ROP: []
  },
  Transactions: {},
  Networks: {
    ETH: {},
    ROP: {}
  },
  Errors: {},
  homepage: {
    // Landing page sublink location
    sublink: 'about'
  },
  pageStates: {
    sendOffline: {
      processLocation: 'process1'
    },
    txSideMenu: {
      send: false,
      sendEth: false,
      sendOffline: false,
      swap: false,
      dapps: false,
      contract: false,
      interactContract: false,
      deployContract: false
    }
  }
}

export default {
  state
}
