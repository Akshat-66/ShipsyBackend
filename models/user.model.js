import mongoose from "mongoose";
import "./shipment.model.js"; 
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Shipment",
        },
    ]
});


export const User = mongoose.model("User", userSchema);
