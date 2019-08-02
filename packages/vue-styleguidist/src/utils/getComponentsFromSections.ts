/**
 * Get all components in all sections
 *
 * @param {array} sections
 */

interface Component {
	name: string
}

interface Section {
	components: Component[]
	sections: Section[]
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
