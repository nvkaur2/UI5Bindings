sap.ui.define([], function () {
	return {
		createMyJSONModel: function (sPath) {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData(sPath);
			// oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createMyXMLModel: function (address) {
			var oModel = new sap.ui.model.xml.XMLModel();
			oModel.loadData(address);
			return oModel;
		},

		createMyResourceModel: function () {
			var oModel = new sap.ui.model.resource.ResourceModel({
				bundleUrl: "i18n/i18n.properties"
			});
			// oModel.loadData(oModel);
			return oModel;
		}
	};
});