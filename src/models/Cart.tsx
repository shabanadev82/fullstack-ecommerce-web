
import { CartType } from '@/data';
import { Schema, model, models, Document } from 'mongoose';

interface ICart extends CartType, Document { }
const cartSchema: Schema = new Schema({
    userId: { 
        // type: Schema.Types.ObjectId, 
        // ref: 'User', 
        type:String,
        required: true },
            productId: {
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            }
});
const Cart = models?.Cart || model<ICart>('Cart', cartSchema);

export default Cart;
