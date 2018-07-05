import nodeList from '@/configs/networks'
const state = {
  web3: {},
  network: {
    chainId: 1,
    RpcUrl: 'https://api.myetherwallet.com/eth',
    port: 80,
    username: null,
    password: null,
    tokens: [],
    contracts: []
  },
  wallet: null,
  Transactions: {},
  Networks: nodeList,
  Errors: {},
  online: true,
  pageStates: {
    interface: {
      sendOffline: 'genInfo',
      sideMenu: 'send'
    }
  }
}

export default state
