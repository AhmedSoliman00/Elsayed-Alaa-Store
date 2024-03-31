const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
    },
    description: {
      type: String,
    },
    count: {
      type: Number,
    },
  },
  { timestamps: true }
);
//ProductSchema.methods.isCorrectPassword=function(password){return bcrypt.compareSync(password,this.password)}
// Method to get the total number of items in a cart
ProductSchema.methods.getTotalItems = function () {
  return this.count;
};
module.exports = mongoose.model("Product", ProductSchema);
