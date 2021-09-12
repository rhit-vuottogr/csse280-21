var rhit = rhit || {};

rhit.counter = "";

rhit.functionName = function () {
	console.log("Ready")
	const buttons = document.querySelectorAll("#counterButtons button");
	for (let i=0; i<buttons.length; i++){
		const button = buttons[i];

		button.onclick = (event) => {
			console.log('You pressed', button);
		}

	}
};

rhit.ClassName = class {
	constructor() {

	}

	methodName() {

	}
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");


	// const buttons = document.querySelectorAll("#counterButtons button");


	for (const button of buttons){ 
		button.onclick = (event) => {
			const dataAmount = button.dataset.dataAmount;
			const dataIsMultiplication = button.dataset.dataIsMultiplication
			console.log('Amount: ', dataAmount, 'isMult', dataIsMultiplication);
		}
	}

	// buttons.forEach(button) => {
	// 	button.onclick = (event) => {
	// 		console.log('You pressed', button);
	// 	}

	// }




};

rhit.main();
