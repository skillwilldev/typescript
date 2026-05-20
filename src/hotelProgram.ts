// ==========================================
// 1. TYPES & INTERFACES
// ==========================================
type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: string;
};

type CartItem = {
    product: Product;
    quantity: number;
};

type User = {
    id: number;
    name: string;
    cart: CartItem[];
};

// ==========================================
// 2. DATABASE (STATE)
// ==========================================
let products: Product[] = [];
let users: User[] = [];

// ==========================================
// 3. PRODUCT FUNCTIONS
// ==========================================
function addProduct(product: Product): void {
    products.push(product);
}

function findProductById(id: number): Product | undefined {
    return products.find(p => p.id === id);
}

function printProducts(): void {
    console.log(" CURRENT PRODUCTS IN STORE:");
    console.log(products);
}

// ==========================================
// 4. USER FUNCTIONS
// ==========================================
function addUser(user: User): void {
    users.push(user);
}

function findUserById(id: number): User | undefined {
    return users.find(u => u.id === id);
}

function printUsers(): void {
    console.log("REGISTERED USERS:");
    console.log(users);
}

// ==========================================
// 5. CART FUNCTIONS
// ==========================================
function addToCart(userId: number, productId: number, quantity: number): void {
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

    // Reduce the product stock in the warehouse
    product.stock -= quantity;

    // Check if this product is already in the cart
    const existingItem = user.cart.find(item => item.product.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        user.cart.push({
            product,
            quantity
        });
    }
}

function removeFromCart(userId: number, productId: number): void {
    const user = findUserById(userId);
    const product = findProductById(productId);

    if (!user || !product) return;

    const index = user.cart.findIndex(item => item.product.id === productId);
    if (index === -1) return;

    const item = user.cart[index];

    // Return the product back to the stock/warehouse
    product.stock += item!.quantity;

    // Remove from cart
    //user.cart.splice(index, 1);
    user.cart = user.cart.filter((item) => item.product.id !== productId);
}

// ==========================================
// 6. ANALYTICS FUNCTIONS (USING reduce)
// ==========================================

// Calculates the total price of a specific user's cart
function calculateCartTotal(userId: number): number {
    const user = findUserById(userId);
    if (!user) return 0;

    return user.cart.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
    }, 0);
}

// Calculates the total number of items in a user's cart
function calculateTotalItems(userId: number): number {
    const user = findUserById(userId);
    if (!user) return 0;

    return user.cart.reduce((totalCount, item) => {
        return totalCount + item.quantity;
    }, 0);
}

// Finds the most expensive product in the store
function getMostExpensiveProduct(): Product | undefined {
    if (products.length === 0) return undefined;

    return products.reduce((mostExpensive, currentProduct) => {
        return currentProduct.price > mostExpensive.price ? currentProduct : mostExpensive;
    });
}

// Calculates the total value of all products in stock (price * stock)
function totalStoreValue(): number {
    return products.reduce((total, p) => total + (p.price * p.stock), 0);
}

// Calculates the average product price in the store
function averageProductPrice(): number {
    if (products.length === 0) return 0;

    const totalSum = products.reduce((sum, p) => sum + p.price, 0);
    return totalSum / products.length;
}

// Groups products by category (returns an object like { "Tech": [...], "Toys": [...] })
function groupProductsByCategory(): Record<string, Product[]> {
    return products.reduce((grouped, product) => {
        const cat = product.category;
        if (!grouped[cat]) {
            grouped[cat] = [];
        }
        grouped[cat].push(product);
        return grouped;
    }, {} as Record<string, Product[]>);
}

// ==========================================
// 7. CHECKOUT SYSTEM
// ==========================================
function checkout(userId: number): void {
    const user = findUserById(userId);
    if (!user) {
        console.log("⚠ Checkout failed: User not found.");
        return;
    }

    if (user.cart.length === 0) {
        console.log(`⚠ Checkout failed: ${user.name}'s cart is empty.`);
        return;
    }

    // Calculate the total price using our reduce-based function
    const total = calculateCartTotal(userId);

    console.log(`\n🧾 CHECKOUT FOR USER: ${user.name.toUpperCase()}`);
    console.log("Items purchased:", user.cart);
    console.log(`TOTAL PAID: $${total}`);
    console.log("------------------------------------------");

    // Clear the cart after a successful payment
    user.cart = [];
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
addToCart(1, 1, 1);  // Melik takes 1 laptop (remaining stock: 4)
addToCart(1, 2, 2);  // Melik takes 2 phones (remaining stock: 8)
addToCart(1, 4, 5);  // Melik takes 5 toys (remaining stock: 45)

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
printUsers();    // Shows Melik's empty cart

console.log('------------------');
console.log(users);
console.log(products);