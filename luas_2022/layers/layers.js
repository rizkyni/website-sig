var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_KabupatenTemanggung_0 = new ol.format.GeoJSON();
var features_KabupatenTemanggung_0 = format_KabupatenTemanggung_0.readFeatures(json_KabupatenTemanggung_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabupatenTemanggung_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KabupatenTemanggung_0.addFeatures(features_KabupatenTemanggung_0);var lyr_KabupatenTemanggung_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KabupatenTemanggung_0, 
                style: style_KabupatenTemanggung_0,
    title: 'Kabupaten Temanggung<br />\
    <img src="styles/legend/KabupatenTemanggung_0_0.png" /> sangat sedikit<br />\
    <img src="styles/legend/KabupatenTemanggung_0_1.png" /> sedikit<br />\
    <img src="styles/legend/KabupatenTemanggung_0_2.png" /> banyak<br />\
    <img src="styles/legend/KabupatenTemanggung_0_3.png" /> sangat banyak<br />'
        });

lyr_KabupatenTemanggung_0.setVisible(true);
var layersList = [baseLayer,lyr_KabupatenTemanggung_0];
lyr_KabupatenTemanggung_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Luas 2022': 'Luas 2022', });
lyr_KabupatenTemanggung_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Luas 2022': 'TextEdit', });
lyr_KabupatenTemanggung_0.set('fieldLabels', {'Kecamatan': 'inline label', 'Luas 2022': 'inline label', });
lyr_KabupatenTemanggung_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});