let map = L.map('map').setView([58.373523, 26.716045], 12)
const osm =
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: 'OpenStreetMap contributors',
      })
osm.addTo(map)

function popUPinfo(feature, layer) {
      layer.bindPopup(feature.properties.NIMI)
}

async function addDistrictsGeoJson(url) {
      const response = await fetch(url)
      const data = await response.json()
      const polygons = L.geoJson(data, {
            onEachFeature: popUPinfo,
      })
      polygons.addTo(map)
}
addDistrictsGeoJson('geojson/tartu_city_districts_edu.geojson')

async function addCelltowersGeoJson(url) {
      const response = await fetch(url)
      const data = await response.json()
      const markers = L.geoJson(data)
      const clusters = L.markerClusterGroup()
      clusters.addLayer(markers)
      clusters.addTo(map)
}
addCelltowersGeoJson('geojson/tartu_city_celltowers_edu.geojson')

function defaultMapSettings() {
      map.setView([58.373523, 26.716045], 12)
}
