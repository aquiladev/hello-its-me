# hello-its-me

[ETHLisbon](https://ethlisbon.org/) project

[![Watch the video](https://i9.ytimg.com/vi/xAbncgDglkI/mq1.jpg?sqp=CLT7mqoG-oaymwEmCMACELQB8quKqQMa8AEB-AGuBoAC4AOKAgwIABABGD8gYChyMA8=&rs=AOn4CLCtM7GgTJm0cG7BCvVI05YBCfpa6Q)](https://youtu.be/xAbncgDglkI)

## [Bounties](https://eth-lisbon.notion.site/Bounties-6c70204086d846e49ee14c34b4856b81)
- Polygon
    - Bounty #2 - Polygon zkEVM Defi Challenge
- Chronicle Protocol
    - Bounty #2 - Integrate a Chronicle Oracle
    - Bounty #3 - Build with a Chronicle Oracle on The Polyogon zkEVM
- CoreDAO
    - Bounty #1 - Build on Core

## Chronicle integration
The protocol uses Chronicle Oracle for reserves on Polygon zkEVM Testnet
> [ChroniclePriceFeed](https://github.com/aquiladev/hello-its-me/blob/main/contracts/misc/ChroniclePriceFeed.sol)
>
> 0x13482369bCaa250CBb31eEF8Ff89d1bf4E4158A4

https://testnet-zkevm.polygonscan.com/address/0x13482369bCaa250CBb31eEF8Ff89d1bf4E4158A4#code

## Polygon zkEVM Testnet deployment

Reserves:
- USDC - 0xB2f9997D08384a6a5a9d2eaCCe6dbf620a6a2A4d
- USDT - 0x2Fff06CCAd2b293FE3E0AD6Fb8b28ad2297a67Aa
- WETH - 0xe911c4A3A56bb6Dd51f4fA65DFeA9A58E6DCcBC4

Deployer: [0x83AD6258691d485139b20998c2BE2c6120Fca06A](https://testnet-zkevm.polygonscan.com/address/0x83ad6258691d485139b20998c2be2c6120fca06a)


```
LendingPoolAddressesProviderRegistry: 0x95F9A593a2097ED3C76BC366C2A75602d0af98bB
LendingPoolAddressesProvider: 0x2f6e607ac3990D2beAc2eC42014856f222a97ceA
ReserveLogic: 0x256Cd403755Fc4362e62691aAa2C04538c56f851
GenericLogic: 0x2a8a9aD29c1D85a53c2Ab24a69B8449f64B356f2
ValidationLogic: 0xe913547C77d77520719A44eD5A83382a59631541
LendingPoolImpl: 0x26Ae2b78BdD92b68DB5b86debe7Ecc3A8548Cff0
LendingPool: 0x39B270AaaB1D717C6C048C40484dCB0C0d934e70
LendingPoolConfigurator: 0x7d91f80591393d64f2739d1BF4DE5E6a5DB5Cec0
LendingPoolConfiguratorImpl: 0x228518C0E586F3298498a53288b7D090478F4Eaa
StableAndVariableTokensHelper: 0xFf1b38E983EADCD78458f83CE500684571F9cF16
ATokensAndRatesHelper: 0xA53Dff94928Ea91a2d41b92d6E0A4E32DE19b864
AToken: 0x3401E545dBebf97Dc89D6e94Ce628f3ca9beacaa
StableDebtToken: 0x3A834126AD5B6FbfE096A4663c21f6dc21197E84
VariableDebtToken: 0xeFCCf8D75657A5A7452080CD5FAe68444c364530
PriceFeed: 0x13482369bCaa250CBb31eEF8Ff89d1bf4E4158A4
AaveOracle: 0x6aBc96586B6d3332406B0DB06FA95006DfD8BA71
LendingRateOracle: 0x9E2d5F4d466B8a54d8CBa3E019113183d9ebeF7b
AaveProtocolDataProvider: 0xF5746C65989707Ce7f57cC9E051f655489086786
StakingConfigurator: 0x09151aA78D967ed7A3fF4256bCBe2C1C028374E5
StakingConfiguratorImpl: 0x3e3456E50Fa8dDDCCC38Ed4Dd78Db8f343b31107
TODOToken: 0xd1f54627D7d455F2960Fed51f16E187F80256dc4
MultiFeeDistribution: 0xfe30E4dCcB721ec58c0Ab16dE15C9fb95b1509A7
MultiFeeDistributionImpl: 0x2d03c29D4EE35375562D674D5D69c9A7bcDE1bd8
MerkleDistributor: 0x8A67E0743780F1850A2CF90A3739E022802C865d
ChefIncentivesController: 0xB7ea0cfDe4d91DCef761Af3466Ee01c24e7F864b
ChefIncentivesControllerImpl: 0x909A1ba812d7bC417408c87d5D990C4f9e2C6449
MasterChef: 0x491a4d67E53EC8b1C77209be4D6E8Eaa48AA5f72
MasterChefImpl: 0x94C9549a457314AecF41F9af4C940EF45C2b3e1d
TokenVesting: 0x18422F6656Ed2C28B880f141C7f0e193E211AEa5
ProtocolRevenueDistribution: 0x2adD23635c80f6d664a1c2A6ce1c19DbAC5e01d6
ProtocolRevenueDistributionImpl: 0x343660D8a948c386d8b60Ec46DCDe39602711959
WETHMocked: 0xE5d487CE863a1837ec175c20281f8E0Ca73bDd98
WETHGateway: 0x117C8B4a5f24D1b400715b2A2F989730dE87346a
DefaultReserveInterestRateStrategy: 0x1b8512294bf9CBa23E512048B3217FB7fA0314E6
rateStrategyStableOne: 0x81f9df55B76782baC2A6DA49C9e25cCF1161A50b
rateStrategyWETH: 0x1b8512294bf9CBa23E512048B3217FB7fA0314E6
LendingPoolCollateralManager: 0x05534568115c73fA1287d58d1988630D8cD58128
LendingPoolCollateralManagerImpl: 0x05534568115c73fA1287d58d1988630D8cD58128
WalletBalanceProvider: 0xeA8f598DDbef5F13CF72c66A597a5CB6E920DE4b
UiPoolDataProvider: 0xFB63738615Acf806799AA4a50DD9787df656179e 
```


## Core Testnet deployment

Reserves:
- USDC - 0x086a532583CdF6d9666c978Fa153B25816488CBb
- USDT - 0x9A6D17e06DB549ce12F4b351E132821F6689947a
- WCORE - 0x91d715F6158Fc108A39b334Ed2c8D5A264bF4b5c

Deployer: [0x83AD6258691d485139b20998c2BE2c6120Fca06A](https://scan.test.btcs.network/address/0x83AD6258691d485139b20998c2BE2c6120Fca06A)

```
LendingPoolAddressesProviderRegistry: 0x52Efe025CEea8Cfd8dCF5dc7017Fa03B7080c94e
LendingPoolAddressesProvider: 0x5E3DFc898a4c95C0B0CE747aeDDaCFd0729bad64
ReserveLogic: 0x75197aB09bF89071254544C04C7b6560E73d1e59
GenericLogic: 0x42C43801745e0C8a703c2c034B48180A30dDA241
ValidationLogic: 0x88Cff8CCDc253536d6df6821e7c271Fb2d59Eba2
LendingPoolImpl: 0xae6fFEA26e9A90a0314206dBbC28879cf821626a
LendingPool: 0xa200abE59Bd84a5980BF9A1Ad681E74611965e5D
LendingPoolConfigurator: 0xAE42B24CC569d3d5d739c5b739fad41561B2B9cb
LendingPoolConfiguratorImpl: 0x5eF56Cd3221724F0223f0f6aA3835F3A7D75347e
StableAndVariableTokensHelper: 0x9a4dfd25ea17F2551A003568eD8666C016458CE4
ATokensAndRatesHelper: 0xa1198C3ab063e2412192a725F5205f84f54afe39
AToken: 0x079eb962fC6183B87Dd59eD54F97896C75C0385b
StableDebtToken: 0xAa7bEE25F850FF505694b87be202fa2558172189
VariableDebtToken: 0x89253bE1f65D62085EDf5f7761c7f331b755B3C6
PriceFeed: 0xed84B015D2EeDD50246873941AC6Ef9f3eBc0397
AaveOracle: 0x3837164972357E3C10fcEb362a7146058c6231F6
LendingRateOracle: 0xeC89d0b143E9eA65b324cB59ec73599965be8bb1
AaveProtocolDataProvider: 0x5645d7B3be312DB6100f69c862969E0064d8FFF6
StakingConfigurator: 0x7BC91566Ab4Ed3214fbAe0D793C77347FFd90252
StakingConfiguratorImpl: 0x006b07b7B817925582AF85d9810EdA1f8ADF1a2f
TODOToken: 0x2a8a9aD29c1D85a53c2Ab24a69B8449f64B356f2
MultiFeeDistribution: 0x13051dE0Cf245544418DA17b25B7473a14dECC6f
MultiFeeDistributionImpl: 0xe913547C77d77520719A44eD5A83382a59631541
MerkleDistributor: 0x11f111e55C34e60F7C15039CA24383B53b98554E
ChefIncentivesController: 0xE423FDA3e2851D6158e8e6e95490344902412c1B
ChefIncentivesControllerImpl: 0xaBa6A7AcACF726f35D3C2758fc47bF8B19cc6d0a
MasterChef: 0xdcB3454E2AbE8e30AC9F7D4Dce0654f8444e926e
MasterChefImpl: 0x2a5b18A211e985dA6dc3f680bE495246b033F8dC
TokenVesting: 0xFf1b38E983EADCD78458f83CE500684571F9cF16
ProtocolRevenueDistribution: 0xf68514fb8A0743EAa762c35984b6609eAb00f5cd
ProtocolRevenueDistributionImpl: 0xA53Dff94928Ea91a2d41b92d6E0A4E32DE19b864
WETHMocked: 0x13482369bCaa250CBb31eEF8Ff89d1bf4E4158A4
WETHGateway: 0x6aBc96586B6d3332406B0DB06FA95006DfD8BA71
DefaultReserveInterestRateStrategy: 0xa4b3d01896b1d321605581bb0B7E9a38f212b344
rateStrategyStableOne: 0x9E2d5F4d466B8a54d8CBa3E019113183d9ebeF7b
rateStrategyVolatileOne: 0xa4b3d01896b1d321605581bb0B7E9a38f212b344
LendingPoolCollateralManager: 0x30cCceE3f77a3fA6F40F0e7047EaA7b310A92fbB
LendingPoolCollateralManagerImpl: 0x30cCceE3f77a3fA6F40F0e7047EaA7b310A92fbB
WalletBalanceProvider: 0x3677539e3eE3b7b6959b59f594F19b020467412C
UiPoolDataProvider: 0x8A67E0743780F1850A2CF90A3739E022802C865d
```
