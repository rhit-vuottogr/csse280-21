var rhit = rhit || {};

rhit.counter = 0;

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


	const buttons = document.querySelectorAll("#counterButtons button");


	for (const button of buttons){ 
		button.onclick = (event) => {
			const dataAmount = parseInt(button.dataset.amount);
			const dataIsMultiplication = button.dataset.isMultiplication == "true";
			console.log('Amount: ', dataAmount, 'isMult', dataIsMultiplication);
			console.log(`Amount: ${typeof(dataAmount)} is Mult: ${typeof(dataIsMultiplication)}`);

			rhit.updateCounter(dataAmount, dataIsMultiplication)
		}
	}

	// buttons.forEach(button) => {
	// 	button.onclick = (event) => {
	// 		console.log('You pressed', button);
	// 	}

	// }

	// $("#counterButtons button").click((event) => {
	// 	console.log("Button", event.target);
	// 	const dataAmount = $(event.target).data("isMultiplication");
	// 	const dataIsMultiplication = $(event.target).data("isMultiplication");
	// 	// console.log(`Amount: ${dataAmount} is Mult: ${dataIsMultiplication}`);
	// 	// console.log(`Amount: ${typeof(dataAmount)} is Mult: ${typeof(dataIsMultiplication)}`);
	// 	rhit.updateCounter(dataAmount, dataIsMultiplication)

	// });

};

rhit.updateCounter = function(changeAmount, isMultiplication) {
	if (isMultiplication) {
		rhit.counter *= changeAmount;
	} else {
		rhit.counter += changeAmount;
	}
    document.querySelector("#counterText").innerHTML = `Count = ${rhit.counter}`;
	$("#counterText").html(`Count = ${rhit.counter}`)
};



rhit.main();
