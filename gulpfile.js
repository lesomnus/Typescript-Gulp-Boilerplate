var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var merge = require('merge2');

gulp.task('clean', ()=>gulp
    .src('build/*', {read: false})
    .pipe(clean())
);

gulp.task('build', ['clean'], ()=>{
    var tsProject = ts
        .createProject('tsconfig.json');

    tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('build'));
});

gulp.task('default', ['build']);