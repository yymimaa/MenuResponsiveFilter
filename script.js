let product = {
    data: [
    {
        namaProduct: "Chocolate Cranberry Mini Cake",
        category: "Cake",
        harga: " 86.000",
        gambar: "ChocolateCranberryMiniCakes.jpg",
    },
    {
        namaProduct: "Brownie Fudge Swirl Ice Cream",
        category: "Icecream",
        harga: " 95.000",
        gambar: "browniefudgeswirlicecream.jpg",
    },
    {
        namaProduct: "PufF Pastry Fruit Tarts",
        category: "Pastry",
        harga: " 75.000",
        gambar: "puffpastryfruittarts.jpg",
    },
    {
        namaProduct: "Mini Gluten Cheesecake",
        category: "Cake",
        harga: " 70.000",
        gambar: "MinjGlutenCheeseCake.jpg",
    },
    {
        namaProduct: "Greek Yoghurt Chocolate Pancakes",
        category: "Pancake",
        harga: " 87.000",
        gambar: "greekyoghurtchocolatepancake.jpg",
    },
    {
        namaProduct: "Chai Spiced Ice Cream Parfait",
        category: "Icecream",
        harga: " 90.000",
        gambar: "chaispicedicecreamparfait.jpg",
    },
    {
        namaProduct: "Raspberry Choux au Craquelin",
        category: "Pastry",
        harga: " 83.000",
        gambar: "Raspberry Choux au Craquelin.jpg",
    },
    {
        namaProduct: "Raspberry Pistacio Eton Mess",
        category: "Icecream",
        harga: " 95.000",
        gambar: "Raspberry Pistacio Eton Mess.jpg",
    },
    {
        namaProduct: "Classy Fluffy Pancakes",
        category: "Pancake",
        harga: " 80.000",
        gambar: "classyfluffypancakes.jpg",
    },
    {
        namaProduct: "No-Churn Oreo Ice Cream",
        category: "Icecream",
        harga: " 10.000",
        gambar: "nochurnoreoicecream.jpg",
    },
    {
        namaProduct: "Fluffy Japanese Pancakes",
        category: "Pancake",
        harga: " 80.000",
        gambar: "Fluffy Japanese Pancakes.jpg",
    },
    {
        namaProduct: "Ice Cream Cookie Sandwich",
        category: "Icecream",
        harga: " 98.000",
        gambar: "icecreamcookiwsandwich.jpg",
    },
],
}; 

for (let to of product.data) {
    // create card
    let card = document.createElement("div");
    // card should have category
    card.classList.add("card", to.category, "hide");
    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // img tag
    let gambar = document.createElement("img");
    gambar.setAttribute("src", to.gambar);
    imgContainer.appendChild(gambar);
    card.appendChild(imgContainer);
    // container
    let container = document.createElement("div");
    container.classList.add("container");
    // product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = to.namaProduct.toUpperCase();
    container.appendChild(name);
    // harga
    let harga = document.createElement("h6");
    harga.innerText = "RP" + to.harga;
    container.appendChild(harga);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
    }

    // parameter diteruskan dari tombol (parameter = category)
    function filterProduct(value){
        //tombol class code
        let tombol = document.querySelectorAll(".button-value");
        tombol.forEach((tombol) => {
            // mengecek nilai apakah sama dengan innertext
            if(value.toUpperCase() == tombol.innerText.toUpperCase()) {
                tombol.classList.add("active");
            } 
            else{
                tombol.classList.remove("active");
            }
    });

        // pilih semua card
        let gallery = document.querySelectorAll(".card");
        gallery.forEach((element) => {
            // display all on 'all' button
            if(value == "all"){
                element.classList.remove("hide");
            } 
            else{
                // check if element berisi catagory class
                if(element.classList.contains(value)) {
                    // display element based on category
                    element.classList.remove("hide");
                } 
                else{
                    // hide other
                    element.classList.add("hide");
                }
            }
        });
    }
    // search button
    document.getElementById("search").addEventListener("click", () => {
        let searchInput = document.getElementById("searching").value;
        let gallery = document.querySelectorAll(".product-name");
        let cards = document.querySelectorAll(".card");
    
        gallery.forEach((element, index) => {
            if(element.innerText.includes(searchInput.toUpperCase())){
                cards[index].classList.remove("hide");
            }
            else{
                cards[index].classList.add("hide");
            } 
        });
        if(value == ""){
            filterProduct(product.data);
        }
        else{
            if(product.data = ""){
                    document.getElementById("tidak").style.display = 'block';
                    document.getElementById(".card").innerText = "";
                element.classList.remove("hide");
            }
            else{
                filterProduct(product.data);
                document.getElementById("tidak").style.display = 'none';
                element.classList.add("hide");
                
            }
        }
    });

    // bagian awal untuk menampilkan semua produk
    window.onload = () => {
        filterProduct("all");
    };