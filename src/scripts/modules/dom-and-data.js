/**
 * data = [
 *  item: String,
 * selected: Boolean,
 *  details: {
 *    quantity: Number,
 *    price: Number,
 *    description: String
 * }
 * ]
 */
let data = []

export const getData = () => data

export const setData = newData => {
  data = newData
  removeDisablsedFromDetails()
  render()
}

const render = () => {
  renderList()
  renderDescription()
}
const renderList = () => {
  const listElement = document.getElementById('list')
  let items = ''
  data.length &&
    data.forEach(el => {
      items += `<div class="item" data-id=${el.id}>
      <input type="checkbox" name="" id="" ${el.completed ? 'checked' : ''}/>
      <input 
        class="item-input" 
        type="text" 
        value="${el.item}" 
        data-selected="${el.selected}" 
        data-completed="${el.completed}"
      />
      <span class="delete-item">&#10006;</span>
    </div>`
    })
  listElement.innerHTML = items
}
const renderDescription = () => {
  const data = getData()
  const selected = data.find(el => el.selected)
  if (!selected) return

  const {
    item,
    details: { quantity, price, description },
  } = selected

  const detailsNameElement = document.getElementById('item-details-name')
  const quantityElement = document.getElementById('quantity')
  const priceElement = document.getElementById('price')
  const descriptionElement = document.getElementById('description')

  detailsNameElement.innerText = item.toUpperCase()
  quantityElement.value = quantity
  priceElement.value = price
  descriptionElement.value = description
  console.log(data)
}

const removeDisablsedFromDetails = () => {
  const quantityElement = document.getElementById('quantity')
  const priceElement = document.getElementById('price')
  const descriptionElement = document.getElementById('description')

  quantityElement.removeAttribute('disabled')
  priceElement.removeAttribute('disabled')
  descriptionElement.removeAttribute('disabled')
}
