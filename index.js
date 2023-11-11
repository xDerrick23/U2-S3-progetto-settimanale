const fetchProduct = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMzU3NTMyNWM5NzAwMTg3ZmEyNmUiLCJpYXQiOjE2OTk2MjYyNDQsImV4cCI6MTcwMDgzNTg0NH0.0nZwu73F2wOKv1JBVu_Mol4oizaSPZx4x6grBtYxXOs",
          "Content-Type": "application/json"
        }
      }
    );

    if (!response.ok) {
      throw new Error("General fetching error");
    }

    const products = await response.json();

    products.forEach((product) => {

      const productsContainer = document.getElementById("product-cards");

      const cardCol = document.createElement("div");
      cardCol.classList = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";

      const card = document.createElement("div");
      card.classList = "card h-100";

      const cardImg = document.createElement("img");
      cardImg.classList = "card-img-top h-100 object-fit-cover p-3";
      cardImg.src = product.imageUrl;

      const cardBody = document.createElement("div");
      cardBody.classList = "card-body";

      const cardTitle = document.createElement("h5");
      cardTitle.classList = "card-title";
      cardTitle.innerText = product.name;

      const cardPrice = document.createElement("p");
      cardPrice.classList = "card-text";
      cardPrice.innerText = product.price + "€";

      const cardBtn = document.createElement("button");
      cardBtn.classList = "btn btn-dark";
    cardBtn.innerText = "Scopri di più";

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardPrice);
      cardBody.appendChild(cardBtn);

      card.appendChild(cardImg);
      card.appendChild(cardBody);

      cardCol.appendChild(card);
      productsContainer.appendChild(cardCol);
      
      cardBtn.addEventListener("click", function () {
        window.location.assign("./details.html");
      });
    });
  } catch (error) {
    console.log("Errore", error);
  }
};

window.onload = () => {
  fetchProduct();
};
