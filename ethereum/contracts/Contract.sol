pragma solidity ^0.4.17;

contract ContractFactory {
    enum EntityType { NOSTATUS, COMPANY, FARMER, PROCESSER, DISTRIBUTOR, RETAILER, CONSUMER }
    mapping(address => EntityType) public allEntities;
    address[] public deployedContracts;
    bool public isCompany ;
    
    function enterEntityStatus(address manager, EntityType entity) public {
        require(allEntities[manager] == EntityType(0));
        allEntities[manager] = entity;
        if(allEntities[manager] == EntityType(1)) {
            isCompany = true;
        } else {
            isCompany = false;
        }
    }

    function confirmStatus(address manager, EntityType entity) public  {
        require(allEntities[manager] != EntityType(0));
        require(allEntities[manager] == entity);
        if(allEntities[manager] == EntityType(1)) {
            isCompany = true;
        } else {
            isCompany = false;
        }
    }

    function createContract(address farmerAddress, string name, string quantity) public  {
        require(allEntities[farmerAddress] == EntityType(2) && allEntities[msg.sender] == EntityType(1));
        address newContract = new Contract(farmerAddress, msg.sender, name, quantity);
        deployedContracts.push(newContract);
    }

    function getDeployedContracts() public view returns (address []) {
        return deployedContracts;
    }

    function getIsCompany() public view returns (bool) {
        return isCompany;
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
    
    function Contract(address agriculturist, address creator, string name, string quantity) public  {
        farmer = agriculturist;
        manager = creator;
        productName = name;
        productQuantity = quantity;
    }
}