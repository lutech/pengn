const gulp = require('gulp');
const rename = require('gulp-rename');
const replace = require('gulp-string-replace')
const debug = require('gulp-debug');
const del = require('del');
const watch = require('gulp-watch');
const gulpIgnore = require('gulp-ignore');
const insert = require('gulp-insert');

const SRC = 'src/';
const DEST = 'app/';
const PARENT_PROJECT_SRC = '../src/';
const SHARED_MODULES_SRC = '../src/app/';
const SHARED_MODULES_DEST = 'app/app/';

function removeTns (path) {
    path.basename = path.basename.replace('.tns', '');
}

function removePhone (path) {
    path.basename = path.basename.replace('.phone', '');
}


gulp.task('clean.Dist', () => {
    return del([        
        'app/**/*',
        '!**/vendor.ts',
        '!**/vendor-platform.android.ts',
        '!**/vendor-platform.ios.ts'
    ]);
});


gulp.task('clean.AppFldr', () => {
    return del([        
        'app/app/'
    ]);
});

// gulp.task('resources.App_Resources', () => {
//     return gulp.src(['App_Resources/**/*'], {follow: true})
//         .pipe(gulp.dest(`${DEST}App_Resources`));
// });

// Bring in only the main.tns.ts file from Parent Project.
gulp.task('resources.MainTsFile', () => {
    return gulp.src([`${PARENT_PROJECT_SRC}main.tns.ts`], {follow: true})
        .pipe(rename(removeTns))
        //.pipe(debug({title: 'resources.MainTsFile'}))
        .pipe(gulp.dest(DEST, {overwrite: true}));
});

// Bring in all shared modules from Parent Project.
gulp.task('resources.NativescriptCoreApp', () => {
    return gulp.src([`${SRC}**/*`], {follow: true})
        // .pipe(debug({title: 'resources.Assets'}))
        .pipe(gulp.dest(DEST, {overwrite: true}));
});

gulp.task('project.Typescript', () => {    
    var tns = '**/*.tns.*';
    var spec = '**/*.spec.*';
    var web = 'shared/web/**/*';
    return gulp.src([`${SHARED_MODULES_SRC}**/*.ts`], {follow: true})
        .pipe(gulpIgnore.exclude(web))
        .pipe(gulpIgnore.exclude(tns))
        .pipe(gulpIgnore.exclude(spec))
        //.pipe(debug({title: 'project.Typescript'}))
        .pipe(gulp.dest(SHARED_MODULES_DEST, {overwrite: true}));
});

gulp.task('project.Styles', () => {
    var tns = '**/*.tns.*';
    var web = 'shared/web/**/*';
    return gulp.src([`${SHARED_MODULES_SRC}**/*.scss`], {follow: true})
        .pipe(gulpIgnore.exclude(web))
        .pipe(gulpIgnore.exclude(tns)) 
        // .pipe(debug({title: 'project.Typescript'}))
        .pipe(gulp.dest(SHARED_MODULES_DEST));
});

gulp.task('tns.Typescript', () => {  
    var web = 'shared/web/**/*';
    return gulp.src([`${SHARED_MODULES_SRC}**/*.tns.ts`, ], {follow: true})
        .pipe(gulpIgnore.exclude(web))
        .pipe(rename(removeTns))
        //.pipe(debug({title: 'tns.Typescript'}))
        .pipe(gulp.dest(SHARED_MODULES_DEST, {overwrite: true}));
});

gulp.task('tns.Templates', () => {
    var web = 'shared/web/**/*';
    return gulp.src([`${SHARED_MODULES_SRC}**/*.html`, 
                    `${SHARED_MODULES_SRC}**/*.tns.ios.html`, 
                    `${SHARED_MODULES_SRC}**/*.tns.android.html`], {follow: true})
        .pipe(gulpIgnore.exclude(web))
        .pipe(rename(removeTns))
        .pipe(debug({title: 'tns.Templates'}))
        .pipe(gulp.dest(SHARED_MODULES_DEST, {overwrite: true}));
});

