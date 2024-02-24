pragma solidity ^0.4.17;

contract ContractFactory {
    enum EntityType { NOSTATUS, COMPANY, FARMER, PROCESSER, DISTRIBUTOR, RETAILER, CONSUMER }
    mapping(address => EntityType) public allEntities;
    mapping(address => address[]) public userContracts;
    
    function enterEntityStatus(address manager, EntityType entity) public  {
        require(manager==msg.sender && allEntities[manager] == EntityType(0));
        allEntities[manager] = entity;
    }

    function confirmStatus(address manager, EntityType entity) public view  {
        require(manager == msg.sender && allEntities[manager] != EntityType(0) && allEntities[manager] == entity);
    }

    function createContract(address farmerAddress, string name, string quantity, uint tLower, uint tHigher, uint hLower, uint hHigher) public {
        require(allEntities[farmerAddress] == EntityType(2) && allEntities[msg.sender] == EntityType(1));
        address newContract = new Contract(farmerAddress, msg.sender, name, quantity, block.timestamp, tLower, tHigher, hLower, hHigher);
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

    function popEntityFromContract(address entity) public {
        delete userContracts[entity][userContracts[entity].length -1];
        userContracts[entity].length--;
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
    uint public consumerCount = 0;
    uint public tempLower; 
    uint public tempHigher; 
    uint public humidLower;
    uint public humidHigher;
    string public productName;
    string public productQuantity;
    uint public phase = 1;
    uint public completedTransactionsCount = 0;
    uint public timeStamp;
    mapping(address => bool) public consumers;
    
    function Contract(address agriculturist, address creator, string name, string quantity, uint time, uint tLower, uint tHigher, uint hLower, uint hHigher) public  {
        farmer = agriculturist;
        manager = creator;
        productName = name;
        productQuantity = quantity;
        timeStamp = time;
        tempLower = tLower;
        tempHigher = tHigher;
        humidLower = hLower;
        humidHigher = hHigher;
    }
    
    modifier allTransactionsComplete() {
        for (uint i = 0; i < transactions.length; i++) {
            require(transactions[i].complete);
        }
        _;
    }

    function createTransfer(address payer, address recipient, string amount) public allTransactionsComplete  {
        require(msg.sender == recipient);
        Transaction memory newTransaction = Transaction({
            payer: payer, 
            recipient: recipient, 
            amount: amount,
            complete: false
        });
        transactions.push(newTransaction);
    }

    function approveTransaction(uint index) public payable  {
        Transaction storage transaction = transactions[index];
        require(!transaction.complete && msg.sender == transaction.payer);
        transaction.recipient.transfer(address(this).balance);         
        completedTransactionsCount++;
        phase++;
        transaction.complete = true;
        if(completedTransactionsCount == 1) {
            farmer = transaction.payer;
        } else if(phase >= 6 && !consumers[transaction.payer]) {
            consumers[transaction.payer] = true;
            consumerCount++;
        } 
    }

    function deleteTransaction() public  {
        require(!transactions[transactions.length - 1].complete && (msg.sender == transactions[transactions.length - 1].payer || msg.sender == transactions[transactions.length - 1].recipient));
        delete transactions[transactions.length - 1];
        transactions.length--;
    }

    function getCountOfTransactions() public view returns (uint) {
        return transactions.length;
    }

    function isConsumers(address consumer) public view returns (bool) {
        return consumers[consumer];
    }

    function getContractDetails() public view returns(address, string, string, uint, uint, uint, uint, uint, uint, uint) {
        return (
            manager, 
            productName, 
            productQuantity, 
            phase, 
            completedTransactionsCount,
            consumerCount, 
            tempLower, 
            tempHigher, 
            humidLower, 
            humidHigher
        );
    }
}