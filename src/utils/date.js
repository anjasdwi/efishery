import {format as formatDate} from 'date-fns'
import id from 'date-fns/locale/id'

export const dateFormat = (date, format = 'dd MMMM yyyy') => {
  if (date && typeof date === 'string') {
    return formatDate(new Date(date.replace(' ', 'T')), format, {locale: id})
  }
  return date && formatDate(new Date(date), format, {locale: id})
}
