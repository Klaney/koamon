const gulp = require("gulp"),
  ts = require("gulp-typescript"),
  tsProject = ts.createProject("tsconfig.json"),
  del = require("del"),
  util = require("util"),
  nodemon = require("gulp-nodemon"),
  jest = require("gulp-jest").default;

gulp.task("clean", cb => {
  return del(["dist"]);
});

gulp.task("compile", ["clean"], () => {
  return tsProject
    .src()
    .pipe(tsProject())
    .js
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", () => {
  gulp.watch(["src/**/*.ts", "test/**/*.ts"], ["clean", "compile"]);
})

gulp.task("nodemon", ["compile"], cb => {
  nodemon({
    script: "dist/api/server.js"
  })
})

gulp.task("default", ["clean", "compile", "watch", "nodemon"], () => {
  return util.log("default task executed.");
});

gulp.task("test", ["clean", "compile", "watch"], cb => {
  return gulp.src("./test").pipe(jest())
})