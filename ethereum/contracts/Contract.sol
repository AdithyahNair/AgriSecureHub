pragma solidity ^0.4.17;

contract ContractFactory {
    enum EntityType { NOSTATUS, COMPANY, FARMER, PROCESSER, DISTRIBUTOR, RETAILER, CONSUMER }
    mapping(address => EntityType) public allEntities;
    mapping(address => address[]) public userContracts;
    
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
        userContracts[msg.sender].push(newContract);
        userContracts[farmerAddress].push(newContract);
    }

    function getManagerAndEntityType(address manager, EntityType entity) public pure returns (address, bool) {
        bool isCompany = (entity == EntityType(1));
        return (manager, isCompany);
    }

     function getUserContracts(address user) public view returns (address[]) {
        return userContracts[user];
    }
}

contract Contract {
    struct Transaction {
        address initiator;
        address recipient;
        string quantity; 
        uint amount;
        bool complete;
    }

    Transaction[] public transactions;
    address public manager;
    address public farmer;
    address public processor;
    address public distributor;
    address public retailer;
    address public consumer;
    string public productName;
    string public productQuantity;
    uint public phase = 1;
    uint public transactionCount = 0;
    
    function Contract(address agriculturist, address creator, string name, string quantity) public  {
        farmer = agriculturist;
        manager = creator;
        productName = name;
        productQuantity = quantity;
    }

    function createTransfer(address initiator, address recipient, string quantity, uint amount) public payable {
        require(msg.value == 0);
        Transaction memory newTransaction = Transaction({
            initiator: initiator, 
            recipient: recipient,
            quantity: quantity, 
            amount: amount,
            complete: false
        });
        transactions.push(newTransaction);
    }

    function approveTransaction(uint index) public {
        Transaction storage transaction = transactions[index];
        require(!transaction.complete);
        transaction.recipient.transfer(transaction.amount);
        if(transactionCount == 2) {
            processor = transaction.recipient;
            phase = 3;
        } else if(transactionCount == 3) {
            distributor = transaction.recipient;
            phase = 4;
        } else if(transactionCount == 4) {
            retailer = transaction.recipient;
            phase = 5;
        } else  {
            consumer = transaction.recipient;
            phase = 6;
        } 
        transaction.complete = true;
        if(transactionCount == 1) {
            farmer = transaction.recipient;
            phase = 2;
        }
        transactionCount++;
    }


     function getSummary() public view returns(address, address, address, address, address, address) {
        return (
            manager,
            farmer,
            processor,
            distributor,
            retailer,
            consumer
        );
    }

    function getContractDetails() public view returns(address, string, string, uint, uint) {
        return (
            manager, 
            productName, 
            productQuantity, 
            phase, 
            transactionCount
        );
    }
}