gulp.task('tns.Styles', () => {
    var web = 'shared/web/**/*';
    return gulp.src([`${SHARED_MODULES_SRC}**/*.tns.scss`, 
                    `${SHARED_MODULES_SRC}**/*.tns.ios.scss`, 
                    `${SHARED_MODULES_SRC}**/*.tns.android.scss`], {follow: true})
        .pipe(gulpIgnore.exclude(web))
        .pipe(rename(removeTns))
        // .pipe(debug({title: 'tns.Styles'}))
        .pipe(gulp.dest(SHARED_MODULES_DEST, {overwrite: true}));
});

gulp.task('phone.Typescript', () => {
    return gulp.src([`${SHARED_MODULES_SRC}**/*.tns.phone.ts`], {follow: true})
        .pipe(rename(removeTns))
        .pipe(rename(removePhone))
        // .pipe(debug({title: 'phone.Typescript'}))
        .pipe(gulp.dest(SHARED_MODULES_DEST, {overwrite: true}));
});

gulp.task('phone.Templates', () => {
    return gulp.src([`${SHARED_MODULES_SRC}**/*.tns.phone.html`, `${SRC}**/*.tns.ios.phone.html`, `${SRC}**/*.tns.android.phone.html`], {follow: true})
        .pipe(rename(removeTns))
        .pipe(rename(removePhone))
        // .pipe(debug({title: 'phone.Templates'}))
        .pipe(gulp.dest(SHARED_MODULES_DEST, {overwrite: true}));
});

gulp.task('phone.Styles', () => {
    return gulp.src([`${SHARED_MODULES_SRC}**/*.tns.phone.scss`, `${SRC}**/*.tns.ios.phone.scss`, `${SRC}**/*.tns.android.phone.scss`], {follow: true})
        .pipe(rename(removeTns))
        .pipe(rename(removePhone))
        // .pipe(debug({title: 'phone.Styles'}))
        .pipe(gulp.dest(SHARED_MODULES_DEST, {overwrite: true}));
});



gulp.task('stringReplace.NativeScriptRouterModules', () => {
    return gulp.src([`${SHARED_MODULES_DEST}**/*.ts`])
        .pipe(replace("RouterModule", 'NativeScriptRouterModule'))
        .pipe(replace(new RegExp('.*import.*@angular\/router.*;'), 'import { Routes } from "@angular/router";\nimport { NativeScriptRouterModule } from "nativescript-angular/router";'))
        .pipe(replace(new RegExp('.*import.*platform-browser.*;'), ''))
        .pipe(replace(new RegExp('.*import.*angularMaterial\/material.*module.*;'), ''))
        .pipe(replace(new RegExp('BrowserModule,'), ''))
        .pipe(replace(new RegExp('MaterialModule,'), ''))
        .pipe(replace(new RegExp('BrowserAnimationsModule,'), ''))
        // .pipe(debug({title: 'stringReplace.NativeScriptRouterModules'}))
        .pipe(gulp.dest(SHARED_MODULES_DEST));
});

gulp.task('stringReplace.NativeScriptCommonModules', () => {
    var routing = '**/*routing.*';
    var ns = '**/nativescript.module.*';
    return gulp.src([`${DEST}**/*module.ts`])
        .pipe(gulpIgnore.exclude(routing))
        .pipe(gulpIgnore.exclude(ns))
        .pipe(insert.prepend('import { NativeScriptModule } from "nativescript-angular/nativescript.module";\nimport { NativeScriptCommonModule } from "nativescript-angular/common";\n'))
        .pipe(replace(new RegExp('.*import.*SharedComponentsModule.*shared-components.*module.*;'), "import { SharedComponentsModule } from '../shared/nativescript/shared-components.module';"))
        .pipe(replace(new RegExp('.*imports.*') , 'imports: [\nNativeScriptModule,\nNativeScriptCommonModule,'))
        // .pipe(debug({title: 'stringReplace.NativeScriptCommonModules'}))
        .pipe(gulp.dest(DEST));
});

