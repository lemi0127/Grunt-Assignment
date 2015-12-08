module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [

                    {
                        expand: true,
                        flatten: true,
                        src: ['bower_components/font-awesome/fonts/*'],
                        dest: 'dist/fonts',
                        filter: 'isFile'
                },
                    {
                        expand: true,
                        flatten: true,
                        src: ['bower_components/bootstrap/dist/css/bootstrap.css'],
                        dest: 'dist/css/',
                        filter: 'isFile'
                },
                    {
                        expand: true,
                        flatten: true,
                        src: ['bower_components/bootstrap/dist/js/bootstrap.js'],
                        dest: 'dist/js/',
                        filter: 'isFile'
                },
                    {
                        expand: true,
                        flatten: true,
                        src: ['bower_components/font-awesome/css/font-awesome.css'],
                        dest: 'dist/css/',
                        filter: 'isFile'
                },
                    {
                        expand: true,
                        flatten: true,
                        src: ['bower_components/jquery/dist/jquery.js'],
                        dest: 'dist/js/',
                        filter: 'isFile'
                },
                    {
                        expand: true,
                        flatten: true,
                        src: ['bower_components/jquery.easing/js/*'],
                        dest: 'dist/js/',
                        filter: 'isFile'
                },
                    {
                        expand: true,
                        flatten: true,
                        src: ['css/main.css'],
                        dest: 'dist/css/',
                        filter: 'isFile'
                },
                    {
                        expand: true,
                        flatten: true,
                        src: ['js/main.js'],
                        dest: 'dist/js/',
                        filter: 'isFile'
                },
                    {
                        expand: true,
                        flatten: true,
                        src: ['index.html'],
                        dest: 'dist/',
                        filter: 'isFile'
                },
                {
                        expand: true,
                        flatten: true,
                        src: ['images/*'],
                        dest: 'dist/images/',
                        filter: 'isFile'
                },
                {
                        expand: true,
                        flatten: true,
                        src: ['fonts/*'],
                        dest: 'dist/fonts/',
                        filter: 'isFile'
                },

                ]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: {
                    'dist/js/main.min.js': ['dist/js/jquery.js', 'dist/js/main.js', 'dist/js/bootstrap.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/main.min.css': ['dist/css/bootstrap.css', 'dist/css/font-awesome.css', 'dist/css/main.css']
                }
            }
        },

        clean: {
            css: ["dist/css/*.css", "!dist/css/*.min.css"],
            js: ["dist/js/*.js", "!dist/js/*.min.js"]
        }

    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['copy', 'uglify', 'cssmin', 'clean']);

}