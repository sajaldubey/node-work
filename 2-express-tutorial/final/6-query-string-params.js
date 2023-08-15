const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send(
    '<h1>Home Page</h1> <p><a href="/api/products">Find More Products</a></p>'
  );
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name } = product;
    return { id, name };
  });
  res.json(newProducts);
});

// Query Parameter - req.query - returns a string
app.get("/api/v1/query", (req, res) => {
  let sortedProducts = [...products];
  const { search, limit } = req.query;
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is running");
});
