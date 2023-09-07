const ProductSchema = require("../models/productModel.js")

/** Allows the user to add products to the data base */
exports.addProduct = async (req, res) => {
    // console.log(req.body);

    const {name, price, description} = req.body; //destructure the req.body

    const product = ProductSchema({
        name,
        price,
        description,
    })

    try{
        //validations
        if(!name || !price || !description ){
            return res.status(400).json({message: 'There must be a valid input and all fields are required'});
        }
        if(price <= 0 || !price === 'number' ){
            return res.status(400).json({message: 'amount must be a positive number'});
        }
        await product.save() //saving input to the database
        res.status(200).json({message: 'Product added'})
    } catch (error) {
        res.status(500).json({message: 'Server error', error})
    }

    console.log(product);
}

/** gets product entries from the database to be displayed in the front end */
exports.getProduct = async (req, res) => {
    try{
        const product = await ProductSchema.find().sort({createdAt: -1})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: 'Server error', error})
    }
}

/** Allows the user to delete the products from the database */
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    ProductSchema.findByIdAndDelete(id)
        .then((product) => {
            res.status(200).json({message: 'Product Deleted'})
        })
        .catch((error) => {
            res.status(500).json({message: 'Server error', error})
        })
}