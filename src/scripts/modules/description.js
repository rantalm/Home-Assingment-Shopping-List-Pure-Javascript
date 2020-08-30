import { getData, setData } from './dom-and-data'
const description = () => {
  const quantityElement = document.getElementById('quantity')
  const priceElement = document.getElementById('price')
  const descriptionElement = document.getElementById('description')

  const data = getData()
  if (!data.length) {
    quantityElement.setAttribute('disabled', true)
    priceElement.setAttribute('disabled', true)
    descriptionElement.setAttribute('disabled', true)
  }

  quantityElement.addEventListener('change', e => elCallback(e, 'quantity'))

  priceElement.addEventListener('change', e => elCallback(e, 'price'))

  descriptionElement.addEventListener('change', e => elCallback(e, 'description'))
}

const elCallback = (e, field) => {
  const data = getData()
  const selected = data.find(el => el.selected)
  if (!selected) return
  const updated = data.map(el => {
    if (el.id === selected.id) {
      el.details[field] = e.target.value
    }
    //console.log(el)
    return el
  })
  setData(updated)
  console.log('after', getData())
}

export default description
