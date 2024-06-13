const mongoose  = require("mongoose")
const productSchema = new mongoose.Schema({
    p_img:String,
    p_name:String,
    p_desc:String,
    p_cost:Number,
    p_cat:String,
    p_id:Number
})

module.exports = mongoose.model("Product",productSchema)