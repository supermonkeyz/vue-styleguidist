declare module 'react-styleguidist/lib/loaders/utils/getNameFromFilePath' {
	const getNameFromFilePath: (input: string) => string
	export = getNameFromFilePath
}

declare module 'react-styleguidist/lib/loaders/utils/requireIt' {
	import * as b from '@babel/types'

	const requireIt: (input: string) => { require: string; toAST: () => b.Node }
	export = requireIt
}

declare module 'react-styleguidist/lib/loaders/utils/slugger' {
	const slugger: { slug: (input: string) => string }
	export = slugger
}
