// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/lang","dojo/_base/html","dojo/_base/declare","./LayerChooserFromMap"],function(e,f,g,c){return g([c],{baseClass:"jimu-queryable-layer-chooser-from-map",declaredClass:"jimu.dijit.QueryableLayerChooserFromMap",showImageLayer:!0,mustSupportStatistics:!1,ignoreVirtualLayer:!1,postMixInProperties:function(){this.inherited(arguments);this.filter=this.showImageLayer?c.createQueryableLayerFilter(this.mustSupportStatistics):c.createFeaturelayerFilter(["point","polyline","polygon"],!1,!0,
this.mustSupportStatistics);this.ignoreVirtualLayer&&(this.filter=c.andCombineFilters([this.filter,e.hitch(this,this._ignoreVirtualLayerFilter)]))},_ignoreVirtualLayerFilter:function(d){return d.getLayerType().then(function(a){return!("ArcGISDynamicMapServiceLayer"===a||"ArcGISTiledMapServiceLayer"===a||"GroupLayer"===a)})},postCreate:function(){this.inherited(arguments);f.addClass(this.domNode,"jimu-basic-layer-chooser-from-map")},getHandledItem:function(d){var a=this.inherited(arguments),b=d&&d.layerInfo;
b=b&&b.layerObject;a.url=b&&b.url||"";return a}})});