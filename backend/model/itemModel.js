import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    description: { type: String, required: false },
    locationLost: { type: String, required: true },
    collectFrom: { type: String, required: true },
    imageUrl: { type: String, required: false },
}, { timestamps: true });

export default mongoose.model("Item", itemSchema);