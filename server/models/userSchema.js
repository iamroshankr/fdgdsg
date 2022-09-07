import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    lname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

export default User;