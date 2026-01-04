import mongoose from "mongoose";

const collectedItemSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    description: { type: String, required: false },
    locationLost: { type: String, required: true },
    collectFrom: { type: String, required: true },
    imageUrl: { type: String, required: false },
    originalCreatedAt: { type: Date, required: true },
    collectedAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model("CollectedItem", collectedItemSchema);