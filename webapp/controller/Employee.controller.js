sap.ui.define([
	"bahubali/controller/BaseController",
	"bahubali/model/models",
	"bahubali/util/lifeSaver"
], function (Controller, models, lifeSaver) {
	"use strict";
	return Controller.extend("bahubali.controller.Employee", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf bahubali.view.Employee
		 */
		onInit: function () {
			var oModel = models.createMyJSONModel("model/mockData/myData.json");
			sap.ui.getCore().setModel(oModel);

			// var oMario = models.createMyJSONModel("model/mockData/myData2.json");
			// sap.ui.getCore().setModel(oMario, "mario");

			var resourceModel = models.createMyResourceModel();
			sap.ui.getCore().setModel(resourceModel, "i18n");

			var oMario = models.createMyXMLModel("model/mockData/myXMLData.xml");
			sap.ui.getCore().setModel(oMario, "mario");
		},

		mario: false,

		flipModel: function () {
			var oDefault = sap.ui.getCore().getModel();
			var oMario = sap.ui.getCore().getModel("mario");
			sap.ui.getCore().setModel(oMario);
			sap.ui.getCore().setModel(oDefault, "mario");
			var oTable = this.getView().byId("idTable");
			if (this.mario === false) {
				this.mario = true;
				oTable.bindRows("/empTab/row");
			} else {
				this.mario = false;
				oTable.bindRows("/empTab");
			}
		},

		onMagic: function () {
			var oModel = sap.ui.getCore().getModel();
			var suma = oModel.getProperty("/empStr/suma");
			if (suma === false) {
				oModel.setProperty("/empStr/suma", true);
			} else {
				oModel.setProperty("/empStr/suma", false);
			}

			var oTable = this.getView().byId("idTable");
			oTable.addColumn(new sap.ui.table.Column({
				label: new sap.m.Label("heloo"),
				template: new sap.m.Input({
					value: "{salary}"
				})
			}));
		},

		globalVar: "Anubhav",
		formatter: lifeSaver,

		onSelect: function (oEvent) {
			var sPath = oEvent.getParameter("rowContext").getPath();
			var oSimple = this.getView().byId("idSimpleForm");

			oSimple.bindElement(sPath);
		},

		onPress: function () {
	
				var list = this.getView().byId("myList");
				var items = list.getItems();
				var oItem = items[3];
				list.setSelectedItem(oItem)
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf bahubali.view.Employee
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf bahubali.view.Employee
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf bahubali.view.Employee
		 */
		//	onExit: function() {
		//
		//	}

	});

});