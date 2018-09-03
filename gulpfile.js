var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var merge = require('merge2');

gulp.task('clean', ()=>gulp
    .src('build/*', {read: false})
    .pipe(clean())
);

gulp.task('build-scripts', ()=>{
    var tsProject = ts
        .createProject('tsconfig.json');

    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('build'));
});

gulp.task('build', gulp.series('clean', 'build-scripts'));

gulp.task('default', gulp.series('build'));