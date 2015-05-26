module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['Gruntfile.js', 'app/**/*.js'],
			options: {
				debug: true
			}
		},

		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},

		watch: {
			files: ['Gruntfile.js', 'app/**/*.js'],
			tasks: ['jshint', 'karma']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask('default', ['jshint', 'karma', 'watch']);
};