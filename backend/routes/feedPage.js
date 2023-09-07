const { addProduct, getProduct, deleteProduct } = require('../functions/products');

const router = require('express').Router();

router.get('/',(req, res)=>{
    res.send("hello feed page");
})

router.post('/add-product', addProduct)
        .get('/get-product', getProduct)
        .delete('/delete-product/:id', deleteProduct)

module.exports = router