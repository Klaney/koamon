const gulp = require("gulp"),
  ts = require("gulp-typescript"),
  tsProject = ts.createProject("tsconfig.json"),
  del = require("del"),
  util = require("util");

let watcher = gulp.watch("src/**/*.ts", ["clean", "compile"]);

gulp.task("clean", cb => {
  return del(["dist"]);
});

gulp.task("compile", ["clean"], () => {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"));
});

watcher.on("change", event => {
  console.log("change detected, cleaning and recompiling to the dist folder");
});

gulp.task("build", ["clean", "compile"], () => {
  util.log("default task executed.");
});
