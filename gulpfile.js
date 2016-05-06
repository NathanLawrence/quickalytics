// Deployment variables -- YOU MUST FILL THESE IN
// Right now, they only have example values.
var baseURL = 'qa.exampledomain.com';
var trackingID = 'UA-000000-01';
var orgName = 'An Example Organization';


var gulp = require('gulp'),
	gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    replace = require('gulp-replace');


gulp.task('js', function(){
	gulp.src('components/js/generate-client.js')
		.pipe(replace('%%BaseURL%%', baseURL))
		.pipe(replace('%%TrackingID%%', trackingID))
		.pipe(replace('%%OrgName%%', orgName))
		.pipe(gulp.dest('./build/js'));

	gulp.src('components/js/app-client.js')
		.pipe(replace('%%BaseURL%%', baseURL))
		.pipe(replace('%%TrackingID%%', trackingID))
		.pipe(replace('%%OrgName%%', orgName))
		.pipe(gulp.dest('./build/js'));
});

gulp.task('html', function(){
	return gulp.src('components/**/*.html')
	.pipe(replace('%%BaseURL%%', baseURL))
	.pipe(replace('%%TrackingID%%', trackingID))
	.pipe(replace('%%OrgName%%', orgName))
	.pipe(gulp.dest('build'));
});

gulp.task('build', ['js','html']);