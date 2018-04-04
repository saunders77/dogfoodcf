(function () {
	"use strict";

	Office.initialize = function (reason) {
		return Excel.CustomFunctions.initialize();
	};
})();
