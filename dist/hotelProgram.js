"use strict";
// ==========================================
// 2. DATABASE (STATE)
// ==========================================
let products = [];
let users = [];
// ==========================================
// 3. PRODUCT FUNCTIONS
// ==========================================
function addProduct(product) {
    products.push(product);
}
function findProductById(id) {
    return products.find(p => p.id === id);
}
function printProducts() {
    console.log(" CURRENT PRODUCTS IN STORE:");
    console.log(products);
}
// ==========================================
// 4. USER FUNCTIONS
// ==========================================
function addUser(user) {
    users.push(user);
}
function findUserById(id) {
    return users.find(u => u.id === id);
}
function printUsers() {
    console.log("REGISTERED USERS:");
    console.log(users);
}
// ==========================================
// 5. CART FUNCTIONS
// ==========================================
function addToCart(userId, productId, quantity) {
    const user = findUserById(userId);
    const product = findProductById(productId);
    if (!user || !product) {
        console.log(`Error: User ${userId} or Product ${productId} not found.`);
        return;
    }
    // 1. Check if this product is already in the user's cart
    const existingItem = user.cart.find(item => item.product.id === productId);
    // 2. Calculate the total quantity requested after this addition
    const currentInCart = existingItem ? existingItem.quantity : 0;
    const futureTotalRequested = currentInCart + quantity;
    // 3. Compare the total requested quantity with the actual store stock
    if (product.stock < futureTotalRequested) {
        console.log(`Error: Cannot add ${quantity} more ${product.name}(s). ` +
            `You already have ${currentInCart} in cart. Total available in store: ${product.stock}`);
        return;
    }
    // 4. If everything is fine - update the quantity or push a new item to the cart
    if (existingItem) {
        existingItem.quantity += quantity;
    }
    else {
        user.cart.push({
            product,
            quantity
        });
    }
}
function removeFromCart(userId, productId) {
    const user = findUserById(userId);
    //const product = findProductById(productId);
    // if (!user || !product) return;
    if (!user)
        return;
    // const index = user.cart.findIndex(item => item.product.id === productId);
    // if (index === -1) return;
    // const item = user.cart[index];
    // // Return the product back to the stock/warehouse
    // product.stock += item!.quantity;
    // Remove from cart
    //user.cart.splice(index, 1);
    user.cart = user.cart.filter((item) => item.product.id !== productId);
}
// ==========================================
// 6. ANALYTICS FUNCTIONS (USING reduce)
// ==========================================
// Calculates the total price of a specific user's cart
function calculateCartTotal(userId) {
    const user = findUserById(userId);
    if (!user)
        return 0;
    return user.cart.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
    }, 0);
}
// Calculates the total number of items in a user's cart
function calculateTotalItems(userId) {
    const user = findUserById(userId);
    if (!user)
        return 0;
    return user.cart.reduce((totalCount, item) => {
        return totalCount + item.quantity;
    }, 0);
}
// Finds the most expensive product in the store
function getMostExpensiveProduct() {
    if (products.length === 0)
        return undefined;
    return products.reduce((mostExpensive, currentProduct) => {
        return currentProduct.price > mostExpensive.price ? currentProduct : mostExpensive;
    });
}
// Calculates the total value of all products in stock (price * stock)
function totalStoreValue() {
    return products.reduce((total, p) => total + (p.price * p.stock), 0);
}
// Calculates the average product price in the store
function averageProductPrice() {
    if (products.length === 0)
        return 0;
    const totalSum = products.reduce((sum, p) => sum + p.price, 0);
    return totalSum / products.length;
}
// Groups products by category (returns an object like { "Tech": [...], "Toys": [...] })
function groupProductsByCategory() {
    return products.reduce((grouped, product) => {
        const cat = product.category;
        if (!grouped[cat]) {
            grouped[cat] = [];
        }
        grouped[cat].push(product);
        return grouped;
    }, {});
}
// ==========================================
// 7. CHECKOUT SYSTEM
// ==========================================
function checkout(userId) {
    const user = findUserById(userId);
    if (!user) {
        console.log("Checkout failed: User not found.");
        return;
    }
    if (user.cart.length === 0) {
        console.log(`Checkout failed: ${user.name}'s cart is empty.`);
        return;
    }
    for (const item of user.cart) {
        if (item.product.stock < item.quantity) {
            console.log(`\n CHECKOUT FAILED for ${user.name.toUpperCase()}:`);
            console.log(`  Not enough stock for "${item.product.name}".`);
            console.log(`  In store: ${item.product.stock} pcs | In your cart: ${item.quantity} pcs.`);
            console.log("  Please update your cart or wait for restocking.");
            return; // Stop checkout completely, do not charge money, do not clear cart
        }
    }
    console.log(`\n🧾 CHECKOUT FOR USER: ${user.name.toUpperCase()}`);
    console.log("Items purchased:");
    for (const item of user.cart) {
        // Reduce the physical warehouse stock right now during the purchase
        item.product.stock -= item.quantity;
        console.log(`  - ${item.product.name} x${item.quantity} ($${item.product.price * item.quantity})`);
    }
    // Calculate the total price using our reduce-based function
    const total = calculateCartTotal(userId);
    console.log(`TOTAL PAID: $${total}`);
    console.log("------------------------------------------");
    // Clear the cart after a successful payment
    user.cart = [];
    /*
    // Calculate the total price using our reduce-based function
    const total = calculateCartTotal(userId);

    console.log(`\n🧾 CHECKOUT FOR USER: ${user.name.toUpperCase()}`);
    console.log("Items purchased:", user.cart);
    console.log(`TOTAL PAID: $${total}`);
    console.log("------------------------------------------");

    // Clear the cart after a successful payment
    user.cart = [];
    */
}
// ==========================================
// 8. APP START (TESTING DATA)
// ==========================================
// 1. Add products to the store
addProduct({ id: 1, name: "Laptop", price: 1000, stock: 5, category: "Tech" });
addProduct({ id: 2, name: "Phone", price: 700, stock: 10, category: "Tech" });
addProduct({ id: 3, name: "Keyboard", price: 150, stock: 15, category: "Tech" });
addProduct({ id: 4, name: "Whale plush toy", price: 30, stock: 50, category: "Toys" });
// 2. Register a user
addUser({ id: 1, name: "Melik", cart: [] });
// 3. Cart operations
addToCart(1, 1, 1); // Melik puts 1 laptop in cart (store stock is still 5)
addToCart(1, 2, 2); // Melik puts 2 phones in cart (store stock is still 10)
addToCart(1, 4, 5); // Melik puts 5 toys in cart (store stock is still 50)
// 4. Analytics output
console.log("--- STORE ANALYTICS ---");
console.log("Most expensive product:", getMostExpensiveProduct()?.name); // Expected: Laptop
console.log("Average product price:", `$${averageProductPrice().toFixed(2)}`); // Expected: $470.00
console.log("Total store inventory value:", `$${totalStoreValue()}`);
console.log("Products by category:", groupProductsByCategory());
console.log("\n--- USER CART ANALYTICS ---");
console.log("Total items in Melik's cart:", calculateTotalItems(1)); // Expected: 8 (1 + 2 + 5)
console.log("Current cart total cost:", `$${calculateCartTotal(1)}`); // Expected: 1000 + 1400 + 150 = 2550
// 5. Checkout
checkout(1);
// Verify that the cart is empty and the stock has updated
console.log("\n--- POST-CHECKOUT CHECK ---");
printProducts(); // Shows reduced stock values
printUsers(); // Shows Melik's empty cart
console.log('------------------');
console.log(users);
console.log(products);
