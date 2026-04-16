// ========================================================================== //
//  CONSTANTS
// ========================================================================== //

// Dependencies
const { dest, lastRun, series, src, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const cleanCss = require("gulp-clean-css");
const del = require("del");
const fileInclude = require("gulp-file-include");
const flatten = require("gulp-flatten");
const fs = require("fs");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const header = require("gulp-header");
const notify = require("gulp-notify");
const path = require("path");
const pkg = require("./package.json");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const semver = require("semver");
const stripCssComments = require("gulp-strip-css-comments");
const uglifyEs = require("gulp-uglify-es");

// ========================================================================== //
//  VARIABLES
// ========================================================================== //

const rhslPath = "red_hat_shared_libs/dist/rhds-elements/";
const basePath = pkg.paths.repo.root + "node_modules/@rhdc-fed/" + rhslPath;
const versionDirs = fs
    .readdirSync(basePath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((name) => semver.valid(name));
const latestVersion = semver.maxSatisfying(versionDirs, "*");

// ========================================================================== //
//  BANNER
// ========================================================================== //

const banner = [
    "/* ================================================================================ */\n" +
        "/*  Project: <%= package.title %>\n" +
        "/*  Author: <%= package.author.name %>\n" +
        "/*  Date: " +
        new Date() +
        "\n" +
        "/*  \n" +
        "/*  Copyright © " +
        new Date().getFullYear() +
        " <%= package.author.company %>\n" +
        "/*  <%= package.author.url %>\n" +
        "/* ================================================================================ */\n\n",
].join("\n");

// ========================================================================== //
//  COPY - RHDS ELEMENTS
// ========================================================================== //

// ========================================================================== //
//  This task copies the latest RHDS Elements JS files from the
//  "red_hat_shared_libs" package into the JS "vendors" folder.
// ========================================================================== //

function copyRhdsElements() {
    del.sync([pkg.paths.docs.js + "vendors/" + rhslPath]);

    return src([basePath + latestVersion + "/**/**/*"]).pipe(
        dest([pkg.paths.docs.js + "vendors/" + rhslPath])
    );
}

// ========================================================================== //
//  HTML
// ========================================================================== //

// ========================================================================== //
//  This task compiles source HTML files, places the files in the
//  destination path, and reloads the page.
// ========================================================================== //

function html() {
    return (
        src([
            pkg.paths.src.root + "**/*.html",
            "!" + pkg.paths.src.root + "partials/**/*.html",
            "!" + pkg.paths.src.root + "shared/*.html",
        ])
            .pipe(
                fileInclude({
                    prefix: "@@",
                    basepath: "@file",
                })
            )
            // .pipe(
            //     cacheBust({
            //         type: "timestamp",
            //     })
            // )
            .pipe(dest([pkg.paths.docs.root]))
            .pipe(browserSync.stream())
    );
}

// ========================================================================== //
//  CSS
// ========================================================================== //

// ========================================================================== //
//  This task compiles source SCSS files, strips comments, adds vendor prefixes, combines
//  media queries, minifies, appends ".min" to the filenames before the extension, places
//  the files in the destination path, and reloads the page. If an error occurs, the
//  "plumber" pipe prevents the stream from breaking and displays the error via popup.
// ========================================================================== //

function css() {
    return (
        src([pkg.paths.src.scss + "**/*.scss"])
            .pipe(
                plumber({
                    errorHandler: notify.onError("Error: <%= error.message %>"),
                })
            )
            // .pipe(sourcemaps.init())
            .pipe(sass().on("error", sass.logError))
            .pipe(
                stripCssComments({
                    preserve: false,
                })
            )
            .pipe(
                autoprefixer({
                    cascade: false,
                })
            )
            .pipe(groupCssMediaQueries())
            // .pipe(sourcemaps.write('./'))
            .pipe(
                flatten({
                    includeParents: 0,
                })
            )
            .pipe(
                cleanCss({
                    level: {
                        2: {
                            restructureRules: true,
                        },
                    },
                })
            )
            .pipe(
                rename({
                    suffix: ".min",
                })
            )
            .pipe(
                header(banner, {
                    package: pkg,
                })
            )
            .pipe(dest([pkg.paths.docs.css]))
            .pipe(browserSync.stream())
    );
}

// ========================================================================== //
//  JS
// ========================================================================== //

// ========================================================================== //
//  This task strips console, alert, and debugger statements from source JS files, minifies,
//  appends ".min" to the filenames before the extension, places the files in the
//  destination path, and reloads the page. If an error occurs, the "plumber" pipe prevents
//  the stream from breaking and displays the error via popup.
// ========================================================================== //

function js() {
    return (
        src(
            [
                pkg.paths.src.js + "**/*.js",
                "!" +
                    pkg.paths.src.js +
                    rhslPath +
                    latestVersion +
                    "/",
            ],
            {
                since: lastRun(js),
            }
        )
            .pipe(
                plumber({
                    errorHandler: notify.onError("Error: <%= error.message %>"),
                })
            )
            .pipe(
                flatten({
                    includeParents: 0,
                })
            )
            // .pipe(stripDebug())
            .pipe(uglifyEs.default())
            .pipe(
                rename({
                    suffix: ".min",
                })
            )
            .pipe(
                header(banner, {
                    package: pkg,
                })
            )
            .pipe(dest([pkg.paths.docs.js]))
            .pipe(browserSync.stream())
    );
}

// ========================================================================== //
//  SERVE
// ========================================================================== //

// ========================================================================== //
//  This task launches a local Browsersync server in a browser, watches for file changes,
//  and runs the respective task when changes are detected.
// ========================================================================== //

function serve() {
    // Browsersync
    browserSync.init({
        notify: false,
        server: pkg.paths.docs.root,
    });

    // HTML
    watch([pkg.paths.src.root + "**/*.html"], series(html))
        .on("add", series(html))
        .on("unlink", (filepath) => {
            const srcPath = path.relative(
                path.resolve(pkg.paths.src.root),
                filepath
            );
            const destPath = path.resolve(pkg.paths.docs.root, srcPath);

            del.sync(destPath);
        });

    // CSS
    watch([pkg.paths.src.scss + "**/*.scss"], series(css));

    // Images
    // watch([pkg.paths.src.img + "**/*"], series(images));

    // JS
    watch([pkg.paths.src.js + "**/*.js"], series(js));
}

// ========================================================================== //
//  DEFAULT
// ========================================================================== //

// ========================================================================== //
//  This task sequentially runs a series of tasks for local development, launches a local
//  server, watches for file changes, and reloads the page when changes are detected.
// ========================================================================== //

exports.default = series(copyRhdsElements, html, css, js, serve);

// ========================================================================== //
//  BUILD
// ========================================================================== //

// ========================================================================== //
//  This task sequentially runs a series of tasks, without launching a local server or
//  watching for file changes.
// ========================================================================== //

exports.build = series(copyRhdsElements, html, css, js);
