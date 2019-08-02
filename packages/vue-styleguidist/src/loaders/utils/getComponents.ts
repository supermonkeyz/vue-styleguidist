import { StyleguidistConfigObject } from 'utils/renderStyleguide'
import processComponent from './processComponent'

/**
 * Process each component in a list.
 *
 * @param {Array} components File names of components.
 * @param {object} config
 * @returns {object|null}
 */
export default function getComponents(
	components: string[],
	config: StyleguidistConfigObject
): VueStyleguidist.Component[] {
	return components.map(filepath => processComponent(filepath, config))
}
