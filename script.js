 // Pagination settings
        const PRODUCTS_PER_PAGE = 12;
        let currentPage = 1;
        const allProducts = Object.values(productsData);
        const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);

        // Function to render products for current page
        function renderProducts() {
            const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
            const endIndex = startIndex + PRODUCTS_PER_PAGE;
            const productsToShow = allProducts.slice(startIndex, endIndex);

            const grid = document.getElementById('productsGrid');
            grid.innerHTML = '';

            productsToShow.forEach(product => {
                const priceHTML = product.priceRange 
                    ? `<div class="shop-product-price">${product.priceRange}</div>`
                    : product.priceOriginal 
                        ? `<div class="shop-product-price"><del>${product.priceOriginal}</del> ${product.priceCurrent}</div>`
                        : `<div class="shop-product-price">${product.priceCurrent}</div>`;

                const badgeHTML = product.badge 
                    ? `<span class="shop-sale-badge">${product.badge}</span>` 
                    : '';

                const buttonText = product.hasOptions ? 'Select Options' : 'Add to Cart';

                const card = document.createElement('div');
                card.className = 'shop-product-card';
                card.innerHTML = `
                    <div class="shop-product-image-wrapper">
                        ${badgeHTML}
                        <img src="${product.image}" alt="${product.name}" class="shop-product-image">
                        <div class="shop-product-price-overlay">
                            ${priceHTML}
                        </div>
                    </div>
                    <div class="shop-product-info">
                        <div class="shop-product-category">${product.category}</div>
                        <div class="shop-product-name">${product.name}</div>
                        <div class="shop-product-points">${product.points}</div>
                        <button class="shop-add-to-cart">${buttonText}</button>
                    </div>
                `;

                // Add click handler to navigate to product details
                card.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('shop-add-to-cart')) {
                        window.location.href = `product-details.html?id=${product.id}`;
                    }
                });

                // Add to cart button handler
                card.querySelector('.shop-add-to-cart').addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (product.hasOptions) {
                        window.location.href = `product-details.html?id=${product.id}`;
                    } else {
                        alert(`Added ${product.name} to cart!`);
                        // Add your cart logic here
                    }
                });

                grid.appendChild(card);
            });
        }

        // Function to render pagination
        function renderPagination() {
            const pagination = document.getElementById('pagination');
            pagination.innerHTML = '';

            // Previous button
            const prevLink = document.createElement('a');
            prevLink.href = '#';
            prevLink.className = `page-link ${currentPage === 1 ? 'disabled' : ''}`;
            prevLink.textContent = 'Previous';
            prevLink.addEventListener('click', (e) => {
                e.preventDefault();
                if (currentPage > 1) {
                    currentPage--;
                    renderProducts();
                    renderPagination();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
            pagination.appendChild(prevLink);

            // Page numbers
            for (let i = 1; i <= totalPages; i++) {
                const pageLink = document.createElement('a');
                pageLink.href = '#';
                pageLink.className = `page-link ${i === currentPage ? 'active' : ''}`;
                pageLink.textContent = i;
                pageLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentPage = i;
                    renderProducts();
                    renderPagination();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
                pagination.appendChild(pageLink);
            }

            // Next button
            const nextLink = document.createElement('a');
            nextLink.href = '#';
            nextLink.className = `page-link ${currentPage === totalPages ? 'disabled' : ''}`;
            nextLink.textContent = 'Next';
            nextLink.addEventListener('click', (e) => {
                e.preventDefault();
                if (currentPage < totalPages) {
                    currentPage++;
                    renderProducts();
                    renderPagination();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
            pagination.appendChild(nextLink);
        }

        // Initial render
        renderProducts();
        renderPagination();