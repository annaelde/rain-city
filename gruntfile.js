module.exports = function(grunt)
{
    grunt.initConfig(
    {
        pkg: grunt.file.readJSON('package.json'),

        postcss:
        {
            options:{
                map: false,
                processors: [
                    require('autoprefixer')({browsers: 'last 3 versions'}),
                ]
            },
            dist: {
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: '.',
                ext: '.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.registerTask('default', ['postcss']);
};
