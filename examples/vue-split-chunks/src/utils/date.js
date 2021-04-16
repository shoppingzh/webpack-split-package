import moment from 'moment'

export function now() {
  return moment().format('YYYY-MM-DD HH:mm:ss')
}
