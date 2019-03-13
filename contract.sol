pragma solidity ^0.4.22;

contract SimpleContract {
    
    string public message;
    uint public result;
    
    function setMessage(string _message) public
    {
        message = _message;
    }
    
    function add(uint _num1, uint _num2) public
    {
        result = _num1 + _num2;
    }
    
    function multiply(uint _num1, uint _num2) public
    {
        result = _num1 * _num2;
    }
    
    function transfer(address _walletAddress) public payable
    {
        _walletAddress.transfer(msg.value);
    }
    
}