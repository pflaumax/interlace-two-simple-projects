const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  title: {
    type: String,
    required: true,
  },
  routeName: {
    type: String,
    required: true,
    max: 40,
  },
  brand: {
    type: String,
  },
  items: [
    {
      product_id: {
        type: Schema.Types.ObjectId,
      },
      name: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
      price: {
        type: String,
      },
      inStock: {
        type: Boolean,
        default: true,
      },
    },
  ],
});

module.exports = Product = mongoose.model("product", ProductSchema);
