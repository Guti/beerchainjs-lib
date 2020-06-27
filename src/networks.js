module.exports = {
    beerchain: {
        messagePrefix: '\x15Beerchain Signed Message:\n',
        bech32: 'bc',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x32,
        scriptHash: 0x3a,
        wif: 0x80
    },
    beerchain_testnet: {
        messagePrefix: '\x15Beerchain Signed Message:\n',
        bech32: 'tb',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x78,
        scriptHash: 0x6e,
        wif: 0xef
    }
}
