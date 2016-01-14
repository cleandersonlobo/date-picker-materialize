Package.describe({
  name: 'cleandersonlobo:date-picker-materialize',
  version: '0.1.5',
  // Brief, one-line summary of the package.
  summary: 'Test version only the Datepicker the Materialize package.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/cleandersonlobo/date-picker-materialize.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});
Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jquery', 'client');
  api.addAssets(['font/roboto/Roboto-Bold.ttf',
    'font/roboto/Roboto-Bold.woff',
    'font/roboto/Roboto-Bold.woff2',
    'font/roboto/Roboto-Light.ttf',
    'font/roboto/Roboto-Light.woff',
    'font/roboto/Roboto-Light.woff2',
    'font/roboto/Roboto-Medium.ttf',
    'font/roboto/Roboto-Medium.woff',
    'font/roboto/Roboto-Medium.woff2',
    'font/roboto/Roboto-Regular.ttf',
    'font/roboto/Roboto-Regular.woff',
    'font/roboto/Roboto-Regular.woff2',
    'font/roboto/Roboto-Thin.ttf',
    'font/roboto/Roboto-Thin.woff',
    'font/roboto/Roboto-Thin.woff2'
  ], 'client')
  api.addFiles([
    'js/picker.js',
    'js/picker.date.js',
    'css/materialize.css'
  ], 'client');


});
