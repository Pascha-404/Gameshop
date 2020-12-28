
// Filter and cart opener/closer
const filterBox = document.querySelector('.filterBox')
const closeFilter = document.querySelector('#closeFilter')
const filterBtn = document.querySelector('#filterBtn')

const itemsBox = document.querySelector('.items-container')
const closeCart = document.querySelector('#closeCart')

closeCart.addEventListener('click', () => {
    itemsBox.classList.toggle('hidden');
})
cart.addEventListener('click', () => {
    itemsBox.classList.toggle('hidden');
})

filterBtn.addEventListener('click', () => {
    filterBox.classList.toggle('hidden');
})

closeFilter.addEventListener('click', () => {
    filterBox.classList.toggle('hidden');
})

// Get items from source

