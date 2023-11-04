import { task } from 'hardhat/config';
import { deployLendingPoolAddressesProvider } from '../../helpers/contracts-deployments';
import { notFalsyOrZeroAddress, waitForTx } from '../../helpers/misc-utils';
import {
  ConfigNames,
  loadPoolConfig,
  getGenesisPoolAdmin,
  getEmergencyAdmin,
} from '../../helpers/configuration';
import { getParamPerNetwork, sendContractTx } from '../../helpers/contracts-helpers';
import { eNetwork } from '../../helpers/types';
import { getFirstSigner } from '../../helpers/contracts-getters';
import { formatEther } from 'ethers/lib/utils';

task(
  'full:deploy-address-provider',
  'Deploy address provider, registry and fee provider for dev enviroment'
)
  .addFlag('verify', 'Verify contracts at Etherscan')
  .addParam('pool', `Pool name to retrieve configuration, supported: ${Object.values(ConfigNames)}`)
  .addFlag('skipRegistry')
  .setAction(async ({ verify, pool, skipRegistry }, DRE) => {
    await DRE.run('set-DRE');
    const poolConfig = loadPoolConfig(pool);
    const { MarketId } = poolConfig;
    const signer = await getFirstSigner();
    console.log('Deployer:', await signer.getAddress(), formatEther(await signer.getBalance()));

    // 1. Deploy address provider and set genesis manager
    const addressesProvider = await deployLendingPoolAddressesProvider(MarketId, verify);

    // 2. Add to registry or setup a new one
    if (!skipRegistry) {
      const providerRegistryAddress = getParamPerNetwork(
        poolConfig.ProviderRegistry,
        <eNetwork>DRE.network.name
      );

      await DRE.run('add-market-to-registry', {
        pool,
        addressesProvider: addressesProvider.address,
        deployRegistry: !notFalsyOrZeroAddress(providerRegistryAddress),
      });
    }

    // 3. Set pool admins
    const poolAdmin = await getGenesisPoolAdmin(poolConfig);
    await waitForTx(sendContractTx(addressesProvider, 'setPoolAdmin', [poolAdmin]));

    const emergencyAdmin = await getEmergencyAdmin(poolConfig);
    await waitForTx(sendContractTx(addressesProvider, 'setEmergencyAdmin', [emergencyAdmin]));

    console.log('Pool Admin', await addressesProvider.getPoolAdmin());
    console.log('Emergency Admin', await addressesProvider.getEmergencyAdmin());
  });
