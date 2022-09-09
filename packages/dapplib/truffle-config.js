require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remember mistake hockey kitchen success genre'; 
let testAccounts = [
"0xed0918157155f9a9329116d26d1b6ac22b27eba3256a2e40c6d99708a4f6d7fa",
"0xcec89f9f4db6efb827544d18112e7e09d3c44dddfea2bde48c1f23cac27b68e6",
"0x4443cdd112aca507171190d4d827eb4186d0943aecf9c7e28d957c1f4e780ccb",
"0xd8afb63ec00583474ea8468dff5a8b313e660298779916a76db7f319e4ac6514",
"0x6d88fd784021e604721b3f6b7c9178d579a4571dfa4ba3290bebbd7498bc19f2",
"0x61e9d26e4abbce1253691dcaa345bc8fac9d048a361f1338ba3e02dfa62599e6",
"0xca11d0eed920cb2e392ae87304d03e84278a45fd99227a8567a26b3aa40b8912",
"0x636bde7e067e9ea2f4bccc7a86a7495c6a4bc0250bf8adcf5268802774931b00",
"0x06095bdd7d831eb5f2cb6e997ad96a4acd02b223fc3979c83e044d8eddb89bc7",
"0x4d786669e74f28e308c20e681c1e21a63cf0e5e142ea1fd756475683a54e68a5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


