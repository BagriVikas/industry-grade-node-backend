import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jwt';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    }

}, {timestamps: true});

// 'HOOK' provided by MONGO_DB
// set PASSWARD to a HASHED_PASSWORD using BCRYPT
// just BEFORE (PRE) saving USER entity in DB
userSchema.pre("save", async function (next) {

    if (this.isModified("password")) {
        this.password = bcrypt.hash(this.password, 10);
    }
    next();

});

// add method to check password provided is valid or not
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// add method to generate ACCESS TOKEN for a user
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRY
        }
    );
}

export const User = mongoose.model("User", userSchema);

// add method to generate REFRESH TOKEN for a user
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this.id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
}
