# Quickalytics
Google Analytics that follows a story around after it's republished.

## How To Get Set Up

1. Make sure you have Node.js installed on your local machine.

2. Clone this repository locally.

3. Navigate into the directory and run `npm install` to install all dependencies. If you haven't already, also globally install Mocha (`npm install -g mocha`) and Gulp (`npm install -g gulp`).

4. Set up your Google Analytics property. It should be a unique tracking ID for a subdomain that will only store these files (e.g. `qa.exampledomain.com`).

5. Set up your Custom Dimensions based on [these instructions](https://developers.google.com/analytics/devguides/collection/analyticsjs/custom-dims-mets). You'll need the folllowing, all hit-scoped and active:

    - dimension1 - qa-article-title
    - dimension2 - qa-article-author
    - dimension3 - qa-article-tags
    - dimension4 - qa-host-domain
    - dimension5 - qa-host-url

    Google Analytics will be seeing all 'hits' as coming from the same page (`qa.exampledomain.com/app.html`), so you want to make sure that the information about what the actual pages and articles are is going in the right direction.

6. Fill in all the variables in `gulpfile.js` with the information from Google Analytics and about your organization. On build, this information will go through all the JavaScript and HTML, customizing the admin interface, creating valid embed codes and actually enabling Google Analytics tracking.

7. Go back to the command line and run `gulp build` to actually build all your files. There should now be a fresh 'build' directory filled with everything you need to upload to your server and bootstrap the project.

8. Upload to your server (which just needs to serve up static HTML and JavaScript, nothing special) and navigate in a browser to `qa.exampledomain.com/generate.html` to see your application live. If you want to test your connection to Google Analytics, you can go to `qa.exampledomain.com/app.html` and check the 'Real Time' area of Google Analytics to see if your traffic is being logged.

## The Legal Stuff

Every API has different restrictions and opinions around how tracking should be handled. Some even ban article-embedded tracking outright. I did not write this tool to get around such rules or restrictions, and I'm hopeful that anyone using it will keep that in mind. The onus is on an individual outlet, publisher or individual using this tool to decide if the way they are using it is healthy and helpful to the end user.

Also consider implementing a privacy policy. You can just add a link to it in the `app.html` file that will be embedded in every page, then store it on the same serve.