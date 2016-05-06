//var $ = require('jquery');

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var parentURL = (window.location != window.parent.location)
            ? document.referrer
            : document.location;



// Normal Google Analytics Tracking Code Opener...
// I wish I could tell you what happens here. Honestly, I don't really understand.
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

// Tracking 'Creation' - this is where the GA magic starts to happen
ga('create', 'UA-000000-01', 'auto');


// Set our custom dimensions. This is where the actually helpful stuff really happens.

// The following are parsed from the URL given to make the iframe.
ga('set', 'dimension1', getUrlParameter('title')); // Article title
ga('set', 'dimension2', getUrlParameter('author')); // Article Author
ga('set', 'dimension3', getUrlParameter('tags')); // Article Tags

// And these two are parsed from the document referrer URL.
ga('set', 'dimension5', parentURL.href); // Parent Page (Referrer) URL
ga('set', 'dimension4', parentURL.hostname ); // Parent Page (Referrer) Domain Name

// Send the finalized pageview. This ALWAYS must happen last,
// since any custom dimensions we set above will be attached to this.
ga('send', 'pageview');
