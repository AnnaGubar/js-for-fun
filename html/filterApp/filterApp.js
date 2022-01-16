import { products } from "./data.js";
import { ProductCard } from "./ProductCard.js"; //шаблон карты товара

const productListRef = document.querySelector(".list");
const searchFormRef = document.querySelector(".search");

const clearProductList = () => {
  productListRef.innerHTML = "";
};

//создание всего списка товаров
const renderProductList = (products) => {
  clearProductList();

  const productsCards = products.map((product) => ProductCard(product));
  productListRef.append(...productsCards);
};

const searchHandler = (event) => {
  event.preventDefault();

  // ⬇ const { value } = event.currentTarget.elements.search;
  const value = event.currentTarget.elements.search.value; // значение инпута

  //проверка на содержание инпута в названиях товаров
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(value.toLowerCase())
  );

  //перенаполнение списка товаров по отфильтрованному
  renderProductList(searchedProducts);
};

searchFormRef.addEventListener("input", searchHandler); //слушаем инпут

//изначальная отрисовка списка товаров - потом только фильтрация
renderProductList(products);
