var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var del = require("del");
var util = require("util");

gulp.task("clean", function(cb) {
  return del(["dist"]);
});

gulp.task("compile", ["clean"] ,function() {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"));
});

var watcher = gulp.watch("src/**/*.ts", ["clean", "compile"]);

watcher.on("change", function(event){
  console.log("change detected, cleaning and recompiling to the dist folder");
})

gulp.task("build", ["clean", "compile"], function() {
  util.log("default task executed.");
});
