sap.ui.define([ 
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox",
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller,Filter,FilterOperator,MessageBox) {
    "use strict";

    return Controller.extend("demolist.controller.List", {
        onInit: function () {

        },
        onSearchList: function(oEvent){
            var sVal = oEvent.getSource().getValue(),
            oBinding = this.byId("idList").getBinding("items"),
              oFilter;
           if (sVal || sVal === "") {
            oFilter = new Filter("SupplierName", FilterOperator.Contains , sVal);
            oBinding.filter([oFilter]);
           }
        },

        /**
         * This function navigates up to detail page
         */
        onPressNext: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("DetailView");
        },
        onPressProduct: function(oEvent){
            var that = this;
            var oSelectedProduct = oEvent.getSource().getBindingContext("mproducts").getObject();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("DetailView", {ProductId: oSelectedProduct.ProductId});
        },
        onPressDateTime: function() {

            var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    
            MessageBox.show(dateTime);
    
    
    
        }
          });
        }
      );
      