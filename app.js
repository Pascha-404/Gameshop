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

let movieList = document.querySelector('#movieList')

async function movies() {
    const movies = await axios.get(`http://api.tvmaze.com/shows?`);
    console.log(movies.data)
    makeCards(movies.data);
}

let i = 0;

const makeCards = (movies) => {
    for (let results of movies) {
        i++
        if (i < 20) {
            const card = document.createElement('li');
            card.classList.add('card');

            const savings = document.createElement('p');
            const savingsValue = results.runtime
            savings.id = 'savings';
            savings.textContent = `${savingsValue} min`
            card.append(savings)

            const cardImg = document.createElement('img');
            cardImg.classList.add('card-img-top');
            cardImg.src = results.image.medium;
            cardImg.alt = `${results.name} - Cover`
            card.append(cardImg)

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const titleContainer = document.createElement('div');
            titleContainer.classList.add('titleContainer');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = results.name;
            titleContainer.append(cardTitle);

            const rating = results.rating.average;
            const ratingText = document.createElement('p');
            ratingText.classList.add('rating');
            ratingText.textContent = `Rating: ${rating}`;

            titleContainer.append(rating);

            cardBody.append(titleContainer)

            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            const playDay = results.schedule.days;
            const playTime = results.schedule.time;
            cardText.textContent = `Runs on ${playDay} at ${playTime}`;
            cardBody.append(cardText)

            const btnGroup = document.createElement('div');
            btnGroup.classList.add('btn-group');

            const goToPage = document.createElement('a');
            goToPage.classList.add('btn');
            goToPage.href = results.url;
            goToPage.textContent = 'Go to Movie';
            btnGroup.append(goToPage);
            const officPage = document.createElement('a');
            officPage.classList.add('btn');
            officPage.textContent = 'Official Page';
            officPage.href = results.officialSite;
            btnGroup.append(officPage)

            cardBody.append(btnGroup)

            card.append(cardBody)

            movieList.append(card)
            console.log('DONE')
        }
    }
}

