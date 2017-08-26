
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
    watch: {
        sass: {
            files: ['sass/*.sass'],
            tasks: ['sass'],
            options: {
                spawn: false,
            },
        },
        js: {
            files: ['js/*.js'],
            tasks: ['eslint'],
            options: {
                spawn: false,
            },
        }
    },
    eslint: {
        target: ['js/*.js']
    },
    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    'css/*.css',
                    'js/*.js',
                    '*.html'
                ]
            },
            options: {
                watchTask: true,
                server: './'
            }
        }
    }
  });

  //Load the plugins tasks}
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default tasks
  grunt.registerTask('default', ['sass', 'eslint', 'browserSync', 'watch']);
};