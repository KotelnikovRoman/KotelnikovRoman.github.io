var gulp = require("gulp"),
    sass = require("gulp-sass"),
    babel = require("gulp-babel"),
    sourcemaps = require("gulp-sourcemaps"),
    prefix = require("gulp-autoprefixer"),
    uglify = require("gulp-uglify"),
    watch = require("gulp-watch"),
    changed = require("gulp-changed"),
    csso = require("gulp-csso"),
    through2 = require("through2"),
    fs = require("fs"),
    del = require("del"),
    typescript = require("gulp-typescript"),
    uglifyOptions = {
        mangle: {},
        compress: {
            sequences: true,
            dead_code: true,
            drop_debugger: true,
            comparisons: true,
            conditionals: true,
            evaluate: true,
            booleans: true,
            loops: true,
            unused: true,
            hoist_funs: true,
            if_return: true,
            join_vars: true,
            drop_console: false,
        },
    },
    stripImportExport = require("gulp-strip-import-export");

var touch = function () {
    return through2.obj(function (file, enc, cb) {
        if (file.isNull()) {
            return cb(null, file);
        }

        // update file modification and access time
        return fs.utimesSync(file.path, new Date(), new Date());
    });
};

var clean = function (cb) {
    del.sync(["dist/"]);
    cb();
};

var scss = function (cb) {
    gulp
        .src("src/scss/main.scss")
        .on("end", function () {
            cb();
        })
        .pipe(sass().on("error", sass.logError))
        .pipe(prefix("cover 99.5%"))
        .pipe(csso())
        .pipe(gulp.dest("dist/css"));
};

var js = function (cb) {
    gulp
        .src("src/js/**/*.js")
        .on("end", function () {
            cb();
        })
        .pipe(babel())
        .pipe(uglify(uglifyOptions))
        .pipe(gulp.dest("dist/js"));
};

var ts = function (cb) {
    gulp
        .src("src/ts/**/*.ts")
        .on("end", function () {
            cb();
        })
        .pipe(
            typescript({
                target: "ESNEXT",
            })
        )
        .pipe(stripImportExport())
        // .pipe(babel())
        .pipe(uglify(uglifyOptions))
        .pipe(gulp.dest("dist/js"));
};

var all = gulp.parallel(scss, js, ts);

// run $ gulp compile
gulp.task("default", gulp.series(clean, all));

// run $ gulp watch
gulp.task("watch", function () {
    gulp.watch("src/scss/**/*.scss", scss);
    gulp.watch("src/js/**/*.js", js);
    gulp.watch("src/ts/**/*.ts", ts);
});
