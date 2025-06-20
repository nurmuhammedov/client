import {ISelectOption} from 'interfaces/form.interface'
import {ISearchParams} from 'interfaces/params.interface'


const noop = (): void => {}
const noopAsync = async (): Promise<undefined> => {}

const cleanParams = (params: ISearchParams) => {
	const filteredParams: ISearchParams = {}
	Object.keys(params).forEach(key => {
		const value = params[key]
		if (value !== null && value !== undefined && value !== '') {
			filteredParams[key] = value
		}
	})
	return filteredParams
}

function isObject(val: unknown): val is ISearchParams {
	return typeof val === 'object' && val !== null
}

function getSelectValue(options: ISelectOption[], value: string | number | boolean | (string | number | boolean)[] | undefined | null): ISelectOption[] | null | ISelectOption {
	if (Array.isArray(value)) {
		return options.filter((item) => value.includes(item.value))
	}
	return options.find((item) => item?.value == value) ?? null
}

function decimalToInteger(value?: string | number | null | undefined): string {
	if (!value) return ''
	const intValue = Math.floor(Number(value || 0))
	return intValue.toLocaleString('en-US').split(',').join(' ')
}


export {
	noop,
	isObject,
	noopAsync,
	cleanParams,
	getSelectValue,
	decimalToInteger
}