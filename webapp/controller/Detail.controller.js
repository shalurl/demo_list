sap.ui.define( 
    [
      "sap/ui/core/mvc/Controller",
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator,moment) {
      "use strict";
  
      return Controller.extend("demolist.controller.Detail", {
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter
              .getRoute("DetailView")
              .attachPatternMatched(this._onObjectMatched, this);
          },
          _onObjectMatched: function (oEvent) {
            var productId = oEvent.getParameter("arguments").ProductId;
            this.doOperation(productId);
          },
          doOperation(productId){
            var that=this;
            var mProductModel = that.getOwnerComponent().getModel("mproducts");
            var aProducts = mProductModel.getProperty("/ProductCollection");
          },

        
          /**
           * This function navigate us to detail page of the product.
           */
          onPressNavBack: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteList");
          },
        });
      }
    );
    