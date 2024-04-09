const { ethers } = require('ethers');

// Создание провайдера с использованием Infura
const provider = new ethers.providers.InfuraProvider('mainnet', 'ваш_Infura_API_ключ');

provider.getBlockNumber().then(blockNumber => {
    console.log('Номер последнего блока:', blockNumber);
});

const blockNumber = 123456; // Номер блока, который вы хотите получить
provider.getBlock(blockNumber).then(block => {
    console.log('Информация о блоке:', block);
});

const walletAddress = 'ваш_адрес_кошелька';
provider.getBalance(walletAddress).then(balance => {
    console.log('Баланс кошелька:', ethers.utils.formatEther(balance));
});

   provider.getTransactionCount(walletAddress).then(count => {
       console.log('Количество транзакций:', count);
   });