import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    category: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

const Product = mongoose.model('Product', productSchema);

export default Product;