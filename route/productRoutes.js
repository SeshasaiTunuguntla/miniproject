//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const productApi = require('../apis/productApis')
//fetch all records
router.get("/fetchProduct", productApi.products_all)
//insert a record
router.post("/insertProduct", productApi.insert_product)
//update a record
router.put("/updateProduct", productApi.update_product)
//delete a record
router.delete("/deleteProduct", productApi.delete_product)
//export router
module.exports = router
