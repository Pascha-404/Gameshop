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

// Get data from source

let shopsList = "";

async function shops() {
   const shops = await axios.get('https://www.cheapshark.com/api/1.0/stores')
   shopsList = shops.data;
}


async function deals() {
    const deals = await axios.get('https://www.cheapshark.com/api/1.0/deals');

}

const makeCards = (games) => {
    for (let results of games) {
        if (results.thumb) {
            const card = document.createElement('li');
            card.classList.add('card');

            const savings = document.createElement('p');
            const savingsValue = Math.floor(parseInt(results.savings))
            savings.id = 'savings';
            savings.textContent = `-${savingsValue}%`
            card.append(savings)

            const cardImg = document.createElement('img');
            cardImg.classList.add('card-img-top');
            cardImg.src = results.thumb;
            cardImg.alt = `${results.title} - Cover`
            card.append(cardImg)

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = results.title;
        }
    }
}