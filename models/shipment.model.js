import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema(
  {
    shipmentName: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In Transit", "Delivered", "Cancelled"],
      default: "Pending",
    },
    isInternational: {
      type: Boolean,
      default: false,
    },
    basePrice: {
      type: Number,
      required: true,
      min: 0,
    },
    weight: {
      type: Number,
      required: true,
      min: 0,
    },
    ratePerKg: {
      type: Number,
      required: true,
      min: 0,
    },
    destination: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, 
  }
);

export const Shipment = mongoose.model("Shipment", shipmentSchema);
