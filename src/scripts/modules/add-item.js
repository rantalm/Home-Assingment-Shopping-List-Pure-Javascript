/* eslint-disable prettier/prettier */
import { data } from '../index'

const addItem = () => {
  const form = document.querySelector('#add-item-form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    const input = document.querySelector('#new-item')
    const value = input.value
    if (!input) return

    data.push({ text: input, completed: false })

    form.insertAdjacentHTML(
      'beforebegin',
      `
      <div class="item">
      <input type="checkbox" name="" id="" />
      <input class="item-input" type="text" name="" id="" placeholder="" value="${value}"/>
    </div>`
    )
    input.value = ''
  })
}
export default addItem
