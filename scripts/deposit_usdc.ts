import { ethers, network } from 'hardhat';

/**
 * The script demonstrates how to deposit USDC to the Lending Pool deployed on Polygon ZkEVM Testnet.
 *
 * npx hardhat --network zkEvmTestnet run deposit_usdc.ts
 */
async function main() {
  console.log('Network:', network.name);

  const [signer] = await ethers.getSigners();

  const chainId = network!.config!.chainId;
  if (![1442].includes(chainId || 0)) {
    throw new Error(`Unsupported network ${chainId}`);
  }

  // USDC on Polygon ZkEVM Testnet
  const usdcContract = new ethers.Contract(
    '0xB2f9997D08384a6a5a9d2eaCCe6dbf620a6a2A4d',
    ['function approve(address spender, uint256 amount)'],
    signer
  );

  // LendingPool on Polygon ZkEVM Testnet
  const lpContract = new ethers.Contract(
    '0x39B270AaaB1D717C6C048C40484dCB0C0d934e70',
    ['function deposit(address asset,uint256 amount,address onBehalfOf,uint16 referralCode)'],
    signer
  );

  const approveTx = await usdcContract.approve(lpContract.address, '100');
  console.log('approveTx:', approveTx.hash);

  const depositTx = await lpContract.deposit(usdcContract.address, '100', signer.address, 0);
  console.log('depositTx:', depositTx.hash);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
