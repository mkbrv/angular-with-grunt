/**
 * Created by mcsere on 1/9/15.
 */
module.exports = function (grunt) {
    grunt.registerTask('deploy', function (env) {
        grunt.task.run([
            'env:' + env,
            "clean",
            'jshint',
            'copy:static',
            'less',
            'useminPrepare',
            'requirejs',
            'concat',
            'usemin',
            'processhtml',
            'uglify',
            'cssmin'
        ]);
    });
};