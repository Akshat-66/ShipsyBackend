import { User } from "../models/user.model.js";
import { Shipment } from "../models/shipment.model.js";

export const getAllOrders = async (req, res) => {
    try {
        const { id } = req.user;
        const user = await User.findById(id).populate("orders");

        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "All orders retrieved successfully", orders: user.orders });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateOrder = async (req, res) => {
  try {
    const { id } = req.user;
    const { orderId } = req.params;

    const user = await User.findById(id);
    if (!user || !user.orders.includes(orderId))
      return res.status(403).json({ message: "Not allowed" });

    const order = await Shipment.findById(orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });

    for (let key in req.body) {
      order[key] = req.body[key];
    }

    await order.save();

    res.status(200).json({ message: "Order updated", order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewOrder = async (req, res) => {
  try {
    const { id } = req.user; 
    const {
      shipmentName,
      status,
      isInternational,
      basePrice,
      weight,
      ratePerKg,
      destination,
    } = req.body;

    const newShipment = new Shipment({
      shipmentName,
      status,
      isInternational,
      basePrice,
      weight,
      ratePerKg,
      destination,
    });

    await newShipment.save();

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.orders.push(newShipment._id);
    await user.save();

    res.status(200).json({ message: "Order created successfully", order: newShipment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
