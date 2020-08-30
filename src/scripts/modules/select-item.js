import { setData, getData } from './dom-and-data'

const selectItem = () => {
  const listElement = document.getElementById('list')
  listElement.addEventListener('click', e => checkFocusedElement(e))
  document.addEventListener('keyup', e => {
    if (e.keyCode == 9) checkFocusedElement(e)
  })
}

const checkFocusedElement = e => {
  console.log(e.target)
  if (e.target.type === 'checkbox') {
    complete(e.target)
    return
  }
  if (e.target.classList.contains('delete-item')) {
    deleteItem(e.target)
    return
  }

  const focusedElement = document.activeElement
  const data = getData()
  const updated = data.map(el => {
    if (el.item === focusedElement.value) {
      el.selected = true
    } else {
      el.selected = false
    }
    return el
  })

  setData(updated)

  const elementToFocus = document.querySelector('[data-selected="true"]')
  if (elementToFocus) {
    elementToFocus.focus()
    elementToFocus.addEventListener('change', e => {
      const elID = e.target.parentElement.dataset.id
      const updated = getData().map(el => {
        if (el.id === elID) {
          el.item = e.target.value
        }
        return el
      })
      setData(updated)
    })
  }
}

const complete = el => {
  const data = getData()
  const domValue = el.nextElementSibling.value
  const updated = data.map(el => {
    if (domValue === el.item) {
      el.completed = !el.completed
    }
    return el
  })
  setData(updated)
}

const deleteItem = el => {
  const itemId = el.parentElement.dataset.id

  const updated = getData().filter(el => el.id !== itemId)
  setData(updated)
}

export default selectItem
