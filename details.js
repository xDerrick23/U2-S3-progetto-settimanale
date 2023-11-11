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
  
      const product = await response.json();
      console.log(product);
      const productsContainer = document.getElementById("card");
  
      const cardCol = document.createElement("div");
      cardCol.classList = "col-12 col-md-6";
  
      const cardImg = document.createElement("img");
      cardImg.classList =
        "w-100 object-fit-fill border border-1 rounded border-dark p-3  ";
      cardImg.src = product.imageUrl;

      const cardBody = document.createElement("div");
      cardBody.classList = "card-body";
  
      const cardTitle = document.createElement("h5");
      cardTitle.classList = "card-title fs-1 fw-bold";
      cardTitle.innerText = product.name;
  
      const cardBrand = document.createElement("h6");
      cardBrand.classList = "card-text fs-6 fw-bold badge ";
      cardBrand.innerText = product.brand;
  
      const cardPrice = document.createElement("p");
      cardPrice.classList = "card-text fs-5 fw-bold my-2";
      cardPrice.innerText = product.price ;
  
      const cardDesc = document.createElement("p");
      cardDesc.classList = "card-text";
      cardDesc.innerText = product.description;
  
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardPrice);
      cardBody.appendChild(cardBrand);
      cardBody.appendChild(cardDesc);
  
      cardCol.appendChild(cardImg);
      cardCol2.appendChild(cardBody);
      productsContainer.appendChild(cardCol);
      productsContainer.appendChild(cardCol2);
    } catch (error) {
      console.log("Errore", error);
    }
  };
  
  window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const productID = params.get("appId");
    fetchProduct(productID);
  };