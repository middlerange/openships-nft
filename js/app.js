// Number input counter
function increaseValue() {
  var value = parseInt(document.getElementById('quantity').value)
  if (value >= 10) return
  document.getElementById('quantity').setAttribute('value', value + 1)
}

function decreaseValue() {
  var value = parseInt(document.getElementById('quantity').value)
  if (value <= 1) return
  document.getElementById('quantity').setAttribute('value', value - 1)
}

// Web3
let wallet = null
let sos_contract = null
let nft_contract = null
var total_supply_label
var sale_status
var mint_btn
var approve_spending_btn
var public_sale_active = false
const price = 10000000
const network = 'rinkeby'
const sos_contract_address = '0xdB995C2189A3adB23b2b0E6Feb59c7b96F5bD8D0'
const nft_contract_address = '0x302AB627932625a4F64784860f2210a3994FdCa7'
window.addEventListener('load', async () => {
  total_supply_label = document.getElementById('total_supply_label')
  sale_status = document.getElementById('sale_status')
  mint_btn = document.getElementById('mint_btn')
  approve_spending_btn = document.getElementById('approve_btn')
  if (typeof window.ethereum !== 'undefined') {
    window.web3instance = new Web3(window.ethereum)
  } else {
    alert(
      'No Ethereum interface found. Please install the Metamask extension.'
    )
    return
  }
  try {
    await window.web3instance.eth.net
      .getNetworkType()
      .then(function (current_network) {
        if (network != current_network) {
          throw (
            'Wrong network, please connect your Metamask to the ' +
            current_network +
            ' network and refresh the page.'
          )
        }
      })
  } catch (err) {
    alert(err)
    return
  }
  try {
    await loadSosContract().then(function (loaded_contract) {
      sos_contract = loaded_contract
    })
  } catch (err) {
    alert(err)
    return
  }
  try {
    await loadNftContract().then(function (loaded_contract) {
      nft_contract = loaded_contract
    })
  } catch (err) {
    alert(err)
    return
  }
  try {
    await getTotalSupply(nft_contract).then(function (totalSupply) {
      total_supply_label.innerHTML = totalSupply + '/' + 5555 + ' minted'
    })
  } catch (err) {
    alert(err)
    return
  }
  try {
    await getPublicSaleActive(nft_contract).then(function (response) {
      public_sale_active = response
    })
  } catch (err) {
    alert(err)
    return
  }
  if (public_sale_active == true) {
    sale_status.innerHTML = 'Public Sale Active!'
  } else {
    sale_status.innerHTML = 'Sale Inactive.'
  }
  mint_btn.addEventListener('click', function () {
    if (public_sale_active == false) {
      alert(
        'Sales are currently disabled, please check back again later.'
      )
    } else {
      if (wallet != null) {
        var quantity = document.getElementById('quantity').value
        if (public_sale_active == true) {
          mint(nft_contract, quantity, wallet)
        }
      } else {
        signIn()
      }
    }
  })
  approve_spending_btn.addEventListener('click', function () {
    if (public_sale_active == false) {
      alert(
        'Sales are currently disabled, please check back again later.'
      )
    } else {
      if (wallet != null) {
        approve_spending(sos_contract, wallet)
      } else {
        signIn()
      }
    }
  })
})
async function loadSosContract() {
  const abi = JSON.parse(
    '[  {   "anonymous": false,   "inputs": [    {     "indexed": true,     "internalType": "address",     "name": "owner",     "type": "address"    },    {     "indexed": true,     "internalType": "address",     "name": "spender",     "type": "address"    },    {     "indexed": false,     "internalType": "uint256",     "name": "value",     "type": "uint256"    }   ],   "name": "Approval",   "type": "event"  },  {   "anonymous": false,   "inputs": [    {     "indexed": true,     "internalType": "address",     "name": "from",     "type": "address"    },    {     "indexed": true,     "internalType": "address",     "name": "to",     "type": "address"    },    {     "indexed": false,     "internalType": "uint256",     "name": "value",     "type": "uint256"    }   ],   "name": "Transfer",   "type": "event"  },  {   "inputs": [    {     "internalType": "address",     "name": "spender",     "type": "address"    },    {     "internalType": "uint256",     "name": "amount",     "type": "uint256"    }   ],   "name": "approve",   "outputs": [    {     "internalType": "bool",     "name": "",     "type": "bool"    }   ],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [    {     "internalType": "address",     "name": "spender",     "type": "address"    },    {     "internalType": "uint256",     "name": "subtractedValue",     "type": "uint256"    }   ],   "name": "decreaseAllowance",   "outputs": [    {     "internalType": "bool",     "name": "",     "type": "bool"    }   ],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [    {     "internalType": "address",     "name": "spender",     "type": "address"    },    {     "internalType": "uint256",     "name": "addedValue",     "type": "uint256"    }   ],   "name": "increaseAllowance",   "outputs": [    {     "internalType": "bool",     "name": "",     "type": "bool"    }   ],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [    {     "internalType": "address",     "name": "recipient",     "type": "address"    },    {     "internalType": "uint256",     "name": "amount",     "type": "uint256"    }   ],   "name": "transfer",   "outputs": [    {     "internalType": "bool",     "name": "",     "type": "bool"    }   ],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [    {     "internalType": "address",     "name": "sender",     "type": "address"    },    {     "internalType": "address",     "name": "recipient",     "type": "address"    },    {     "internalType": "uint256",     "name": "amount",     "type": "uint256"    }   ],   "name": "transferFrom",   "outputs": [    {     "internalType": "bool",     "name": "",     "type": "bool"    }   ],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [],   "stateMutability": "nonpayable",   "type": "constructor"  },  {   "inputs": [    {     "internalType": "address",     "name": "owner",     "type": "address"    },    {     "internalType": "address",     "name": "spender",     "type": "address"    }   ],   "name": "allowance",   "outputs": [    {     "internalType": "uint256",     "name": "",     "type": "uint256"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [    {     "internalType": "address",     "name": "account",     "type": "address"    }   ],   "name": "balanceOf",   "outputs": [    {     "internalType": "uint256",     "name": "",     "type": "uint256"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [],   "name": "decimals",   "outputs": [    {     "internalType": "uint8",     "name": "",     "type": "uint8"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [],   "name": "name",   "outputs": [    {     "internalType": "string",     "name": "",     "type": "string"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [],   "name": "symbol",   "outputs": [    {     "internalType": "string",     "name": "",     "type": "string"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [],   "name": "totalSupply",   "outputs": [    {     "internalType": "uint256",     "name": "",     "type": "uint256"    }   ],   "stateMutability": "view",   "type": "function"  } ]'
  )
  return await new window.web3instance.eth.Contract(abi, sos_contract_address)
}
async function loadNftContract() {
  const abi = JSON.parse(
    '[  {   "anonymous": false,   "inputs": [    {     "indexed": true,     "internalType": "address",     "name": "owner",     "type": "address"    },    {     "indexed": true,     "internalType": "address",     "name": "approved",     "type": "address"    },    {     "indexed": true,     "internalType": "uint256",     "name": "tokenId",     "type": "uint256"    }   ],   "name": "Approval",   "type": "event"  },  {   "anonymous": false,   "inputs": [    {     "indexed": true,     "internalType": "address",     "name": "owner",     "type": "address"    },    {     "indexed": true,     "internalType": "address",     "name": "operator",     "type": "address"    },    {     "indexed": false,     "internalType": "bool",     "name": "approved",     "type": "bool"    }   ],   "name": "ApprovalForAll",   "type": "event"  },  {   "anonymous": false,   "inputs": [    {     "indexed": true,     "internalType": "address",     "name": "previousOwner",     "type": "address"    },    {     "indexed": true,     "internalType": "address",     "name": "newOwner",     "type": "address"    }   ],   "name": "OwnershipTransferred",   "type": "event"  },  {   "anonymous": false,   "inputs": [    {     "indexed": true,     "internalType": "address",     "name": "from",     "type": "address"    },    {     "indexed": true,     "internalType": "address",     "name": "to",     "type": "address"    },    {     "indexed": true,     "internalType": "uint256",     "name": "tokenId",     "type": "uint256"    }   ],   "name": "Transfer",   "type": "event"  },  {   "inputs": [    {     "internalType": "address",     "name": "to",     "type": "address"    },    {     "internalType": "uint256",     "name": "tokenId",     "type": "uint256"    }   ],   "name": "approve",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [    {     "internalType": "uint256",     "name": "_quantity",     "type": "uint256"    }   ],   "name": "mint",   "outputs": [],   "stateMutability": "payable",   "type": "function"  },  {   "inputs": [    {     "internalType": "address",     "name": "_to",     "type": "address"    },    {     "internalType": "uint256",     "name": "_quantity",     "type": "uint256"    }   ],   "name": "mintByOwner",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [],   "name": "pauseSale",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [],   "name": "renounceOwnership",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [    {     "internalType": "address",     "name": "from",     "type": "address"    },    {     "internalType": "address",     "name": "to",     "type": "address"    },    {     "internalType": "uint256",     "name": "tokenId",     "type": "uint256"    }   ],   "name": "safeTransferFrom",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [    {     "internalType": "address",     "name": "from",     "type": "address"    },    {     "internalType": "address",     "name": "to",     "type": "address"    },    {     "internalType": "uint256",     "name": "tokenId",     "type": "uint256"    },    {     "internalType": "bytes",     "name": "_data",     "type": "bytes"    }   ],   "name": "safeTransferFrom",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [    {     "internalType": "address",     "name": "operator",     "type": "address"    },    {     "internalType": "bool",     "name": "approved",     "type": "bool"    }   ],   "name": "setApprovalForAll",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [    {     "internalType": "string",     "name": "_URI",     "type": "string"    }   ],   "name": "setBaseURI",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [    {     "internalType": "address",     "name": "sos",     "type": "address"    }   ],   "name": "setSosAddress",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [],   "name": "startSale",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [    {     "internalType": "address",     "name": "from",     "type": "address"    },    {     "internalType": "address",     "name": "to",     "type": "address"    },    {     "internalType": "uint256",     "name": "tokenId",     "type": "uint256"    }   ],   "name": "transferFrom",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [    {     "internalType": "address",     "name": "newOwner",     "type": "address"    }   ],   "name": "transferOwnership",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [],   "name": "withdrawAll",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [    {     "internalType": "uint256",     "name": "_amount",     "type": "uint256"    }   ],   "name": "withdrawSos",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function"  },  {   "inputs": [],   "stateMutability": "nonpayable",   "type": "constructor"  },  {   "inputs": [    {     "internalType": "address",     "name": "owner",     "type": "address"    }   ],   "name": "balanceOf",   "outputs": [    {     "internalType": "uint256",     "name": "",     "type": "uint256"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [],   "name": "baseURI",   "outputs": [    {     "internalType": "string",     "name": "",     "type": "string"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [    {     "internalType": "uint256",     "name": "tokenId",     "type": "uint256"    }   ],   "name": "getApproved",   "outputs": [    {     "internalType": "address",     "name": "",     "type": "address"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [],   "name": "hasSaleStarted",   "outputs": [    {     "internalType": "bool",     "name": "",     "type": "bool"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [    {     "internalType": "address",     "name": "owner",     "type": "address"    },    {     "internalType": "address",     "name": "operator",     "type": "address"    }   ],   "name": "isApprovedForAll",   "outputs": [    {     "internalType": "bool",     "name": "",     "type": "bool"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [],   "name": "MAX_SALE",   "outputs": [    {     "internalType": "uint256",     "name": "",     "type": "uint256"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [],   "name": "MAX_TOKENS",   "outputs": [    {     "internalType": "uint256",     "name": "",     "type": "uint256"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [],   "name": "name",   "outputs": [    {     "internalType": "string",     "name": "",     "type": "string"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [],   "name": "owner",   "outputs": [    {     "internalType": "address",     "name": "",     "type": "address"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [    {     "internalType": "uint256",     "name": "tokenId",     "type": "uint256"    }   ],   "name": "ownerOf",   "outputs": [    {     "internalType": "address",     "name": "",     "type": "address"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [],   "name": "price",   "outputs": [    {     "internalType": "uint256",     "name": "",     "type": "uint256"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [],   "name": "SosToken",   "outputs": [    {     "internalType": "contract ISos",     "name": "",     "type": "address"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [    {     "internalType": "bytes4",     "name": "interfaceId",     "type": "bytes4"    }   ],   "name": "supportsInterface",   "outputs": [    {     "internalType": "bool",     "name": "",     "type": "bool"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [],   "name": "symbol",   "outputs": [    {     "internalType": "string",     "name": "",     "type": "string"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [    {     "internalType": "uint256",     "name": "tokenId",     "type": "uint256"    }   ],   "name": "tokenURI",   "outputs": [    {     "internalType": "string",     "name": "",     "type": "string"    }   ],   "stateMutability": "view",   "type": "function"  },  {   "inputs": [],   "name": "totalSupply",   "outputs": [    {     "internalType": "uint256",     "name": "",     "type": "uint256"    }   ],   "stateMutability": "view",   "type": "function"  } ]'
  )
  return await new window.web3instance.eth.Contract(abi, nft_contract_address)
}
async function getTotalSupply(contract) {
  return await contract.methods.totalSupply().call()
}
async function getPublicSaleActive(contract) {
  return await contract.methods.hasSaleStarted().call()
}
async function signIn() {
  const getWallet = await window.ethereum.enable().catch(function (error) {
    alert(error.message)
    throw error
  })
  wallet = getWallet[0]
}
async function approve_spending(contract, wallet) {
  try {
    const gasAmount = await contract.methods
      .approve(nft_contract_address, 10 * price)
      .estimateGas({
        from: wallet,
        value: 0,
      })
    contract.methods.approve(nft_contract_address, 10 * price).send({
        from: wallet,
        value: 0,
        gas: String(gasAmount),
      },
      function (error, txhash) {
        if (error) {
          alert(error.message)
        } else {
          alert('Transaction initiated.')
        }
      }
    )
  } catch (err) {
    alert(err.message)
  }
}
async function mint(contract, number_of_tokens, wallet) {
  const price = 0
  try {
    const gasAmount = await nft_contract.methods
      .mint(number_of_tokens)
      .estimateGas({
        from: wallet,
        value: 0,
      })
    nft_contract.methods.mint(number_of_tokens).send({
        from: wallet,
        value: 0,
        gas: String(gasAmount),
      },
      function (error, txhash) {
        if (error) {
          alert(error.message)
        } else {
          alert('Transaction initiated.')
        }
      }
    )
  } catch (err) {
    alert(err.message)
  }
}