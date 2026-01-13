// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "forge-std/Script.sol";
import "../src/PositionManager.sol";
import "../src/PoolManager.sol";

contract DeployPositionManager is Script {
    function run() external {
        address owner = vm.envAddress("OWNER");
        address poolManager = vm.envAddress("POOL_MANAGER");

        vm.startBroadcast();
        PositionManager pm = new PositionManager(
            PoolManager(poolManager),
            owner
        );
        vm.stopBroadcast();

        console2.log("PositionManager deployed at:", address(pm));
    }
}
