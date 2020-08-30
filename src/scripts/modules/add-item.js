/* eslint-disable prettier/prettier */
import { v4 as uuid } from 'uuid'
import { getData, setData } from './dom-and-data'

const addItem = () => {
  const form = document.querySelector('#add-item-form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    const input = document.querySelector('#new-item')
    const item = input.value
    if (!item) return

    const data = getData()
    const updated = data.map(el => {
      el.selected = false
      return el
    })
    updated.push({
      item,
      selected: true,
      completed: false,
      id: uuid(),
      details: { completed: false, description: '', quantity: 0, price: 0 },
    })
    setData(updated)
    input.value = ''
  })
}
export default addItem
