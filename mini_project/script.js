// Existing inventory
let inventory = [
    {
        name: "Laptop",
        price: 800
    },

    {
        name: "Mouse",
        price: 25
    }
];


// -----------------------------
// Category Function
// -----------------------------

function getCategory(price) {

    if (price < 50) {
        return "Budget";
    }

    if (price < 200) {
        return "Standard";
    }

    return "Premium";
}


// -----------------------------
// Add Product
// -----------------------------

function addProduct() {

    const nameInput =
        document.getElementById("productName");

    const priceInput =
        document.getElementById("productPrice");

    const name = nameInput.value.trim();

    const price = Number(priceInput.value);


    // Validation
    if (name === "" || price <= 0) {
        alert("Please enter valid product details.");
        return;
    }


    // Add object to array
    inventory.push({
        name: name,
        price: price
    });


    // Clear inputs
    nameInput.value = "";
    priceInput.value = "";


    // Refresh dashboard
    displayInventory();
}


// -----------------------------
// Display Inventory
// forEach()
// -----------------------------

function displayInventory() {

    const table =
        document.getElementById("inventoryTable");

    table.innerHTML = "";


    inventory.forEach(product => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>${getCategory(product.price)}</td>
        `;

        table.appendChild(row);
    });


    updateAnalytics();
}


// -----------------------------
// Analytics
// -----------------------------

function updateAnalytics() {

    document.getElementById("totalProducts").textContent =
        inventory.length;


    // reduce() for total value
    const totalValue = inventory.reduce(
        (total, product) => total + product.price,
        0
    );


    document.getElementById("totalValue").textContent =
        `$${totalValue}`;
}


// -----------------------------
// Initial Display
// -----------------------------

displayInventory();