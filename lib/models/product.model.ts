import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;