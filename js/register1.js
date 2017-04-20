function getActivatedObject(e) {
  var obj;
  if (!e) {
    // early version of IE
    obj = window.event.srcElement;
  } else if (e.srcElement) {
    // IE 7 or later
    obj = e.srcElement;
  } else {
    // DOM Level 2 browlser
    obj = e.target;
  }
  return obj;
}
function createRequest() {
  try {
    request = new XMLHttpRequest();
  } catch (tryMS) {
    try {
      request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (otherMS) {
      try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (failed) {
        request = null;
      }
    }
  }
  return request;
}
 function getHTTPObject(){

      if (window.ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");

      else if (window.XMLHttpRequest) return new XMLHttpRequest();

      else {

      alert("Your browser does not support AJAX.");

      return null;

      }

      }