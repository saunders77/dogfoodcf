/// <reference path="../Office.Runtime.js" />
/// <reference path="../Excel.js" />
/// <reference path="./Udf_definitions.js" />
/// <reference path="./Udf.js" />

(function () {
	"use strict";

	Office.initialize = function (reason) {
		return Excel.CustomFunctions.initialize();
	};
})();
