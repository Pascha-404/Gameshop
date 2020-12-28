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
    const deals = await axios.get(`https://www.cheapshark.com/api/1.0/deals`);
    shops();
    makeCards(deals.data);
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

            const titleContainer = document.createElement('div');
            titleContainer.classList.add('titleContainer');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = results.title;
            titleContainer.append(cardTitle);

            const shopId = results.storeID
            const shopImg = document.createElement('img');
            shopImg.src = `https://www.cheapshark.com${shopsList[shopId]}`;
            titleContainer.append(shopImg);

            cardBody.append(titleContainer)

            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            const salePrice = results.salePrice;
            const normalPrice = results.normalPrice;
            cardText.textContent = `Pay ${salePrice} instead of ${normalPrice}`;
            cardBody.append(cardText)

            const btnGroup = document.createElement('div');
            btnGroup.classList.add('btn-group');

            const goToPage = document.createElement('a');
            goToPage.classList.add('btn');
            const dealID = results.dealID;
            goToPage.href = `https://www.cheapshark.com/redirect?dealID={${dealID}}`;
            goToPage.textContent = 'Go to Deal-Page';
            btnGroup.append(goToPage)

            const addToCart = document.createElement('button');
            addToCart.classList.add('btn', 'addToCart');
            const svgCart = document.createElement('svg');
            svgCart.viewBox = '0 0 512 512';
            const svgPath = document.createElement('path');
            svgPath.d = 'M144,336H448a8,8,0,0,0,7.832-6.368l40-192A8,8,0,0,0,488,128H105.159L87.787,54.167A8,8,0,0,0,80,48H24a8,8,0,0,0,0,16H73.664l60.593,257.522A32.053,32.053,0,0,0,112,352v16a32.036,32.036,0,0,0,32,32h.022a40,40,0,1,0,63.956,0H368.022a40,40,0,1,0,63.956,0H464a8,8,0,0,0,0-16H144a16.019,16.019,0,0,1-16-16V352A16.019,16.019,0,0,1,144,336Zm6.336-16-7.529-32h44.131l4,32h-40.6ZM323.66,240l-1.334,32H269.674l-1.334-32Zm-55.986-16-1.334-32h59.32l-1.334,32ZM253.66,272h-52.6l-4-32h55.264Zm.666,16,1.334,32h-48.6l-4-32Zm16.014,0h51.32l-1.334,32H271.674Zm67.334,0h51.264l-4,32h-48.6Zm.666-16,1.334-32h55.264l-4,32Zm72.722-32h47.1L451.5,272H407.062Zm2-16,4-32h51.1L461.5,224Zm-16.124,0h-56.6l1.334-32h59.264Zm-54.6-48,1.334-32h63.264l-4,32Zm-16.014,0H265.674l-1.334-32h63.32Zm-76.666,0h-60.6l-4-32h63.264Zm.666,16,1.334,32h-56.6l-4-32Zm-71.388,32h-51.19l-7.529-32h54.719Zm2,16,4,32h-45.9l-7.529-32ZM441.5,320H401.062l4-32h43.1Zm30-144H419.062l4-32h55.1ZM168.938,144l4,32H116.454l-7.529-32ZM200,424a24,24,0,1,1-24-24A24.028,24.028,0,0,1,200,424Zm224,0a24,24,0,1,1-24-24A24.028,24.028,0,0,1,424,424Z'
            svgCart.append(svgPath);
            const svgCircle1 = document.createElement('circle');
            svgCircle1.cx = '176';
            svgCircle1.cy = '424';
            svgCircle1.r = '8';
            svgCart.append(svgCircle1);
            const svgCircle2 = document.createElement('circle');
            svgCircle2.cx = '400';
            svgCircle2.cy = '424';
            svgCircle2.r = '8';
            svgCart.append(svgCircle2)
            addToCart.append(svgCart)
            btnGroup.append(addToCart)
            
            cardBody.append(btnGroup)

        }
    }
}