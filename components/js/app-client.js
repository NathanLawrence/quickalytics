var $ = require('jquery');

var parseURLParam = require('./parseurl').parseURLParam;
var getURLParam = require('./parseurl').getURLParam;
var getBaseURL = require('./parseurl').getBaseURL;



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
ga('create', '%%TrackingID%%', 'auto');


// Send the finalized pageview. This ALWAYS must happen last,
// since any custom dimensions we set above will be attached to this.
ga('send', 'pageview');
