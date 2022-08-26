const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function (req, res) {
    let orderDetails = req.body
    let userId = orderDetails.userId

    let user = await userModel.findById(userId)
    if (!user) {
        return res.send({ status: false, message: "user doesnt exist" })
    }

    let productId = orderDetails.productId
    let product = await productModel.findById(productId)
    if (!product) {
        return res.send({ status: false, message: "product doesnt exist" })
    }

    //Scenario 1 
    if (!req.appTypeFree && user.balance >= product.price) {
        user.balance = user.balance - product.price
        await user.save()

        orderDetails.amount = product.price
        orderDetails.isFreeAppUser = false
        let orderCreated = await orderModel.create(orderDetails)
        return res.send({ status: true, data: orderCreated })
    } else if (!req.appTypeFree) {
        //Scenario 2 
        return res.send({ status: false, message: "User deosnt have sufficient balance" })
    } else {
        //Scenario 3 
        orderDetails.amount = 0
        orderDetails.isFreeAppUser = true
        let orderCreated = await orderModel.create(orderDetails)
        res.send({ status: true, data: orderCreated })
    }
}

module.exports.createOrder = createOrder
