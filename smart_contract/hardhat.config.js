// https://eth-goerli.g.alchemy.com/v2/I4rgbWLugxuXH0QccGwvh9r2CNk_z1vs

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/I4rgbWLugxuXH0QccGwvh9r2CNk_z1vs',
      accounts: ['7c633b4ec3a4240958fc39b5acd83b2aa82b70941e0d62f491d4941e0a96a031']
    }
  }
}