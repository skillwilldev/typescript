"use strict";
// ==========================================
// 2️. DATABASE (STATE)
// ==========================================
let products = [];
let users = [];
// ==========================================
// 3️. PRODUCT FUNCTIONS
// ==========================================
function addProduct(product) {
    products.push(product);
}
function findProductById(id) {
    return products.find(p => p.id === id);
}
function printProducts() {
    console.log("📦 CURRENT PRODUCTS IN STORE:");
    console.log(products);
}
// ==========================================
// 4️. USER FUNCTIONS
// ==========================================
function addUser(user) {
    users.push(user);
}
function findUserById(id) {
    return users.find(u => u.id === id);
}
function printUsers() {
    console.log("👤 REGISTERED USERS:");
    console.log(users);
}
// ==========================================
// 5️. CART FUNCTIONS
// ==========================================
function addToCart(userId, productId, quantity) {
    const user = findUserById(userId);
    const product = findProductById(productId);
    if (!user || !product) {
        console.log(`⚠ Error: User ${userId} or Product ${productId} not found.`);
        return;
    }
    if (product.stock < quantity) {
        console.log(`⚠ Error: Not enough stock for ${product.name}. Available: ${product.stock}`);
        return;
    }
    // Уменьшаем количество товара на складе
    product.stock -= quantity;
    // Ищем, есть ли уже такой товар в корзине
    const existingItem = user.cart.find(item => item.product.id === productId);
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
    const product = findProductById(productId);
    if (!user || !product)
        return;
    const index = user.cart.findIndex(item => item.product.id === productId);
    if (index === -1)
        return;
    const item = user.cart[index];
    // Возвращаем товар на склад
    product.stock += item.quantity;
    // Удаляем из корзины
    user.cart.splice(index, 1);
}
// ==========================================
// 6️. ANALYTICS FUNCTIONS (USING reduce)
// ==========================================
// Считает общую стоимость корзины конкретного пользователя
function calculateCartTotal(userId) {
    const user = findUserById(userId);
    if (!user)
        return 0;
    return user.cart.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
    }, 0);
}
// Считает общее количество единиц товара в корзине пользователя
function calculateTotalItems(userId) {
    const user = findUserById(userId);
    if (!user)
        return 0;
    return user.cart.reduce((totalCount, item) => {
        return totalCount + item.quantity;
    }, 0);
}
// Находит самый дорогой продукт в магазине
function getMostExpensiveProduct() {
    if (products.length === 0)
        return undefined;
    return products.reduce((mostExpensive, currentProduct) => {
        return currentProduct.price > mostExpensive.price ? currentProduct : mostExpensive;
    });
}
// Считает суммарную стоимость всех товаров на складе (цена * остаток)
function totalStoreValue() {
    return products.reduce((total, p) => total + (p.price * p.stock), 0);
}
// Вычисляет среднюю цену товара в магазине
function averageProductPrice() {
    if (products.length === 0)
        return 0;
    const totalSum = products.reduce((sum, p) => sum + p.price, 0);
    return totalSum / products.length;
}
// Аgroupирует продукты по категориям (возвращает объект вида { "Tech": [...], "Toys": [...] })
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
// 7️. CHECKOUT SYSTEM
// ==========================================
function checkout(userId) {
    const user = findUserById(userId);
    if (!user) {
        console.log("⚠ Checkout failed: User not found.");
        return;
    }
    if (user.cart.length === 0) {
        console.log(`⚠ Checkout failed: ${user.name}'s cart is empty.`);
        return;
    }
    // Рассчитываем итоговую сумму с помощью нашей функции на reduce
    const total = calculateCartTotal(userId);
    console.log(`\n🧾 CHECKOUT FOR USER: ${user.name.toUpperCase()}`);
    console.log("Items purchased:", user.cart);
    console.log(`💰 TOTAL PAID: $${total}`);
    console.log("------------------------------------------");
    // Очищаем корзину после успешной оплаты
    user.cart = [];
}
// ==========================================
// 8️. APP START (TESTING DATA)
// ==========================================
// 1. Добавляем товары в магазин
addProduct({ id: 1, name: "Laptop", price: 1000, stock: 5, category: "Tech" });
addProduct({ id: 2, name: "Phone", price: 700, stock: 10, category: "Tech" });
addProduct({ id: 3, name: "Keyboard", price: 150, stock: 15, category: "Tech" });
addProduct({ id: 4, name: "Whale plush toy", price: 30, stock: 50, category: "Toys" });
// 2. Регистрируем пользователя
addUser({ id: 1, name: "Melik", cart: [] });
// 3. Операции с корзиной (Cart operations)
addToCart(1, 1, 1); // Мелик берет 1 лаптоп (остаток на складе: 4)
addToCart(1, 2, 2); // Мелик берет 2 телефона (остаток на складе: 8)
addToCart(1, 4, 5); // Мелик берет 5 игрушек  (остаток на складе: 45)
// 4. Вывод аналитики (Analytics)
console.log("--- 📊 STORE ANALYTICS ---");
console.log("Most expensive product:", getMostExpensiveProduct()?.name); // Ожидается: Laptop
console.log("Average product price:", `$${averageProductPrice().toFixed(2)}`); // Ожидается: $470.00
console.log("Total store inventory value:", `$${totalStoreValue()}`);
console.log("Products by category:", groupProductsByCategory());
console.log("\n--- 🛒 USER CART ANALYTICS ---");
console.log("Total items in Melik's cart:", calculateTotalItems(1)); // Ожидается: 8 (1 + 2 + 5)
console.log("Current cart total cost:", `$${calculateCartTotal(1)}`); // Ожидается: 1000 + 1400 + 150 = 2550
// 5. Оформление заказа (Checkout)
checkout(1);
// Проверяем, что корзина пуста, а склад обновился
console.log("\n--- 🔍 POST-CHECKOUT CHECK ---");
printProducts(); // Показывает уменьшенный stock
printUsers(); // Показывает пустую корзину Мелика
console.log('------------------');
console.log(users);
console.log(products);
