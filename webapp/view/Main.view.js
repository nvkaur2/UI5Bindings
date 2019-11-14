// sap.ui.jsview("bahubali.view.Main", {

// 	/** Specifies the Controller belonging to this View. 
// 	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
// 	 * @memberOf bahubali.view.Main
// 	 */
// 	getControllerName: function () {
// 		return "bahubali.controller.Main";
// 	},

// 	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
// 	 * Since the Controller is given to this method, its event handlers can be attached right away. 
// 	 * @memberOf bahubali.view.Main
// 	 */
// 	createContent: function (oController) {
// 		var simpleForm = new sap.ui.layout.form.SimpleForm("idForm", {
// 			content: [new sap.m.Label("idLab", {text: "User name"}), new sap.m.Input("idInp",{}),new sap.m.Label("idLab1", {text:"Password"}),new sap.m.Input("idInp1",{}),
// 			new sap.m.Button("idBtn",{text:"Validate",
// 				press: oController.onPress
// 			})]
			
// 		});
// 		return simpleForm;
// 	}

// });