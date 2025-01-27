import mongoose, { Schema, model, models, Document } from 'mongoose';
import { RegisterProps } from '@/data';

interface IUser extends RegisterProps, Document {}

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "User"
    },
    password_reset_token:{
        type:String,
        required:false,
        trim:true,
    }
}, { timestamps: true });

const User = models?.User || model<IUser>('User', userSchema);

export default User;
