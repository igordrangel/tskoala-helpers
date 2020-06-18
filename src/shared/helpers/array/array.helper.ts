export class ArrayHelper {
  /**
   * @description Converte um object em array
   * @param listObject
   */
  public static objectToArray<T>(listObject: T): any[] {
    const result: any[] = [];
    Object.keys(listObject).forEach((value, key) => {
      result[key] = value;
    });

    return result;
  }

  public static getIndexFromArray(listObject: object[], key: string, value: string | number): number {
    let indexSearched: number = -1;

    listObject.forEach((item: any, index: number) => {
      if (item[key] === value) {
        indexSearched = index;
        return false;
      }
    });

    return indexSearched;
  }

  /**
   * @description Divide o Array em grupos
   * @param array
   * @param maxRowsSplit
   */
  public static splitArray(array: any[], maxRowsSplit: number): any[] {
    const result: any[] = [];
    let group = 0;

    array.forEach((value, index) => {
      if (result[group] === undefined) {
        result[group] = [];
      }
      result[group].push(value);

      if ((index + 1) % maxRowsSplit === 0) {
        group = group + 1;
      }
    });

    return result;
  }

  /**
   * @description Converte array em string
   * @param array
   * @param delimiter
   */
  public static toString(array: any[], delimiter: string = ','): string {
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
    from.forEach((value) => {
      to.push(value);
    });

    return to;
  }

  public static filter<T>(arr: any[], value: string, index?: string): T[] {
    return arr.filter((item) => {
      const filter = index ? item[index] : item;
      if (filter) {
        let find = false;
        `${value}`
          .toLowerCase()
          .split(' ')
          .forEach((part) => {
            if (`${filter}`.toLowerCase().indexOf(part) >= 0) {
              find = true;
              return false;
            }
          });

        return find;
      }
    });
  }

  public static orderBy<T>(arr: any[], by: string): T[] {
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
