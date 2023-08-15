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

// Route Parameter (req.params comes as string always)
app.get("/api/products/:productId", (req, res) => {
  console.log(req.params);
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }
  return res.json(singleProduct);
});

app.listen(5000, () => {
  console.log("Server is running");
});
