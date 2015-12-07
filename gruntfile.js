module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [

                    {
                        expand: true,
                        flatten: true,
                        src: ['path/**'],
                        dest: 'dest/',
                        filter: 'isFile'
                    },
    ],
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    //grunt.registerTask('default', ['copy', 'uglify', 'cssmin', 'clean']);

}