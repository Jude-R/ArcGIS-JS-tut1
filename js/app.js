// Refactor into separate funtions
require(["./js/addLayer.js", "esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/widgets/LayerList", "dojo/domReady!"], 

function(app, map, mapview,featurelayer, layerlist){
    console.log("Hello world 1 ");
    console.log(app);
    map1 = new map({
        basemap: "topo"
    });
    
    mapView1 = new mapview({
        container: "mapDiv",
        map: map1,
        center: [-79.20, 43.69],
        zoom: 9
    });
    
    
    var template = { // autocasts as new PopupTemplate()
        title: "Testing popups",
        content: [{
          // It is also possible to set the fieldInfos outside of the content
          // directly in the popupTemplate. If no fieldInfos is specifically set
          // in the content, it defaults to whatever may be set within the popupTemplate.
          type: "fields",
          fieldInfos: [{
            fieldName: "Name",
            label: "Name",
            visible: true
          }, {
            fieldName: "Comments",
            label: "The comments",
            visible: true
          }
          ]
        }]
      };
    
    
    fl = new featurelayer({
        url: "https://services.arcgis.com/AtfpSdJcsnQiIRhL/arcgis/rest/services/Notes/FeatureServer/2?token=PF8fiO_QN2rrM4D_Acl1rC2KI6ND7j-2Jcm28OboBLBWp2ZmQKXLJp-wlQVIRVPRxdyy9BRiIMN_fZC3UJj0OmWJxHkwqHQsEfOY5eV8pr3181-j5JQnvO3YrLGMQot7M1dSwRVttrYKpffe1vWzmVWkjIX73MwP-t2S2GzywQGXvQaTR-hMx4zkaePJBbivH-2Vr3EcWeogaWewouR2cDjvvKsXh-pw7uHxakRoG_xxpFGtAipw4Z3ZselSAjQO",
        outFields: ["*"],
        popupTemplate: template
    })
    
    map1.add(fl);
    
   var layerList1 = new layerlist({
       view: mapView1
   });
    
    mapView1.ui.add(layerList1, "top-right");

    
    

    document.getElementById("subBtn").addEventListener("click", );
    
});


