sap.ui.define(["sap/ui/core/format/NumberFormat"], function (numFor) {
	return {
		getTheNamePlease: function (input) {
			if (input) {
				return input.toUpperCase();
			}
		},

		currencyFormater: function (sal, cur) {
			if (sal) {
				var a = numFor.getCurrencyInstance();
				return a.format(sal, cur);
			}
		},

		convertToBoolean: function (inp) {
			if (inp === true || inp === false) {
				return inp;
			}
			if (inp === "true") {
				return true;
			} else {
				return false;
			}
		},
		convertToNumber: function(inp){
			return +inp;
		}
	};
});