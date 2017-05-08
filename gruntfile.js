module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 
    grunt.loadNpmTasks('grunt-postcss');

    grunt.initConfig({
        clean: {
            build: {
                src: ['web/']
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'php', src: '**/*', dest: 'web/php/' },
                    { expand: true, cwd: 'documents', src: '**/*', dest: 'web/documents/' },
                    { expand: true, cwd: 'mok-project', src: '**/*', dest: 'web/mok-project/' },
                    { expand: true, cwd: 'terminal-reskin', src: '**/*', dest: 'web/terminal-reskin/' }
                ]
            }
        },
        minifyHtml: {
            options: {
                cdata: true
            },
            dist: {
                files: {
                    'web/autonomous_drone.htm': 'autonomous_drone.htm',
                    'web/mok-project.htm': 'mok-project.htm',
                    'web/terminal-project.htm': 'terminal-project.htm',
                    'web/bearing_wipe.htm': 'bearing_wipe.htm',
                    'web/bit_error.htm': 'bit_error.htm',
                    'web/contact.htm': 'contact.htm',
                    'web/footer.htm': 'footer.htm',
                    'web/graphic_design.htm': 'graphic_design.htm',
                    'web/header.htm': 'header.htm',
                    'web/index.htm': 'index.htm',
                    'web/poc_website.htm': 'poc_website.htm',
                    'web/portfolio.htm': 'portfolio.htm',
                    'web/statistical_analysis.htm': 'statistical_analysis.htm',
                    'web/statistical_maintenance.htm': 'statistical_maintenance.htm',
                    'web/style_guide.htm': 'style_guide.htm',
                }
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({ browsers: ['last 15 versions'] })
                ]
            },
            dist: {
                expand: true,
                cwd: 'css/',
                src: '*.css',
                dest: 'css/prefixed-css/'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/prefixed-css/',
                    src: '**/*.css',
                    dest: 'web/css/'
                }]
            }
        },
        uglify: {
            options: {
                compress: true,
                mangle: true
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'js/',
                    src: '**/*.js',
                    dest: 'web/js/'
                }]
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'web/images'
                }]
            }
        }
    });

    grunt.registerTask('default', ['copy', 'minifyHtml', 'postcss', 'cssmin', 'uglify']);
    grunt.registerTask('prefixcss', 'postcss');
    grunt.registerTask('compress-images', 'imagemin');
    grunt.registerTask('run-all', ['clean', 'copy', 'minifyHtml', 'cssmin', 'uglify', 'imagemin']);
};
