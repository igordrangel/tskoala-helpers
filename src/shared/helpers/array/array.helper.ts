export class ArrayHelper {
	
	public static objectToArray(listObject: any) {
		const result = [];
		$.each(listObject, (value, key) => {
			result[key.toString()] = value;
		});
		
		return result;
	}
	
	public static getIndexFromArray(listObject: object[], key: string, value: string | number): number {
		let indexSearched: number = -1;
		
		listObject.forEach((item: object, index: number) => {
			if (item[key] === value) {
				indexSearched = index;
				return false;
			}
		});
		
		return indexSearched;
	}
	
	public static splitArray(array: any[], maxRowsSplit: number): any[] {
		const result = [[]];
		let group = 0;
		
		for (let index = 0; index < array.length; index++) {
			if (result[group] === undefined) {
				result[group] = [];
			}
			
			result[group].push(array[index]);
			
			if ((index + 1) % maxRowsSplit === 0) {
				group = group + 1;
			}
		}
		
		return result;
	}
	
	public static convertToString(array: any[], delimiter: string = ','): string {
		let stringResult = '';
		
		array.forEach((value) => {
			if (!stringResult) {
				stringResult = value;
			} else {
				stringResult += delimiter + value;
			}
		});
		
		return stringResult;
	}
	
	public static merge(from: any[], to: any[]) {
		from.forEach(value => {
			to.push(value);
		});
	}
	
	public static filter<T>(arr: T[], value: string, index?: string): T[] {
		return arr.filter(item => {
			const filter = index ? item[index] : item;
			if (filter) {
				let find = true;
				value
					.toLowerCase()
					.split(' ')
					.forEach(part => {
						if (filter.toLowerCase().indexOf(part) < 0) {
							find = false;
							return false;
						}
					});
				
				return find;
			}
		});
	}
	
	public static orderBy<T>(arr: T[], by: string): T[] {
		return arr.sort((a, b) => {
			if (typeof a !== 'string' && typeof b !== 'string') {
				if (a[by] > b[by]) {
					return 1;
				} else if (a[by] < b[by]) {
					return -1;
				} else {
					return 0;
				}
			} else {
				return 0;
			}
		});
	}
}
