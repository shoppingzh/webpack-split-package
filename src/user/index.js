import _ from 'lodash'
import { now } from '../utils/date'

const user = _.merge({}, {
  name: 'shoppingzh'
})

const el = document.createElement('div')
el.innerHTML = user.name

window.onload = () => {
  document.body.append(el)
}


