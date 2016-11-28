(function(){

  'use strict';

  var pre = document.getElementById('js-pre');

  pre.innerHTML = JSON.stringify(new WebModule.UserAgent(), null, 2);

}());
