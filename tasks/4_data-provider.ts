import { task } from 'hardhat/config';
import { deployAaveProtocolDataProvider } from '../../helpers/contracts-deployments';
import { exit } from 'process';
import { getFirstSigner, getLendingPoolAddressesProvider } from '../../helpers/contracts-getters';
import { formatEther } from 'ethers/lib/utils';

task('full:data-provider', 'Initialize lending pool configuration.')
  .addFlag('verify', 'Verify contracts at Etherscan')
  .setAction(async ({ verify }, localBRE) => {
    try {
      await localBRE.run('set-DRE');
      const signer = await getFirstSigner();
      console.log('Deployer:', await signer.getAddress(), formatEther(await signer.getBalance()));

      const addressesProvider = await getLendingPoolAddressesProvider();
      await deployAaveProtocolDataProvider(addressesProvider.address, verify);
    } catch (err) {
      console.error(err);
      exit(1);
    }
  });
