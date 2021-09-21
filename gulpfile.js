/* ============================== */
/*  CONSTANTS
/* ============================== */

// Dependencies
const { src, dest, lastRun, watch, series } = require('gulp');
const $ = require('gulp-load-plugins') ({
    pattern: ['*'],
    scope: ['devDependencies']
});
const browserSync = require('browser-sync').create();
const path = require('path');
const pkg = require('./package.json');


/* ============================== */
/*  BANNER
/* ============================== */

const banner = [
    '/* ========================================================================================== */\n' +
    '/*  Project: <%= package.title %>\n' +
    '/*  Author: <%= package.author.name %>\n' +
    '/*  Date: ' + new Date() + '\n' +
    '/*  \n' +
    '/*  Copyright © ' + new Date().getFullYear() + ' <%= package.author.company %>\n' +
    '/*  <%= package.author.url %>\n' +
    '/* ========================================================================================== */\n\n'
].join('\n');


/* ============================== */
/*  HTML
/* ============================== */

/* ========================================================================================== */
/*  This task compiles source HTML files, places the files in the destination path, and
/*  reloads the page.
/* ========================================================================================== */

function html() {
    return src([
        pkg.paths.src.root + '**/*.html',
        '!' + pkg.paths.src.root + 'partials/**/*.html',
        '!' + pkg.paths.src.root + 'shared/*.html'
    ])
        .pipe($.fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe($.cacheBust({
            type: 'timestamp'
        }))
        .pipe(dest([
            pkg.paths.repo.root
        ]))
        .pipe(browserSync.stream());
}


/* ============================== */
/*  CSS
/* ============================== */

/* ========================================================================================== */
/*  This task compiles source SCSS files, strips comments, adds vendor prefixes, combines
/*  media queries, minifies, appends ".min" to the filenames before the extension, places
/*  the files in the destination path, and reloads the page. If an error occurs, the
/*  "plumber" pipe prevents the stream from breaking and displays the error via popup.
/* ========================================================================================== */

function css() {
    return src([
        pkg.paths.src.scss + '**/*.scss'
    ])
        .pipe($.plumber({
            errorHandler: $.notify.onError('Error: <%= error.message %>')
        }))
        // .pipe($.sourcemaps.init())
        .pipe($.dartSass())
        .pipe($.stripCssComments({
            preserve: false
        }))
        .pipe($.autoprefixer({
            cascade: false
        }))
        .pipe($.groupCssMediaQueries())
        // .pipe($.sourcemaps.write('./'))
        .pipe($.flatten({
            includeParents: 0
        }))
        .pipe($.cleanCss({
            level: {
                2: {
                    restructureRules: true
                }
            }
        }))
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe($.header(banner, {
            package: pkg
        }))
        .pipe(dest([
            pkg.paths.repo.css
        ]))
        .pipe(browserSync.stream());
}


/* ============================== */
/*  IMAGES
/* ============================== */

/* ========================================================================================== */
/*  This task optimizes source image files, and places the files in the destination path.
/* ========================================================================================== */

function images() {
    return src([
        pkg.paths.src.img + '**/*'
    ], {
        since: lastRun(images)
    })
        .pipe($.directorySync(pkg.paths.src.img, pkg.paths.repo.img))
        .pipe($.imagemin([
            $.imagemin.gifsicle({
                interlaced: true,
                optimizationLevel: 3
            }),
            $.imagemin.mozjpeg({
                progressive: true
            }),
            $.imageminPngquant({
                dithering: 1,
                quality: [ 0.8, 0.9 ],
                speed: 1,
                strip: true
            }),
            $.imagemin.svgo({
                plugins: [
                    // { addAttributesToSVGElement: true },
                    // { addClassesToSVGElement: true },
                    { cleanupAttrs: true },
                    { cleanupEnableBackground: true },
                    { cleanupIDs: true },
                    { cleanupListOfValues: true },
                    { cleanupNumericValues: true },
                    { collapseGroups: true },
                    { convertColors: true },
                    // { convertEllipseToCircle: true },
                    { convertPathData: true },
                    // { convertShapeToPath: true },
                    { convertStyleToAttrs: true },
                    { convertTransform: true },
                    { inlineStyles: true },
                    { mergePaths: true },
                    // { minifyStyles: true },
                    // { moveElemsAttrsToGroup: true },
                    // { moveGroupAttrsToElems: true },
                    // { prefixIDs: true },
                    // { removeAttributesBySelector: true },
                    // { removeAttrs: true },
                    { removeComments: true },
                    { removeDesc: true },
                    // { removeDimensions: true },
                    { removeDoctype: true },
                    { removeEditorsNSData: true },
                    // { removeElementsByAttr: true },
                    { removeEmptyAttrs: true },
                    { removeEmptyContainers: true },
                    { removeEmptyText: true },
                    { removeHiddenElems: true },
                    { removeMetadata: true },
                    { removeNonInheritableGroupAttrs: true },
                    // { removeOffCanvasPaths: true },
                    { removeRasterImages: true },
                    { removeScriptElement: true },
                    { removeStyleElement: true },
                    { removeTitle: true },
                    { removeUnknownsAndDefaults: true },
                    { removeUnusedNS: true },
                    { removeUselessDefs: true },
                    { removeUselessStrokeAndFill: true },
                    { removeViewBox: true },
                    // { removeXMLNS: true },
                    { removeXMLProcInst: true },
                    { reusePaths: true },
                    { sortAttrs: true },
                    // { sortDefsChildren: true }
                ]
            })
        ], {
            verbose: true
        }))
        .pipe(dest([
            pkg.paths.repo.img
        ]))
        .pipe(browserSync.stream());
}


/* ============================== */
/*  JS
/* ============================== */

/* ========================================================================================== */
/*  This task strips console, alert, and debugger statements from source JS files, minifies,
/*  appends ".min" to the filenames before the extension, places the files in the
/*  destination path, and reloads the page. If an error occurs, the "plumber" pipe prevents
/*  the stream from breaking and displays the error via popup.
/* ========================================================================================== */

function js() {
    return src([
        pkg.paths.src.js + '**/*.js'
    ], {
        since: lastRun(js)
    })
        .pipe($.plumber({
            errorHandler: $.notify.onError('Error: <%= error.message %>')
        }))
        .pipe($.flatten({
            includeParents: 0
        }))
        .pipe($.stripDebug())
        .pipe($.uglifyEs.default())
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe($.header(banner, {
            package: pkg
        }))
        .pipe(dest([
            pkg.paths.repo.js
        ]))
        .pipe(browserSync.stream());
}


/* ============================== */
/*  SERVE
/* ============================== */

/* ========================================================================================== */
/*  This task launches a local Browsersync server in a browser, watches for file changes,
/*  and runs the respective task when changes are detected.
/* ========================================================================================== */

function serve() {

    // Browsersync
    browserSync.init({
        notify: false,
        server: pkg.paths.repo.root
    });

    // HTML
    watch([
        pkg.paths.src.root + '**/*.html'
    ], series(html))
        .on('add', series(html))
        .on('unlink', (filepath) => {
            const srcPath = path.relative(path.resolve(pkg.paths.src.root), filepath);
            const destPath = path.resolve(pkg.paths.repo.root, srcPath);

            $.del.sync(destPath);
        });

    // CSS
    watch([
        pkg.paths.src.scss + '**/*.scss'
    ], series(css));

    // Images
    watch([
        pkg.paths.src.img + '**/*'
    ], series(images));

    // JS
    watch([
        pkg.paths.src.js + '**/*.js'
    ], series(js));
}


/* ============================== */
/*  DEFAULT
/* ============================== */

/* ========================================================================================== */
/*  This task sequentially runs a series of tasks for local development, launches a local
/*  server, watches for file changes, and reloads the page when changes are detected.
/* ========================================================================================== */

exports.default = series(
    html,
    css,
    images,
    js,
    serve
);

exports.build = series(
    html,
    css,
    images,
    js,
);