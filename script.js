async function fetchData() {
    try {
        const response = await fetch('products.json');
        const data = await response.json();
        const productList = document.createElement('div');
        productList.className = 'product-list';
        const aa = document.querySelector('.phone-main-p');

        data.map(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            productDiv.innerHTML = `
                <div class="mobile">
                    <div class="mobile-img">
                        <img src=${product.img} alt>
                    </div>
                    <div class="mobile-text">
                        <div class="vivo-text">
                            <span>${product.name}</span>
                        </div>
                        <div class="star-out">
                                 <img src=${product.star1} alt="" class="star_1">
                                 <img src=${product.star2} alt="" class="star_2">
                                 <img src=${product.star3} alt="" class="star_3">
                                 <img src=${product.star4} alt="" class="star_4">
                                 <img src=${product.star5} alt="" class="star_5">

                            <div class="number">
                                <span>(${product.rating})</span>
                            </div>
                            <div class="assured"><img src=${product.assured} alt=""> </div>
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
                            <div class="thirty-five">
                                <span>₹${product.mrp}</span>
                            </div>
                            <div class="twenty-six">
                                <span>₹${product.price}</span>
                            </div>                  
                        </div>
                        <div class="only-left">
                            <span>${product.left}</span>
                        </div>
                        <div class="exchange">
                            <span>${product.upto}</span>
                        </div>
                        <div class="free-delivery">
                            <span>${product.delivery}</span>
                        </div>
                        <div class="warranty">
                            <span>${product.warranty}</span>
                        </div>
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

        aa.appendChild(productList); // Append the product list to the body or a specific container

    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

fetchData();
document.addEventListener("DOMContentLoaded", () => {
    const sortContainer = document.querySelector('.sortby');
    const sortBtn = document.querySelector('.sort');
    const overlay = document.querySelector('.overlay');

    sortBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sortContainer.style.display = 'block';
        overlay.style.display = 'block';
        console.log('click');
    });

    document.addEventListener('click', (e) => {
        if (!sortContainer.contains(e.target) && !sortBtn.contains(e.target)) {
            if (sortContainer.style.display === 'block') {
                sortContainer.style.display = 'none';
                overlay.style.display = 'none';
                console.log('Sort menu closed');
            }
        }
    });
    overlay.addEventListener('onclick', () => {
        sortContainer.style.display = none;
        overlay.style.display = 'none';
    });
    const filterPanel = document.querySelector('.filter-all');
    const filterBtn = document.querySelector('.arr');

    filterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        filterPanel.style.display = 'block';
        console.log('Filter panel opened');      
    });

    document.addEventListener('click', (e) => {
        if (!filterPanel.contains(e.target) && !filterBtn.contains(e.target)) {
            if (filterPanel.style.display === 'block') {
                filterPanel.style.display = 'none';
                console.log('Filter panel closed');
            }
        }   
    });
    
});



