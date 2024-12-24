var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ne_10m_airportsshp_1 = new ol.format.GeoJSON();
var features_ne_10m_airportsshp_1 = format_ne_10m_airportsshp_1.readFeatures(json_ne_10m_airportsshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_airportsshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_airportsshp_1.addFeatures(features_ne_10m_airportsshp_1);
var lyr_ne_10m_airportsshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ne_10m_airportsshp_1, 
                style: style_ne_10m_airportsshp_1,
                popuplayertitle: 'ne_10m_airports.shp',
                interactive: true,
                title: '<img src="styles/legend/ne_10m_airportsshp_1.png" /> ne_10m_airports.shp'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ne_10m_airportsshp_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ne_10m_airportsshp_1];
lyr_ne_10m_airportsshp_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', });
lyr_ne_10m_airportsshp_1.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'TextEdit', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'TextEdit', 'location': 'TextEdit', 'gps_code': 'TextEdit', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'TextEdit', });
lyr_ne_10m_airportsshp_1.set('fieldLabels', {'scalerank': 'inline label - always visible', 'featurecla': 'inline label - always visible', 'name': 'inline label - always visible', 'abbrev': 'inline label - always visible', 'location': 'inline label - always visible', 'gps_code': 'inline label - always visible', 'iata_code': 'inline label - always visible', 'wikipedia': 'inline label - always visible', 'natlscale': 'inline label - always visible', });
lyr_ne_10m_airportsshp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});