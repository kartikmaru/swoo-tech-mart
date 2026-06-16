const cartRouter = require("express").Router();

const { syncCart, addToCart, updateCartItem, removeCartItem, clearCart } = require("../controller/CartController.js");
const { protect } = require("../middleware/auth");

cartRouter.post("/sync",        protect, syncCart);
cartRouter.post("/add_to_cart", protect, addToCart);
cartRouter.put("/update",       protect, updateCartItem);   // qty change
cartRouter.delete("/remove",    protect, removeCartItem);   // item remove
cartRouter.delete("/clear",     protect, clearCart);        // clear all items

module.exports = cartRouter;