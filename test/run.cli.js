const args = require('minimist')(process.argv.slice(2))

process.argv[2] = args.watch ? '--watch' : undefined

require('../packages/vue-docgen-cli/lib/bin.js')

if (args._.includes('build')) {
	process.argv[2] = 'build'
} else {
	process.argv[2] = 'dev'
}

process.argv[3] = 'docs'
require('vuepress/cli')
