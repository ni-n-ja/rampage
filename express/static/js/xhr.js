/*
fetch('https://localhost:4000/api', {
  mode: 'cors'
}).then(function(){

});
*/
$(document).click(function(e) {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.open('GET', 'http://localhost:20000/api/datastore/report/document/_fields ');
  xhr.addEventListener('load', function(){
  console.log(JSON.stringify(xhr));
  }, false);
  xhr.send(null);
});
