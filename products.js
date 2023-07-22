let products = [
    {
        id: 2536,
        name: "Sony Professional 32GB XQD",
        price: 500,
        category: "Storage",
        description: "The new XQD cards achieve Max read",
        image: "images/sony.jpg",
    },
    {
        id: 2537,
        name: "Lenovo Legion 15.6 Gaming",
        price: 4228,
        category: "Laptops",
        description:
            "Lenovo Legion 5 pairs unparalleled flexibility with incredible power, offering a plethora of performance options for any gamer in a clean and minimalist design",
        image: "images/lenovo.jpg",
    },
    {
        id: 2538,
        name: "ASUS ROG GL552VW-DH71",
        price: 5300,
        category: "Laptops",
        description:
            "Offering a formidable core experience for serious gaming and multitasking on Windows 10 Pro",
        image: "images/asus.jpg",
    },
    {
        id: 2539,
        name: "Asus TUF VG27AQ1A 27 Inch IPS WQHD G-Sync",
        price: 1599,
        category: "Monitors",
        description:
            "Good quality monitor from Asus that made exactly for gaming, with 144Hz refresh rate, 27 inches and FreeSync supporter",
        image: "images/asus-vg27aq1a.jpg",
    },
    {
        id: 2540,
        name: "Apple iPhone 14 Pro 256GB",
        price: 5045,
        category: "Cell phones",
        description:
            "The powerfull iPhone 14 Pro by Apple with 6.1 inches Super Retina XDR OLED screen, A16 Bionic processor, 3 rear cameras 48+12+12 MP, water and dust proof IP68 standard",
        image: "images/iphone14.webp",
    },
    {
        id: 2541,
        name: "Corsair M65 RGB ULTRA WIRELES Tunable FPS",
        price: 599,
        category: "Mouses",
        description:
            "Professional wireless gaming mouse by Crosair, provides accurate control and durability over time with optical switches",
        image: "images/crosair-m65.jpg",
    },
];


function showCards() {
    for (let i in products) {
        document.getElementById("products").innerHTML += `
        <div class="col-md-4">
            <div class="card cardImage mb-3" style="width: 20rem;">
                <img src=${products[i].image} class="card-img-top" data-bs-toggle="modal" data-bs-target="#productModal" onclick="showProductDetails(${i})" alt=${products[i].name}>
                <div class="card-body">
                    <h4 class="card-title">${products[i].name}</h4>
                    <h5 class="text-center">${products[i].price}₪</h5>
                    <p class="card-text">${products[i].category}</p>
                    <a class="btn btn-primary w-100" onclick="addToCart(${i})">Add to cart</a>
                </div>
            </div>
        </div>`;
    }
}
showCards();


function showProductDetails(productIndex) {
    console.log(productIndex);
    document.getElementById("productModalLabel").innerText = products[productIndex].name;
    document.getElementById("productModalBody").innerHTML = `
        <div class="card border-0 cardImageModal" style="width: 100%;">
            <img src=${products[productIndex].image} class="card-img-top mb-2" alt=${products[productIndex].name}>
            <div class="card-body">
                <div class="border-bottom">
                    <h4 class="card-title text-center">${products[productIndex].category}</h4>
                </div>
                <h5 class="text-center mt-2">Description</h5>
                <p class="card-text">${products[productIndex].description}</p>
        </div>
    </div>
    `;
    document.getElementById("productModalFooter").innerHTML = `
        <button type="button" class="btn btn-secondary w-25" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary w-50" data-bs-dismiss="modal" onclick="addToCart(${productIndex})">Add to cart</button>
        `;
}