gulp.task('stringReplace.NativeScriptAppRouting', () => {
    return gulp.src([`${SHARED_MODULES_SRC}**/app-routing.module.ts`])
        .pipe(replace('"./', '"~/app/'))
        .pipe(debug({title: 'stringReplace.NativeScriptAppRouting'}))
        .pipe(gulp.dest(SHARED_MODULES_DEST));
});

gulp.task('watch.SharedModules', function () {
    return watch([`${SHARED_MODULES_SRC}**/*.html`, `${SHARED_MODULES_SRC}/**/*.scss`, `${SHARED_MODULES_SRC}/**/*.component.ts`, `${SHARED_MODULES_SRC}/**/*.module.ts`], function () {
        gulp.src([`${SHARED_MODULES_SRC}**/*.html`, `${SHARED_MODULES_SRC}/**/*.scss`, `${SHARED_MODULES_SRC}/**/*.component.ts`, `${SHARED_MODULES_SRC}/**/*.module.ts`])
        .pipe(rename(removeTns))
        .pipe(gulp.dest(SHARED_MODULES_DEST));
    });
});

// gulp.task(
//     'build.Default',
//     gulp.series(
//         'clean.Dist',
//         'resources.NativescriptCoreApp',
//         'project.Typescript',
//         'project.Styles',
//         'tns.Templates'
//     )
// );

// gulp.task(
//     'build.Phone',
//     gulp.series(
//         'build.Default',
//     )
// );


gulp.task(
    'build.Default',
    gulp.series(
        'clean.Dist',
        'resources.NativescriptCoreApp',
        'project.Typescript',
        'project.Styles',
        'tns.Templates',
        'tns.Styles',
        'tns.Typescript',
        'stringReplace.NativeScriptRouterModules',
        'stringReplace.NativeScriptCommonModules',
        'stringReplace.NativeScriptAppRouting'
    )
);

gulp.task(
    'build.Phone',
    gulp.series(
        'build.Default',
        'phone.Typescript',
        'phone.Templates',
        'phone.Styles'
    )
);


/**
 * For non webpack builds, scss needs to be converted to css
 */
gulp.task('tns.ComponentStyles', () => {
    return gulp.src([`${DEST}/**/*.component.ts`], {follow: true})
        .pipe(replace('.scss\'', '.css\'', { logs: { enabled: false }}))
        // .pipe(debug({title: 'tns.ComponentStyles'}))
        .pipe(gulp.dest(DEST, {overwrite: true}));
});

gulp.task(
    'build.cli.Default',
    gulp.series(
        'build.Default',
        'tns.ComponentStyles'
    )
);

gulp.task(
    'build.cli.Phone',
    gulp.series(
        'build.Phone',
        'tns.ComponentStyles'
    )
);

gulp.task('tns.Livesync', () => {
    return gulp.watch([`${SRC}**/*.tns.html`, `${SRC}/**/*.tns.scss`, `${SRC}/**/*.component.ts`])
        .on('change', (file) => {
            var outputDest = file.replace(SRC, DEST);
            outputDest = outputDest.substring(0, outputDest.lastIndexOf('/'));
            gulp.src([file])
                .pipe(rename(removeTns))
                .pipe(replace('.scss\'', '.css\'', { logs: { enabled: false }}))
                .pipe(debug({title: 'tns.Livesync'}))
                .pipe(gulp.dest(outputDest, {overwrite: true}));
        });
});

gulp.task('tns.Livesync.Phone', () => {
    return gulp.watch([`${SRC}**/*.tns.phone.html`, `${SRC}/**/*.tns.phone.scss`, `${SRC}/**/*.component.ts`])
        .on('change', (file) => {
            var outputDest = file.replace(SRC, DEST);
            outputDest = outputDest.substring(0, outputDest.lastIndexOf('/'));
            gulp.src([file])
                .pipe(rename(removeTns))
                .pipe(rename(removePhone))
                .pipe(replace('.scss\'', '.css\'', { logs: { enabled: false }}))
                .pipe(debug({title: 'tns.Livesync.Phone'}))
                .pipe(gulp.dest(outputDest, {overwrite: true}));
        });
});
