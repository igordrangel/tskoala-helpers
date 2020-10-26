import * as moment_ from 'moment';
import { Moment } from 'moment';

const moment = moment_;

export class KoalaDateHelper {
  public static transform(date: string | Date, getDate: boolean = true, getHours: boolean = true) {
    if (typeof date === 'string') {
      if (date.indexOf(':') < 0) {
        date += ' 00:00:00';
      }
      date = new Date(date);
    }
    if (!getDate && getHours) {
      return moment(date).format('HH:mm:ss');
    } else if (getDate && !getHours) {
      return moment(date).format('DD/MM/YYYY');
    } else {
      return moment(date).format('DD/MM/YYYY HH:mm:ss');
    }
  }
  
  public static add(qtd: number, type: 'days' | 'months' | 'years' = 'days', date?: string) {
    return moment(date).add(qtd, type).toDate();
  }
  
  public static sub(qtd: number, type: 'days' | 'months' | 'years' = 'days', date?: string | Date, format?: string) {
    const momentDate: Moment = moment(date).subtract(qtd, type);
    if (format) {
      return momentDate.format(format);
    } else {
      return momentDate.toDate();
    }
  }
}
