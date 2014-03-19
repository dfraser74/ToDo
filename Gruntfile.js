
module.exports = function(grunt) {

    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'config/karma.conf.js',
                background: true
            }
        },
        watch: {
            karma: {
                files: ['js/*.js', 'test/*.js', 'lib/*.js'],
                tasks: ['karma:unit:run']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('devmode', ['karma:unit', 'watch']);
};