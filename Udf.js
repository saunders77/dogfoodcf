function ADD42(num) {
	return num + 42;
}

function add20(num) {
	return num + 20;
}

function add30(num) {
	return new OfficeExtension.Promise(function(resolve) {
		setTimeout(function() {
			resolve(num + 30);
		}, 1);
	});
}

function isEven(num) {
	return num % 2 == 0;
}

function getDay() {
	var d = new Date();
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return days[d.getDay()];
}

function getDummyString(len) {
	var base = "123456789 ";

	var div = Math.floor(len / 10);
	var rem = len - (div * 10);

	var result = "";
	for (var i = 0; i < div; i++) {
		result += base;
	}
	result += base.substr(0, rem);
	return result;
}
