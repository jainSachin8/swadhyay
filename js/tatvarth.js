// JavaScript source code
$(document).ready(function () {
    var result = get_query();
    loadContent('tatvarth/' + result + '.html', '#' + result);
});


function get_query() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "gatha" in eg "https://example.com/?some_key=some_value"
    //let value = params.gatha; // "some_value"
    return params.gatha; // "gatha"
}
var reload = function (section) {
    var url = window.location.origin +'/tatvarth.html'+ section;
    $(location).prop('href', url)
}
var loadContent = function (gatha, section) {
    $(section).load(gatha);
}

function displayTabData(evt, tabId) {
    // Declare all variables
    var i, tabcontent, tablinks;
    
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " active";
}