//slint-disable-next-line no-undef
sap.ui.define([
   "sap/ui/core/ComponentContainer"
],
    /**
     * @param{typeof sap.ui.core.ComponentContainer} ComponentContainer 
     */
    function (ComponentContainer) {
        //slint-disable-next-line no-undef
        //alert("UIS is ready");
        "use strict";
      new ComponentContainer({
          name: "dtt.SAPUI5",
          settings: {id:"SAPUI5"},
          async: true
      }).placeAt("contenido");
        
    });
