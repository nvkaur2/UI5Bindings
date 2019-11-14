sap.ui.define(["sap/ui/core/mvc/Controller"],
	function (oController) {
		return oController.extend("bahubali.controller.BaseController", {
			reuseMethod: function (msg) {
				alert(msg);
			}
		});
	});