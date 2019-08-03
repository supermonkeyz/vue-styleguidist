import { parseComponent } from 'vue-template-compiler'
import { resolve, extname, relative } from 'path'
import { existsSync, readFileSync } from 'fs'
import getNameFromFilePath from 'react-styleguidist/lib/loaders/utils/getNameFromFilePath'
import requireIt from 'react-styleguidist/lib/loaders/utils/requireIt'
import slugger from 'react-styleguidist/lib/loaders/utils/slugger'
import { Component } from 'types/Component'

const vueDocLoader = resolve(__dirname, '../vuedoc-loader.js')

/**
 * References the filepath of the metadata file.
 *
 * @param {string} filepath
 * @returns {object}
 */
function getComponentMetadataPath(filepath: string): string {
	const ext = extname(filepath)
	return filepath.substring(0, filepath.length - ext.length) + '.json'
}

/**
 * Return an object with all required for style guide information for a given component.
 *
 * @param {string} filepath
 * @param {object} config
 * @returns {object}
 */
export default function processComponent(filepath: string, config: any): Component {
	const componentPath = relative(config.configDir, filepath)
	const componentName = getNameFromFilePath(filepath)
	const props = requireIt(`!!${vueDocLoader}!${filepath}`)
	const examplesFile = config.getExampleFilename(filepath)
	const componentMetadataPath = getComponentMetadataPath(filepath)
	const hasExamplesFile = examplesFile && existsSync(examplesFile)
	let hasInternalExamples = false
	if (!hasExamplesFile && existsSync(componentPath)) {
		const customBlocks = parseComponent(readFileSync(componentPath, 'utf8')).customBlocks
		hasInternalExamples = !!customBlocks && customBlocks.findIndex(p => p.type === 'docs') >= 0
	}
	const hasExamples = hasExamplesFile || hasInternalExamples

	return {
		filepath: componentPath,
		slug: slugger.slug(componentName),
		pathLine: config.getComponentPathLine(componentPath),
		module: requireIt(filepath),
		props,
		hasExamples,
		metadata: existsSync(componentMetadataPath) ? requireIt(componentMetadataPath) : {}
	}
}
