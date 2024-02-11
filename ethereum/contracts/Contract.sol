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


    function pushEntityIntoContract(address contractAddress, address entity) public {
        address existingContract = Contract(contractAddress);
        userContracts[entity].push(existingContract);
    }

    function getUserContracts(address user) public view returns (address[]) {
        return userContracts[user];
    }
}

contract Contract {
    struct Transaction {
        address payer;
        address recipient;
        string amount;
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
    uint public completedTransactionsCount = 0;
    address[] public entityList;
    
    function Contract(address agriculturist, address creator, string name, string quantity) public  {
        farmer = agriculturist;
        manager = creator;
        productName = name;
        productQuantity = quantity;
        entityList.push(manager);
    }

    modifier allTransactionsComplete() {
        for (uint i = 0; i < transactions.length; i++) {
            require(transactions[i].complete);
        }
        _;
    }

    function createTransfer(address payer, address recipient, string amount) public allTransactionsComplete payable  {
        require(msg.sender == recipient);
        // require(validatePayer(entityType));  {This person has to be validated}. Do it in the react side. 
        Transaction memory newTransaction = Transaction({
            payer: payer, 
            recipient: recipient, // recipient is you (who is creating this transaction)
            amount: amount,
            complete: false
        });
        transactions.push(newTransaction);
    }

    function approveTransaction(uint index) public  {
        Transaction storage transaction = transactions[index];
        require(!transaction.complete);
        require(msg.sender == transaction.payer);
        transaction.recipient.transfer(address(this).balance);         
        completedTransactionsCount++;
        transaction.complete = true;
        entityList.push(transaction.payer);
        if(completedTransactionsCount == 1) {
            farmer = transaction.payer;
            phase = 2;
        } else if(completedTransactionsCount == 2) {
            processor = transaction.payer;
            phase = 3;
        } else if(completedTransactionsCount == 3) {
            distributor = transaction.payer;
            phase = 4;
        } else if(completedTransactionsCount == 4) {
            retailer = transaction.payer;
            phase = 5;
        } else  {
            consumer = transaction.payer;
            phase = 6;
        } 
    }

    function getCountOfTransactions() public view returns (uint) {
        return transactions.length;
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
            completedTransactionsCount
        );
    }
}