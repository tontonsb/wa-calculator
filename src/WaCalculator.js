import editions from '../resources/wa'

export class WaCalculator {
	options = {
		discipline: null,
		gender: 'm',
		electronicMeasurement: true,
		venueType: 'outdoor',
		edition: '2017',
	}

	constructor(options = {}) {
		this.setOptions(options)
	}

	setOptions(options) {
		if ('edition' in options)
			this.options.edition = options.edition

		if ('discipline' in options)
			this.options.discipline = options.discipline

		if ('gender' in options)
			this.options.gender = options.gender

		if ('electronicMeasurement' in options)
			this.options.electronicMeasurement = options.electronicMeasurement

		if ('venueType' in options)
			this.options.venueType = options.venueType
	}

	getOptions() {
		return { ...this.options }
	}

	getEditions() {
		return Object.keys(editions)
	}
}
