let timer;


// creating users data
// phone number | name | surname | pin code | balance
let phoneNumber = [7029810405, 7002318024];
let pinCode = [1234, 1111];
let userName = ['Alisher Lenkhan', 'Bruce Wayne'];
let balance = [32000, 750000];
let userData = [phoneNumber, userName, pinCode, balance];

let id = 0;

//this function confirm phone number and PIN code then checking
//save id who logged and start auto logout, alert welcome message
function Login(){
	let getLogin = document.getElementById('login').value;
	let getPass = document.getElementById('pincode').value;
	document.getElementById('login').value = "";
	document.getElementById('pincode').value = "";

	for(let i = 0; i<userName.length; i++){
		if(getLogin == phoneNumber[i] && getPass == pinCode[i]){
			document.getElementById('loginPage').style.display = 'none';
			document.getElementById('mainPage').style.display = 'block';
			alert(`Welcome, ${userName[i]}!`);
			id = i;


			let tempName = userName[i];
			let tempBalance = balance[i];
			document.getElementById('info-name').innerHTML = tempName;
			document.getElementById('info-balance').innerHTML = tempBalance;
			//in header shows balance and name surname

			timer = setTimeout (()=> {
				document.getElementById('loginPage').style.display = 'block';
				document.getElementById('mainPage').style.display = 'none';
			}, 2000000) 
		}
		else{
			alert('Error phone number or PIN code, try again');
		}
	}
}


//this function minus of balance and transfer to another account
function Transfer(){
	clearTimeout(timer);
	timer = setTimeout (()=> {
				document.getElementById('loginPage').style.display = 'block';
				document.getElementById('mainPage').style.display = 'none';
			}, 10000) 

	let getNumber = document.getElementById('transferNumber').value;
	let getAmount = document.getElementById('transferAmount').value;

	for(let i = 0; i < phoneNumber.length; i++){

		if(phoneNumber[i] == getNumber && getAmount <= balance[id]){
			document.getElementById('transferNumber').value = "";
			document.getElementById('transferAmount').value = "";
			balance[id] = balance[id] - getAmount;
			balance[i] = balance[i] + +getAmount;
			document.getElementById('info-balance').innerHTML = balance[id];
			console.log(balance[id]);
			console.log(balance[i]);
		}
	}
}

//this function calculate precentage and giving loan or not giving
function Loan(){
	timer = 5000;
	let getAmountLoan = document.getElementById('loanAmount').value;
	if(balance[id] > 0 && (balance[id]/10) < getAmountLoan){
		balance[id] = balance[id] + +getAmountLoan;

		document.getElementById('info-balance').innerHTML = balance[id];
	}else{
		alert("Not enaugh balance.");
	}
	document.getElementById('loanAmount').value = "";

	clearTimeout(timer);
	timer = setTimeout (()=> {
				document.getElementById('loginPage').style.display = 'block';
				document.getElementById('mainPage').style.display = 'none';
			}, 10000) 
}

//this function checking number and PIN code and log out on the account
function Close(){
	timer = 5000;
	let getNumberClose = document.getElementById('numberClose').value;
	let pin = document.getElementById('pinClose').value;
	document.getElementById('numberClose').value = "";
	document.getElementById('pinClose').value = "";

	if((getNumberClose == phoneNumber[id]) && (pin == pinCode[id])){
		document.getElementById('loginPage').style.display = 'block';
		document.getElementById('mainPage').style.display = 'none';
	}

	clearTimeout(timer);
	timer = setTimeout (()=> {
				document.getElementById('loginPage').style.display = 'block';
				document.getElementById('mainPage').style.display = 'none';
			}, 10000) 
}







