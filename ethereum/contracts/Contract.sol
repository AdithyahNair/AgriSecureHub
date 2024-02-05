pragma solidity ^0.4.17;

contract ContractFactory {
    enum EntityType { NOSTATUS, COMPANY, FARMER, PROCESSER, DISTRIBUTOR, RETAILER, CONSUMER }
    mapping(address => EntityType) public allEntities;
    address[] public deployedContracts;
    
    function enterEntityStatus(address manager, EntityType entity) public  {
        require(manager==msg.sender);
        require(allEntities[manager] == EntityType(0));
        allEntities[manager] = entity;
    }

    function confirmStatus(address manager, EntityType entity) public view  {
        require(manager == msg.sender);
        require(allEntities[manager] != EntityType(0));
        require(allEntities[manager] == entity);
    }

    function createContract(address farmerAddress, string name, string quantity) public  {
        require(allEntities[farmerAddress] == EntityType(2) && allEntities[msg.sender] == EntityType(1));
        address newContract = new Contract(farmerAddress, msg.sender, name, quantity);
        deployedContracts.push(newContract);
    }

    function getDeployedContracts() public view returns (address []) {
        return deployedContracts;
    }

    function getManagerAndEntityType(address manager, EntityType entity) public pure returns (address, bool) {
        bool isCompany = (entity == EntityType(1));
        return (manager, isCompany);
    }
}

contract Contract {
    address public manager;
    address public farmer;
    address public processor;
    address public distributor;
    address public retailer;
    address public consumer;
    string public productName;
    string public productQuantity;
    address[] public entityList;
    
    function Contract(address agriculturist, address creator, string name, string quantity) public  {
        farmer = agriculturist;
        manager = creator;
        productName = name;
        productQuantity = quantity;
        entityList.push(manager);
        entityList.push(farmer);
    }
}