// Search functionality for Westbridge Research
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const searchButton = document.getElementById('searchButton');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');
    const searchResults = document.getElementById('searchResults');

    // Open search overlay
    function openSearch() {
        searchOverlay.classList.add('active');
        setTimeout(() => {
            searchInput.focus();
        }, 100);
    }

    // Close search overlay
    function closeSearchOverlay() {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
    }

    // Search function
    function performSearch(query) {
        query = query.toLowerCase().trim();
        
        if (!query) {
            searchResults.innerHTML = '';
            searchResults.classList.remove('active');
            return;
        }

        // Filter search data
        const results = searchData.filter(item => {
            return item.title.toLowerCase().includes(query) ||
                   item.description.toLowerCase().includes(query) ||
                   item.keywords.some(keyword => keyword.toLowerCase().includes(query));
        });

        // Sort results: products first, then pages, then info
        const sortOrder = { product: 1, page: 2, info: 3 };
        results.sort((a, b) => sortOrder[a.type] - sortOrder[b.type]);

        // Display results
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <p>No results found for "${query}"</p>
                    <p class="no-results-suggestion">Try searching for:</p>
                    <ul class="search-suggestions">
                        <li><a href="shop.html">Browse all products</a></li>
                        <li>Product names like "semaglutide", "bpc-157", "tb-500"</li>
                        <li>Pages like "contact", "faq", "shipping"</li>
                        <li>Topics like "free shipping", "coa", "quality"</li>
                    </ul>
                </div>
            `;
        } else {
            searchResults.innerHTML = `
                <div class="search-results-header">
                    Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"
                </div>
                ${results.map(result => `
                    <a href="${result.url}" class="search-result-item">
                        ${result.image ? `<img src="${result.image}" alt="${result.title}" class="search-result-image">` : ''}
                        <div class="search-result-content">
                            <div class="search-result-header">
                                <span class="search-result-type ${result.type}">${result.type}</span>
                                ${result.price ? `<span class="search-result-price">${result.price}</span>` : ''}
                            </div>
                            <div class="search-result-title">${highlightText(result.title, query)}</div>
                            <div class="search-result-description">${highlightText(result.description, query)}</div>
                        </div>
                    </a>
                `).join('')}
            `;
        }

        searchResults.classList.add('active');
    }

    // Highlight matching text
    function highlightText(text, query) {
        const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    // Escape special regex characters
    function escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Event listeners
    if (searchButton) {
        searchButton.addEventListener('click', openSearch);
    }

    if (closeSearch) {
        closeSearch.addEventListener('click', closeSearchOverlay);
    }

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            closeSearchOverlay();
        }
    });

    // Close when clicking outside
    if (searchOverlay) {
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                closeSearchOverlay();
            }
        });
    }

    // Real-time search as user types
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }

    // Handle form submission
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            performSearch(searchInput.value);
        });
    }
});