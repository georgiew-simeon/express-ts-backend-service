interface Product {
  name: string;
  price: number;
}

interface Products {
  [category: string]: Product[];
}

const products: Products = {
  books: [
    { name: "The Great Gatsby", price: 10 },
    { name: "Moby Dick", price: 15 },
  ],
  movies: [
    { name: "Inception", price: 20 },
    { name: "The Matrix", price: 18 },
  ],
  electronics: [
    { name: "iPhone", price: 999 },
    { name: "Samsung Galaxy", price: 899 },
  ],
  cars: [
    { name: "Tesla Model S", price: 75000 },
    { name: "Ford Mustang", price: 30000 },
  ],
};

function printCategoryProducts(products: Products, category: string) {
  if (products.hasOwnProperty(category)) {
    console.log(`Category: ${category}`);

    products[category].forEach((product, index) => {
      console.log(
        `  Product ${index + 1}: ${product.name}, Price: $${product.price}`
      );
    });
  } else {
    console.log(`Category "${category}" not found.`);
  }
}
printCategoryProducts(products, "electronics");
printCategoryProducts(products, "aerodynamics");

