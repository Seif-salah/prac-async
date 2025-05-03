module.exports = (template, product) => {
  let output = template;

  output = output.replace(/{{name}}/g, product.name);
  output = output.replace(/{{price}}/g, product.price);
  output = output.replace(/{{description}}/g, product.description);
  output = output.replace(/{{image}}/g, product.image);

  return output;
};

