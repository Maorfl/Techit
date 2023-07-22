let cart = [];

function updateCart() {
    let sum = 0;
    if (cart.length) {
        document.getElementById("noProducts").style.display = "none";
        document.getElementById("cartModalBody").style.display = "block";
        document.getElementById("cartModalFooter").innerHTML = `<button type="button" class="btn btn-success w-100">Proceed to checkout</button>`;
        document.getElementById("cartTableBody").innerHTML = "";
        for (let i in cart) {
            document.getElementById("cartTableBody").innerHTML += `
            <tr>
                <td><img src="${cart[i].image}"></td>
                <td>${cart[i].id}</td>
                <td>${cart[i].name}</td>
                <td>${cart[i].price}₪</td>
                <td>${cart[i].category}</td>
                <td>${cart[i].description}</td>
                <td><i class="fa-solid fa-trash text-danger fs-5" onclick="deleteFromCart(${i})"></i></td>
                </tr>
        `;
        }
        for (let product of cart) sum += product.price;
        document.getElementById("totalAmount").innerHTML = `<h2 class="text-center">Total: ${sum}₪</h2>`;
    }
    else {
        document.getElementById("circle").style.visibility = "hidden";
        document.getElementById("cartModalBody").style.display = "none";
        document.getElementById("noProducts").style.display = "block";
        document.getElementById("cartModalFooter").innerHTML = `<button type="button" class="btn btn-secondary w-100" data-bs-dismiss="modal">Close</button>`;
    }
}

function addToCart(productIndex) {
    cart.push(products[productIndex]);
    alert("Product added!");
    sessionStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("circle").style.visibility = "visible";
    document.getElementById("circle").innerText = cart.length;
}

function deleteFromCart(productIndex) {
    if (confirm(`Delete ${cart[productIndex].name} from cart?`)) {
        cart.splice(productIndex, 1);
        sessionStorage.setItem("cart", JSON.stringify(cart));
        document.getElementById("circle").innerText = cart.length;
        updateCart();
    }
}

function isProductsInCart() {
    if (sessionStorage.getItem("cart")) cart = JSON.parse(sessionStorage.getItem("cart"))
    if (cart.length) {
        document.getElementById("circle").style.visibility = "visible";
        document.getElementById("circle").innerText = cart.length;
    }
    else {
        document.getElementById("circle").style.visibility = "hidden";
    }
}
isProductsInCart();
