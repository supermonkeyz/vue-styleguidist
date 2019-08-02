/**
 * Get all components in all sections
 *
 * @param {array} sections
 */

export default function getComponentsFromSections(
	sections: VueStyleguidist.Section[]
): VueStyleguidist.Component[] {
	return sections.reduce((allComponent: VueStyleguidist.Component[], section: Section) => {
		let sectionComponents: VueStyleguidist.Component[] = []
		let subSectionComponents: VueStyleguidist.Component[] = []
		if (section.components) {
			sectionComponents = section.components
		}
		if (section.sections) {
			subSectionComponents = getComponentsFromSections(section.sections)
		}
		return [...allComponent, ...sectionComponents, ...subSectionComponents]
	}, [])
}
