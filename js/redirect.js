function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2]);//had to modify this form orginal cause the debugger would not let it go thru
}
function load(){
	var q = getParameterByName("q");
	if(typeof q !== 'undefined' && q　!= null) {
	    window.location = "http://" + window.location.hostname + window.location.pathname + q + ".html";
	}
}
window.addEventListener("pageshow", function(evt){
           load();
       }, false);
