require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe stone crawl ranch come gesture person army gasp'; 
let testAccounts = [
"0x06171bda8596c4cc982e72f0512c5b56f42fc54bb4354d7cb3d0c740844b7ac5",
"0x34bf98f8e8f395616bf1c6902e3c6aaba719b5705933fb113ff412123524bb64",
"0xab7fde9537a6ba194909b9158e12d49a8de03d5db01800e9e1f20634bf850e2e",
"0x089364c9d39ef5ac5ae3c641a7d9da51e506c072c9dbbf5f4dc791764878176a",
"0x0b5a23c10dfd6a03c7726ef0a57a7ebb54d66ad7835ca399cb17680f039e1b9d",
"0x13e7240f4a1ccabc7702dca8c6b2dcc4752ab9354a44b24f90d36bd69cacce96",
"0xe405c81bd831ccf2f582dd3673a5ebd5165dfb51a4a0ca7164dc8fa48446bb6a",
"0x41fe3776f7efbd0bb44903c0b58dfb3fa5a93f97c7c835958ee1b6ea7195c7ac",
"0x138805a64d05389ce374f4b914e411161a18ce8ec4a63f8157beb472569940f6",
"0xf42c99067dbe9c705ab08d152be37a9ac1a79aec54f56514171946eb47a2fb7e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
