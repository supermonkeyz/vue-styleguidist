import { Section } from './processSections'

/**
 * Get all components in all sections
 *
 * @param {array} sections
 */

export interface ComponentProps {
	displayName: string
	visibleName?: string
	examples?: any[]
	example?: any
}

export interface Component {
	name: string
	props: ComponentProps
	module: { default?: any }
}

export default function getComponentsFromSections(sections: Section[]): Component[] {
	return sections.reduce((allComponent: Component[], section: Section) => {
		let sectionComponents: Component[] = []
		let subSectionComponents: Component[] = []
		if (section.components) {
			sectionComponents = section.components
		}
		if (section.sections) {
			subSectionComponents = getComponentsFromSections(section.sections)
		}
		return [...allComponent, ...sectionComponents, ...subSectionComponents]
	}, [])
}
