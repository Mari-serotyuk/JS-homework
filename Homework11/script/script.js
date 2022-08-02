// Задание 1

const products = [
    {
      name: "Iphone 12",
      brand: "Apple",
      price: 3200000,
      properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
      name: "Galaxy S20 Ultra",
      brand: "Samsung",
      price: 2900000,
      properties: ["120 hz screen", "Water resistance"],
    },
    {
      name: "MI 9",
      brand: "Xiaomi",
      price: 1300000,
      properties: ["Best price", "Pay less - get more!"],
    },
  ];

  //Метод append

  // const createProductCards = (arr) => {

  //   const productContainer = document.createElement('div');

  //   arr.forEach((products) => {
  //     console.log(products);
      
  //     const productName = document.createElement('h2');
  //     productName.innerText = products.name;

  //     const productBrand = document.createElement('h3');
  //     productBrand.innerText = products.brand;

  //     const list = document.createElement('ul');

  //     products.properties.forEach((item) => {
  //       const listFeatures = document.createElement('li');
  //       listFeatures.innerText = item;

  //       list.append(listFeatures)
  //     })

  //     console.dir(list);
  //     document.body.append(list)

  //     productContainer.append(productName, productBrand, list)
  //   })
    

  //   console.dir(productContainer);
  //   document.body.append(productContainer)
  // }

  // createProductCards(products);

  //Метод innerHTML

  const createProductCards = (arr) => {

    const productsContainer = document.createElement('div');

     arr.forEach((products) => {

      const productContainer = document.createElement('div');

      let html = '';
      html+=`<h2>${products.name}</h2>`;
      html+=`<h3>${products.brand}</h3>`;
      productContainer.innerHTML = html;

      const list = document.createElement('ul');
      
      const listHTML = products.properties 
        .map((item) => `<li>${item}</li>`)
        .join('');

        console.log(listHTML)
        list.innerHTML = listHTML

        productContainer.append(list);
        productsContainer.append(productContainer);
     })

     document.body.append(productsContainer);
  }

  createProductCards(products);
