import { ProductType } from '@/data';
import { Schema, model, models, Document } from 'mongoose';

interface IProduct extends ProductType, Document {}

const productSchema: Schema = new Schema({
    availabilityStatus: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    discountPercentage: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    minimumOrderQuantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: false
    },
    returnPolicy: {
        type: String,
        required: false
    },
    reviews: [
        {
            comment: {
                type: String,
                required: false
            },
            date: {
                type: String,
                required: false
            },
            rating: {
                type: Number,
                required: false
            },
            reviewerEmail: {
                type: String,
                required: false
            },
            reviewerName: {
                type: String,
                required: false
            }
        }
    ],
    shippingInformation: {
        type: String,
        required: false
    },
    sku: {
        type: String,
        required: false
    },
    stock: {
        type: Number,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    warrantyInformation: {
        type: String,
        required: true
    }
});

const Product = models?.Product || model<IProduct>('Product', productSchema);

export default Product;
