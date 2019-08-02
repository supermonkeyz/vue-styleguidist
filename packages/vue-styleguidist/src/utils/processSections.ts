import processComponents from './processComponents'
import { Component } from './getComponentsFromSections'

export interface Section {
	name: string
	visibleName: string
	components: Component[]
	sections: Section[]
}

/**
 * Recursively process each component in all sections.
 *
 * @param {Array} sections
 * @return {Array}
 */
export default function processSections(sections: Section[]): Section[] {
	return sections.map(section => ({
		...section,
		visibleName: section.name,
		components: processComponents(section.components || []),
		sections: processSections(section.sections || [])
	}))
}
