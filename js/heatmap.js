addGeoJson('geojson/tartu_city_celltowers_edu.geojson')

async function addGeoJson(url) {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data.features[0])
}
{
  "type": "Feature",
    "properties": {
      "radio": "UMTS",
        "mcc": 248,
          "net": 1,
            "area": 7,
              "cell": 196901,
                "unit": 0,
                  "lon": 26.726892,
                    "lat": 58.381053,
                      "range": 1000,
                        "samples": 10,
                          "changeable": 1,
                            "created": 1230291978,
                              "updated": 1248350450,
                                "averageSig": 0
    },
      "geometry": {
        "type": "Point",
          "coordinates": [26.726892, 58.381053]
      }
}
