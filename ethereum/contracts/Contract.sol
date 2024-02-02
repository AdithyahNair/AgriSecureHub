pragma solidity ^0.4.17;

contract ContractFactory {
    enum EntityType { NOSTATUS, COMPANY, FARMER, PROCESSER, DISTRIBUTOR, RETAILER, CONSUMER }
    mapping(address => EntityType) public allEntities;
    address[] public deployedContracts;
    
    function enterEntityStatus(address manager, EntityType entity) public {
        require(allEntities[manager] == EntityType(0));
        allEntities[manager] = entity;
    }

    function confirmStatus(address manager, EntityType entity) public view {
        require(allEntities[manager] != EntityType(0));
        require(allEntities[manager] == entity);
    }

    function createContract(address farmerAddress) public  {
        require(allEntities[farmerAddress] == EntityType(2) && allEntities[msg.sender] == EntityType(1));
        address newContract = new Contract(farmerAddress, msg.sender);
        deployedContracts.push(newContract);
    }

    function getDeployedContracts() public view returns (address []) {
        return deployedContracts;
    }
}

contract Contract {
    address public manager;
    address public farmer;
    address public processor;
    address public distributor;
    address public retailer;
    address public consumer;
    
    function Contract(address agriculturist, address creator) public  {
        farmer = agriculturist;
        manager = creator;
    }
}