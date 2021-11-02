const listContainer = document.querySelector('.expandable-list'); 
const dropdownLink = document.querySelector('.dropdown-trigger')
const dropdownList = document.querySelector('.dropdown-list')

listContainer.addEventListener('click', e => {
  if(!e.target.classList.contains('.dropdown-trigger')) return
  if(dropdownList.classList.contains('dropdown-hidden')) {
    dropdownList.classList.remove('dropdown-hidden')
    dropdownList.classList.add('dropdown-displayed')
    dropdownList.style.maxHeight = dropdownList.style.maxHeight + 'px'
  }
})
