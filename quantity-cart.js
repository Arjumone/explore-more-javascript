const shoppingCart = [
    {name:'shoe',price:1200,quantity:5},
    {name:'shirt',price:1100,quantity:3},
    {name:'pant',price:1000,quantity:2},
    {name:'belt',price:200,quantity:4},
];
  
function totalCost(products){
    let sum = 0;
    for(let i = 0;i<products.length;i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal.price;
        // console.log(product);

    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log(expense);