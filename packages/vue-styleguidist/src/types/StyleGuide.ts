import { ProcessedSection } from './Section'
import { EXPAND_MODE } from './enums'

export interface StyleGuidistConfigObject {
	title?: string
	pagePerSection?: boolean
	locallyRegisterComponents?: boolean
	ignore?: string | string[]
	configDir: string
	usageMode: EXPAND_MODE
	exampleMode: EXPAND_MODE
}

export interface StyleGuideObject {
	sections: ProcessedSection[]
	config: StyleGuidistConfigObject
	renderRootJsx: any
	welcomeScreen: any
	patterns: any
}
