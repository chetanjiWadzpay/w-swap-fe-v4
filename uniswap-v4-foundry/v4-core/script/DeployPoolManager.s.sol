// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "forge-std/Script.sol";
import "../src/PoolManager.sol";

contract DeployPoolManager is Script {
    function run() external {
        address owner = vm.envAddress("OWNER");

        vm.startBroadcast();
        PoolManager manager = new PoolManager(owner);
        vm.stopBroadcast();

        console2.log("PoolManager deployed at:", address(manager));
    }
}
