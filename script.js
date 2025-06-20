let allProducts = [];

async function fetchData() {
    try {
        const response = await fetch('products.json');
        const data = await response.json();
        allProducts = data;
        renderProducts(data);
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

function renderProducts(data) {
    const aa = document.querySelector('.phone-main-p');
    aa.innerHTML = '';

    const productList = document.createElement('div');
    productList.className = 'product-list';

    data.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
            <div class="mobile">
                <div class="mobile-img">
                    <img src=${product.img} alt>
                    <div class="like-btn">
                        <div class="like-red"><svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="#E32727" stroke="#E32727" d="M176 32a60 60 0 0 0-48 24A60 60 0 0 0 20 92c0 71.9 99.9 128.6 104.1 131a7.8 7.8 0 0 0 3.9 1 7.6 7.6 0 0 0 3.9-1 314.3 314.3 0 0 0 51.5-37.6C218.3 154 236 122.6 236 92a60 60 0 0 0-60-60Z"></path></svg></div>
                    </div>
                </div>
                <div class="mobile-text">
                    <div class="vivo-text"><span>${product.name}</span></div>
                    <div class="star-out">
                        <img src=${product.star1} alt="" class="star_1">
                        <img src=${product.star2} alt="" class="star_2">
                        <img src=${product.star3} alt="" class="star_3">
                        <img src=${product.star4} alt="" class="star_4">
                        <img src=${product.star5} alt="" class="star_5">
                        <div class="number"><span>(${product.rating})</span></div>
                        <div class="assured"><img src=${product.assured} alt=""></div>
                    </div>
                    <div class="third-text">
                        <div class="down-arrow">
                            <div class="arrow">
                                <svg width="17" height="17" viewBox="0 0 12 12" fill="none">
                                    <path d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z" fill="#008C00"></path>
                                </svg>
                                <span>${product.percentage}%</span>
                            </div>
                        </div>
                        <div class="thirty-five"><span>₹${product.mrp}</span></div>
                        <div class="twenty-six"><span>₹${product.price}</span></div>
                    </div>
                    <div class="only-left"><span>${product.left}</span></div>
                    <div class="exchange"><span>${product.upto}</span></div>
                    <div class="free-delivery"><span>${product.delivery}</span></div>
                    <div class="warranty"><span>${product.warranty}</span></div>
                </div>
            </div>   
            <div class="small-boxes">
                <div class="ram-storage">${product.ram}</div>
                <div class="display">${product.display}</div>
                <div class="mah">${product.battery}</div>
                <div class="mp">${product.mp}</div>
                <div class="front-camera">${product.camera}</div>
            </div>
        `;

        productList.appendChild(productDiv);
    });

    aa.appendChild(productList);
}

fetchData();
document.addEventListener('click', function (e) {
    if (e.target.closest('.like-btn')) {
        const svg = e.target.closest('.like-btn').querySelector('svg path[fill]');
        const currentColor = svg.getAttribute('fill');
        svg.setAttribute('fill', currentColor === '#E32727' ? '#ccc' : '#E32727');
        svg.setAttribute('stroke', currentColor === '#E32727' ? '#ccc' : '#E32727');
    }
})
document.addEventListener("DOMContentLoaded", () => {
    const sortContainer = document.querySelector('.sortby');
    const sortBtn = document.querySelector('.sort');
    const overlay = document.querySelector('.overlay');
    

    sortBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        sortContainer.style.display = 'block';
        overlay.style.display = 'block';
    });

    document.addEventListener('click', (e) => {
        if (!sortContainer.contains(e.target) && !sortBtn.contains(e.target)) {
            sortContainer.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
    overlay.addEventListener('click', () => {
        sortContainer.style.display = 'none';
        overlay.style.display = 'none';
    });
    document.querySelectorAll('.popularity-marg').forEach(option => {
        option.addEventListener('click', () => {
            const label = option.querySelector('.popularity').innerText;
            let sorted = [...allProducts];

            if (label === 'Popularity') {
                sorted.sort((a, b) => b.rating - a.rating);
            } else if (label === 'Price -- Low to High') {
                sorted.sort((a, b) => a.price - b.price);
            } else if (label === 'Price -- High to Low') {
                sorted.sort((a, b) => b.price - a.price);
            } else if (label === 'Newest First') {
                sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            }

            renderProducts(sorted);
            sortContainer.style.display = 'none';
            overlay.style.display = 'none';

            document.querySelectorAll('.blue-r').forEach(r => r.checked = false);
            option.querySelector('.blue-r').checked = true;
        });
    });

});






