import { ComponentDoc, PropDescriptor } from 'vue-docgen-api'
import { cleanName } from './utils'

function getDefaultText(): string {
	return 'lorem ipsum'
}

function getDefaultNumber(): number {
	return 42
}

function getDefaultBoolean(): boolean {
	return true
}

function getDefault(prop: PropDescriptor): any {
	if (!prop.type) {
		return getDefaultText()
	} else if (prop.type.name === 'string') {
		return getDefaultText()
	} else if (prop.type.name === 'number') {
		return getDefaultNumber()
	} else if (prop.type.name === 'boolean') {
		return getDefaultBoolean()
	}
}

export default (doc: ComponentDoc): string => {
	const { displayName, props, slots } = doc
	const cleanedName = cleanName(displayName)
	const propsAttr: string[] = props
		? Object.keys(props)
				.filter(p => props[p].required)
				.map(p => ` ${p}="${getDefault(props[p])}"`)
		: []
	return `
\`\`\`vue live
  <${cleanedName}${propsAttr.join(' ')}${
		!slots.default ? '/>' : `>${getDefaultText()}</${cleanedName}>`
	}
\`\`\`
  `
}
