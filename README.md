pickadate

Meteor packaging of amsul/pickadate.js support

This package is MIT Licensed. Do whatever you like with it but any responsibility for doing so is your own.

All rights to amsul/pickadate.js are with the original author

DatePicker Style

All rights to Materialize are with the original author

Example

In your handlebars template:

<input type="text" class="form-control datepicker">
In client-side JS code:

Template.mytemplate.rendered=function() {
    $('.datepicker').pickadate();
}
See http://amsul.ca/pickadate.js/index.htm for more
