'use strict'

let gulp = require("gulp");
let tsc = require("gulp-typescript");


gulp.task("compile_main", function () {
    return gulp
        .src("src/*.ts")
        .pipe(tsc({
            "target": "ES5",
            "sourceMap": true,
            "removeComments": true
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("compile_config", function () {
    return gulp
        .src("src/_deployConfiguration/**/*.ts", "src/*.ts")
        .pipe(tsc({
            "target": "ES5",
            "sourceMap": true,
            "removeComments": true
        }))
        .pipe(gulp.dest("dist/_deployConfiguration"));
});

gulp.task("compile_common", function () {
    return gulp
        .src("src/common/**/*.ts", "src/*.ts")
        .pipe(tsc({
            "target": "ES5",
            "sourceMap": true,
            "removeComments": true
        }))
        .pipe(gulp.dest("dist/common"));
});

gulp.task("compile", gulp.series(["compile_common", "compile_main", "compile_config"]));