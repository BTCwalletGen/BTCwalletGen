// genFromMnemonic = () => {
//     const mnemonic = this.state.mnemonic;
//     const seed = bip39.mnemonicToSeed(mnemonic);
//     const bitcoinNetwork = bitcoin.networks.bitcoin;
//     const hdMaster = bitcoin.HDNode.fromSeedBuffer(seed, bitcoinNetwork);
//     const key = hdMaster.derivePath(`m/0`);
//     const address = key.keyPair.getAddress();

//     console.log('----- Generate from mnemonic -----');
//     console.log(`-> mnemonic: ${mnemonic}`);
//     console.log(`address: ${address}, key: ${key.keyPair.toWIF()}`);
//}

// decrypt38 = (encrypted) => {
//     console.log('decrypting key...');
//     const decryptedKey = bip38.decrypt(encrypted, 'tabsuspended', (status) => {
//         console.log(`progress: ${status.percent}%`);
//     });
//     console.log('decrypted key: ', wif.encode(0x80, decryptedKey.privateKey, decryptedKey.compressed));
//     // const keyPair = bitcoin.HDNode.fromSeedBuffer(decryptedKey);
//     // console.log('key: ', keyPair.keyPair.toWIF());
// }