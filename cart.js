// Cart Overlay Functions - Replace your entire cart.js with this

// Open cart overlay
function openCartOverlay() {
    const overlay = document.getElementById('cartOverlay');
    if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateCartOverlay();
    }
}

// Close cart overlay
function closeCartOverlay() {
    const overlay = document.getElementById('cartOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Update cart overlay display
function updateCartOverlay() {
    const itemsContainer = document.getElementById('cartOverlayItems');
    const itemCount = document.getElementById('cartItemCount');
    const subtotalEl = document.getElementById('cartSubtotal');
    const shippingEl = document.getElementById('cartShipping');
    const totalEl = document.getElementById('cartTotal');
    const shippingNotice = document.getElementById('shippingNotice');

    if (!itemsContainer) return;

    const items = cart.items;
    const subtotal = cart.getTotal();
    const shipping = cart.getShippingCost();
    const total = cart.getFinalTotal();
    const hasFreeShipping = cart.hasFreeShipping();

    // Update item count
    if (itemCount) {
        itemCount.textContent = cart.getItemCount();
    }

    // Update items display
    if (items.length === 0) {
        itemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="lni lni-cart"></i>
                <p>Your cart is empty</p>
                <a href="./shop.html" class="btn-shop-now">Shop Now</a>
            </div>
        `;
    } else {
        itemsContainer.innerHTML = items.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <p class="cart-item-category">${item.category}</p>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity">
                        <button class="qty-btn minus" onclick="updateCartItemQty('${item.id}', ${item.quantity - 1})">-</button>
                        <input type="number" value="${item.quantity}" min="1" 
                               onchange="updateCartItemQty('${item.id}', parseInt(this.value))">
                        <button class="qty-btn plus" onclick="updateCartItemQty('${item.id}', ${item.quantity + 1})">+</button>
                    </div>
                    <button class="cart-item-remove" onclick="removeCartItem('${item.id}')">
                        <i class="lni lni-trash-can"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Update summary
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

    // Update shipping notice
    if (shippingNotice) {
        if (hasFreeShipping) {
            shippingNotice.className = 'shipping-notice success';
            shippingNotice.innerHTML = `
                <i class="lni lni-checkmark-circle"></i>
                <span>You qualified for <strong>free shipping!</strong></span>
            `;
        } else {
            const amountNeeded = 200 - subtotal;
            shippingNotice.className = 'shipping-notice';
            shippingNotice.innerHTML = `
                <i class="lni lni-delivery"></i>
                <span>Add <strong>$${amountNeeded.toFixed(2)}</strong> more for free shipping!</span>
            `;
        }
    }
}

// Helper functions for cart overlay
function updateCartItemQty(productId, quantity) {
    cart.updateQuantity(productId, quantity);
    updateCartOverlay();
}

function removeCartItem(productId) {
    cart.removeItem(productId);
    updateCartOverlay();
}

// Shopping Cart System for Westbridge Research
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.init();
    }

    // Initialize cart
    init() {
        this.updateCartIcon();
        this.setupEventListeners();
    }

    // Load cart from localStorage
    loadCart() {
        const saved = localStorage.getItem('westbridgeCart');
        return saved ? JSON.parse(saved) : [];
    }

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('westbridgeCart', JSON.stringify(this.items));
        this.updateCartIcon();
    }

    // Add item to cart
    addItem(productId, quantity = 1) {
        const product = productsData[productId];
        if (!product) {
            console.error('Product not found:', productId);
            return false;
        }

        // Check if item already exists in cart
        const existingItem = this.items.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            // Extract price (remove $ and convert to number)
            const price = parseFloat(product.priceCurrent.replace('$', ''));
            
            this.items.push({
                id: productId,
                name: product.name,
                price: price,
                image: product.image,
                quantity: quantity,
                category: product.category
            });
        }

        this.saveCart();
        this.showNotification(`${product.name} added to cart!`);
        updateCartOverlay(); // Update overlay when item is added
        return true;
    }

    // Remove item from cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
    }

    // Update item quantity
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.updateCartDisplay();
            }
        }
    }

    // Get cart total
    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Get cart item count
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    // Check if free shipping applies
    hasFreeShipping() {
        return this.getTotal() >= 200;
    }

    // Calculate shipping cost
    getShippingCost() {
        return this.hasFreeShipping() ? 0 : 15; // $15 flat rate or free over $200
    }

    // Get final total with shipping
    getFinalTotal() {
        return this.getTotal() + this.getShippingCost();
    }

    // Update cart icon with item count
    updateCartIcon() {
        const cartIcon = document.querySelector('.lni-cart-2');
        if (!cartIcon) return;

        const count = this.getItemCount();
        
        // Remove existing badge if any
        const existingBadge = cartIcon.parentElement.querySelector('.cart-badge');
        if (existingBadge) {
            existingBadge.remove();
        }

        // Add badge if items exist
        if (count > 0) {
            const badge = document.createElement('span');
            badge.className = 'cart-badge';
            badge.textContent = count;
            cartIcon.parentElement.style.position = 'relative';
            cartIcon.parentElement.appendChild(badge);
        }
    }

    // Show notification
    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 10);

        // Hide and remove notification
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Update cart display (for cart page)
    updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cartItems');
        const cartSummary = document.getElementById('cartSummary');

        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="lni lni-cart" style="font-size: 64px; color: #ccc;"></i>
                    <h3>Your cart is empty</h3>
                    <p>Add some products to get started!</p>
                    <a href="shop.html" class="btn-primary">Shop Now</a>
                </div>
            `;
            if (cartSummary) cartSummary.style.display = 'none';
            return;
        }

        // Display cart items
        cartItemsContainer.innerHTML = this.items.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <p class="cart-item-category">${item.category}</p>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="qty-btn minus" onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <input type="number" value="${item.quantity}" min="1" 
                           onchange="cart.updateQuantity('${item.id}', parseInt(this.value))">
                    <button class="qty-btn plus" onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
                <div class="cart-item-total">
                    <p>$${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button class="cart-item-remove" onclick="cart.removeItem('${item.id}')">
                    <i class="lni lni-trash-can"></i>
                </button>
            </div>
        `).join('');

        // Update summary
        if (cartSummary) {
            const subtotal = this.getTotal();
            const shipping = this.getShippingCost();
            const total = this.getFinalTotal();

            cartSummary.style.display = 'block';
            cartSummary.innerHTML = `
                <h3>Order Summary</h3>
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span>Shipping:</span>
                    <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
                </div>
                ${this.hasFreeShipping() ? '<div class="free-shipping-notice">🎉 You qualified for free shipping!</div>' : 
                  subtotal >= 180 ? `<div class="almost-free-shipping">Add $${(200 - subtotal).toFixed(2)} more for free shipping!</div>` : ''}
                <div class="summary-row total">
                    <span>Total:</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
                <button class="btn-checkout" onclick="cart.checkout()">Proceed to Checkout</button>
                <a href="shop.html" class="btn-continue-shopping">Continue Shopping</a>
            `;
        }
    }

    // Setup event listeners - MODIFIED TO OPEN OVERLAY INSTEAD
    setupEventListeners() {
        // Cart icon click - open overlay instead of going to cart page
        const cartIcon = document.querySelector('.lni-cart-2');
        if (cartIcon && !cartIcon.dataset.listenerAdded) {
            cartIcon.parentElement.addEventListener('click', (e) => {
                e.preventDefault();
                openCartOverlay(); // Changed from window.location.href
            });
            cartIcon.dataset.listenerAdded = 'true';
        }

        // Add to cart buttons on shop page
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('shop-add-to-cart') || 
                e.target.classList.contains('add-to-cart')) {
                e.preventDefault();
                e.stopPropagation();
                
                // Get product ID from parent card
                const card = e.target.closest('.shop-product-card') || e.target.closest('a[href*="product-details"]');
                if (card) {
                    const url = card.href || card.querySelector('a')?.href;
                    if (url) {
                        const urlParams = new URLSearchParams(url.split('?')[1]);
                        const productId = urlParams.get('id');
                        if (productId) {
                            this.addItem(productId);
                        }
                    }
                }
            }
        });
    }

    // Checkout function
    checkout() {
        if (this.items.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        // Store checkout data
        localStorage.setItem('checkoutData', JSON.stringify({
            items: this.items,
            subtotal: this.getTotal(),
            shipping: this.getShippingCost(),
            total: this.getFinalTotal()
        }));

        // Redirect to checkout page
        window.location.href = 'checkout.html';
    }

    // Clear cart
    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartDisplay();
    }
}

// Initialize cart
const cart = new ShoppingCart();

// Make cart globally accessible
window.cart = cart;

// Initialize cart overlay event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Close cart overlay
    const closeCartBtn = document.getElementById('closeCart');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', closeCartOverlay);
    }

    // Close cart when clicking backdrop
    const backdrop = document.querySelector('.cart-overlay-backdrop');
    if (backdrop) {
        backdrop.addEventListener('click', closeCartOverlay);
    }

    // Continue shopping button
    const continueShoppingBtn = document.getElementById('continueShopping');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', closeCartOverlay);
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            cart.checkout();
        });
    }

    // Close cart on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCartOverlay();
        }
    });
});