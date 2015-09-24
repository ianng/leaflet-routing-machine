Package.describe({
  name: 'ianng:leaflet-routing-machine',
  summary: 'perliedman:leaflet-routing-machine porting to meteor',
  version: '1.0.0',
  git: 'https://github.com/ianng/leaflet-routing-machine'
});


Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('bevanhunt:leaflett@1.0.3', 'client');
  api.addFiles('ianng:leaflet-routing-machine.js', 'client');
  api.addFiles('ianng:leaflet-routing-machine.css', 'client');
});


Package.onTest(function(api) {

  api.use('tinytest');
  api.use('ianng:leaflet-routing-machine');
});
