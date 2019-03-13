//Check if Metamask extension is enabled and unlocked
window.onload = setTimeout(function () {
	if (web3.currentProvider.isMetaMask === true) {
		const account = web3.eth.accounts[0];
		if (!account) {
			alert("Please unlock your Metamask account first");
		}
	}
	else {
		alert('Please install Metamask extension and select Rinkeby network');
	}
},9000);

var abiList =
	[
		{
			"constant": false,
			"inputs": [
				{
					"name": "_num1",
					"type": "uint256"
				},
				{
					"name": "_num2",
					"type": "uint256"
				}
			],
			"name": "add",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_num1",
					"type": "uint256"
				},
				{
					"name": "_num2",
					"type": "uint256"
				}
			],
			"name": "multiply",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_message",
					"type": "string"
				}
			],
			"name": "setMessage",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_walletAddress",
					"type": "address"
				}
			],
			"name": "transfer",
			"outputs": [],
			"payable": true,
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "message",
			"outputs": [
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "result",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		}
	]

var contractaddress = '0xfcc669b894c84cb339999c2e890d841cfc9ff7a9';
var abi = web3.eth.contract(abiList);
var abiFunction = abi.at(contractaddress);

async function setMessage() {
	await abiFunction.setMessage.sendTransaction(
		document.getElementById("message").value,
		{
			from: web3.eth.accounts[0],
			gas: 3000000
		}, function (error, result) {
			if (!error) {
				console.log(result);
				document.getElementById("txMessage").innerHTML = result;
			} else {
				console.log(error);
			}
		});
}


async function add() {
	await abiFunction.add.sendTransaction(
		document.getElementById("num1").value,
		document.getElementById("num2").value,
		{
			from: web3.eth.accounts[0],
			gas: 3000000
		}, function (error, result) {
			if (!error) {
				console.log(result);
				document.getElementById("txAdd").innerHTML = result;

			} else {
				console.log(error);
			}
		});
}

async function multiply() {
	await abiFunction.multiply.sendTransaction(
		document.getElementById("num1").value,
		document.getElementById("num2").value,
		{
			from: web3.eth.accounts[0],
			gas: 3000000
		}, function (error, result) {
			if (!error) {
				console.log(result);
				document.getElementById("txMultiply").innerHTML = result;

			} else {
				console.log(error);
			}
		});
}

async function transfer() {
	
	await abiFunction.transfer.sendTransaction(
		document.getElementById("walletAddress").value,
		{
			from: web3.eth.accounts[0],
			value: document.getElementById("amount").value
		}, function (error, result) {
			if (!error) {
				console.log(result);
				document.getElementById("transferTx").innerHTML = result;
			} else {
				console.log(error);
			}
		});
}

async function getMessage() {
	abiFunction.message(function(err, res){
		if(!err)
		{
			console.log(res); // Result object
			document.getElementById("currentMessage").innerHTML = res;
		}
		else
		console.log
	});
}

async function getResult() {
	abiFunction.result(function(err, res){
		if(!err)
		{
		console.log(res.c[0]); // If console.log(res) does not work, try use this method 
		document.getElementById("currentResult").innerHTML = res;
		}
		else
		console.log
	});
}