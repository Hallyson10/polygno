var map;

function createMap () {
  var a = 43.642,
      b = -79.389,
      diff = 0.0033;

  var options = {
    center: { lat: a, lng: b },
    mapTypeId: 'roadmap',
    zoom: 16
  };

  map = new google.maps.Map(document.getElementById('map'), options);
  //calcular a diferença
  var polygonCoordinates = [
    { lat: a - diff, lng: b - diff },
    { lat: a + diff, lng: b - diff },
    { lat: a + diff, lng: b + diff },
    { lat: a - diff, lng: b + diff },
  ];

  var polygon = new google.maps.Polygon({
    map: map,
    paths: polygonCoordinates,
    strokeColor: 'black',
    fillColor: 'black',
    fillOpacity: 0.4,
    draggable: true,
    editable: true
  });

  google.maps.event.addListener(polygon.getPath(), 'set_at', function() {
    logArray(polygon.getPath());
  });

  google.maps.event.addListener(polygon.getPath(), 'insert_at', function() {
    logArray(polygon.getPath());
  });
}  

function logArray (array) {
  var coords_abrangencia = [];

  for (var i = 0; i < array.getLength(); i++) {
    coords_abrangencia.push({
      lat: array.getAt(i).lat(),
      lng: array.getAt(i).lng()
    });
  }
  //aqui está disponivel todas as coordenadas
  console.log("coordenadas de regiões de atendimento", coords_abrangencia);
}
