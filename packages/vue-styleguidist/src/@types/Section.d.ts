declare namespace VueStyleguidist {
	export interface Section {
		name: string
		visibleName: string
		components: VueStyleguidist.Component[]
		sections: Section[]
	}
}
