let gulp = require("gulp"),
  concat = require("gulp-concat"),
  prefix = require("gulp-autoprefixer"),
  // sass = require("gulp-sass")(require("sass")),
  pug = require("gulp-pug"),
  uglify = require("gulp-uglify"),
  notify = require("gulp-notify"),
  zip = require("gulp-zip");
// CSS Task

gulp.task("sass", function () {
  return gulp
    .src("project/css/main.scss")
    .pipe(sass())
    .pipe(prefix("last 2 versions"))
    .pipe(concat("test.css"))
    .pipe(gulp.dest("dist"));
});
// Html Task
gulp.task("html", function () {
  return gulp
    .src("pages/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"));
});

// Js Task

gulp.task("js", function () {
  return gulp
    .src("src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(gulp.dest("dist/js"));
});

// Compress Files

gulp.task("compress", function () {
    return gulp.src('dist/*')      // ** all folders
            .pipe(zip('website.zip'))
            .pipe(notify('Files Are Compressed'))
            .pipe(gulp.dest('.'))
});
