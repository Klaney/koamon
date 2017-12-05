var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var del = require("del");
var util = require("util");

gulp.task("clean", function(cb) {
    return del([
        'dist'
    ])
})

gulp.task("compile", function (cb) {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("build", [
    "clean",
    "compile"
], function() {
    util.log('default task executed.');
  })