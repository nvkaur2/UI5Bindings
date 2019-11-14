

sap.ui.define([
	"bahubali/controller/BaseController"
	],function(oController){
		return oController.extend("bahubali.controller.Main",{
			onPress: function(){
				var oCore= this.getView();
				var username = oCore.byId("idInp").getValue();
				var password = oCore.byId("idInp1").getValue();
				if(username === "navdeep" && password === "navdeep1"){
					this.reuseMethod("Valid");		
					}
				else{
					this.reuseMethod("InValid");
				}
			}
		});
});