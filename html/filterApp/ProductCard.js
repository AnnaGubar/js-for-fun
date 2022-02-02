export const ProductCard = ({ title, description, id, imgSrc }) => {
  //*** создание разметки createElement

  // const productWrapper = document.createElement("div");
  // const productImg = document.createElement("img");
  // const productTitle = document.createElement("h2");
  // const productText = document.createElement("div");
  // const productDescription = document.createElement("p");
  // const productButton = document.createElement("button");

  // productWrapper.classList.add("product");
  // productImg.classList.add("product__img");
  // productTitle.classList.add("product__title");
  // productDescription.classList.add("product__description");
  // productButton.classList.add("btn", "btn--success");
  // productText.classList.add("product__text");

  // productImg.src = imgSrc;
  // productTitle.textContent = title;
  // productDescription.textContent = description;
  // productButton.textContent = "Add to card";
  // productButton.dataset.id = id;

  // productText.append(productTitle, productDescription, productButton);
  // productWrapper.append(productImg, productText);

  // return productWrapper;

  //*** создание разметки через шаблон (innerHTML)

  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
  <div class="product">
    <img class="product__img" src="${imgSrc}">
    <div class="product__text">
      <h2 class="product__title">${title}</h2>
      <p class="product__description">${description}</p>
      <button class="btn btn--success" data-id="${id}">Add to card</button>
    </div>
  </div>
  `;

  // return wrapper.children[0]; // ⬇ альтернатирва
  return wrapper.firstElementChild;
};
