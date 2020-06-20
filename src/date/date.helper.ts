import * as moment_ from 'moment';

const moment = moment_;

export class DateHelper {
  public static transform(value: string, getDate: boolean = true, getHours: boolean = true) {
    const date = new Date(value);
    if (!getDate && getHours) {
      return moment(date).format('HH:mm:ss');
    } else if (getDate && !getHours) {
      return moment(date).format('DD/MM/YYYY');
    } else {
      return moment(date).format('DD/MM/YYYY HH:mm:ss');
    }
  }

  public static add(qtd: number, type: 'days' | 'months' | 'years' = 'days') {
    return moment(new Date()).add(qtd, type);
  }

  public static sub(qtd: number, type: 'days' | 'months' | 'years' = 'days') {
    return moment(new Date()).subtract(qtd, type);
  }
}
