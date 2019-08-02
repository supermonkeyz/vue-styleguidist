declare module 'react-styleguidist/lib/loaders/utils/getNameFromFilePath' {
	const getNameFromFilePath: (input: string) => string
	export = getNameFromFilePath
}

declare module 'react-styleguidist/lib/loaders/utils/requireIt' {
	import * as b from '@babel/types'

	const requireIt: (input: string) => { require: string; toAST: () => b.Node } | any
	export = requireIt
}

declare module 'react-styleguidist/lib/loaders/utils/slugger' {
	const slugger: { slug: (input: string) => string }
	export = slugger
}

// client

type DISPLAY_MODE = 'all' | 'section' | 'component' | 'example' | 'notFound'

declare module 'react-styleguidist/lib/client/utils/getRouteData' {
	const getRouteData: (
		allSections: VueStyleguidist.Section[],
		hash: string,
		pagePerSection?: boolean
	) => {
		sections: VueStyleguidist.Section[]
		displayMode: DISPLAY_MODE
	}
	export default getRouteData
}

declare module 'react-styleguidist/lib/client/utils/getPageTitle' {
	const getPageTitle: (
		sections: VueStyleguidist.Section[],
		title?: string,
		displayMode?: DISPLAY_MODE
	) => string
	export default getPageTitle
}

// components

declare module 'rsg-components/StyleGuide' {
	import { FunctionComponent } from 'react'

	const StyleGuide: FunctionComponent<{
		codeRevision: number
		config: any
		slots: any[]
		welcomeScreen: any
		patterns: any[]
		sections: any
		allSections: any
		displayMode: any
		pagePerSection: any
	}>
	export default StyleGuide
}

declare module 'rsg-components/slots' {
	import { StyleguidistConfigObject } from 'utils/renderStyleguide'

	const slots: (config?: StyleguidistConfigObject) => any
	export default slots
}
