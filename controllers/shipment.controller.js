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
    console.log("user : " + id);
    console.log("order : " + orderId);

    const user = await User.findById(id);
    if (!user || !user.orders.includes(orderId)) {
      return res.status(403).json({ message: "Not allowed" });
    }

    const order = await Shipment.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const allowedStatuses = ["pending", "shipped", "delivered"]; // replace with your schema enum

    // Update only valid fields
    for (let key in req.body) {
      const value = req.body[key];
      if (value === undefined || value === "") continue; // skip empty values

      if (key === "status") {
        if (!allowedStatuses.includes(value)) {
          return res
            .status(400)
            .json({ message: `Invalid status value: ${value}` });
        }
      }

      order[key] = value;
    }

    await order.save();

    res.status(200).json({ message: "Order updated", order });
  } catch (error) {
    console.error("Update order error:", error);
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


export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.user;
    const { orderId } = req.params;

    console.log("user : " + id);
    console.log("order : " + orderId)

    const user = await User.findById(id);
    if (!user || !user.orders.includes(orderId))
      return res.status(403).json({ message: "Not allowed" });

    const order = await Shipment.findByIdAndDelete(orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });

    user.orders = user.orders.filter((oid) => oid.toString() !== orderId);
    user.save();
    res.status(200).json({ message: "Order deleted successfully", orderId });
  } catch (error) {
    console.error("Error:", error)
    res.status(500).json({ error: error.message })
  }
}