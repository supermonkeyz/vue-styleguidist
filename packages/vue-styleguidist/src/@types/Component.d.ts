declare namespace VueStyleguidist {
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
}
