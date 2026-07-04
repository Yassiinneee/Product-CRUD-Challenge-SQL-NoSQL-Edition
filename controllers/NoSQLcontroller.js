const Product = require("../models/Product");

// ===============================
// Create Product
// POST /api/mongo/products
// ===============================
exports.createProduct = async (req, res) => {
    try {
        const { name, price, category, inStock } = req.body;

        if (!name || price === undefined) {
            return res.status(400).json({
                success: false,
                message: "Name and price are required."
            });
        }

        const product = await Product.create({
            name,
            price,
            category,
            inStock
        });

        res.status(201).json({
            success: true,
            message: "Product created successfully.",
            data: product
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// ===============================
// Get All Products
// GET /api/mongo/products
// ===============================
exports.getProducts = async (req, res) => {
    try {

        const products = await Product.find();

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ===============================
// Get Single Product
// GET /api/mongo/products/:id
// ===============================
exports.getProduct = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found."
            });
        }

        res.status(200).json({
            success: true,
            data: product
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ===============================
// Update Product
// PUT /api/mongo/products/:id
// ===============================
exports.updateProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully.",
            data: product
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ===============================
// Delete Product
// DELETE /api/mongo/products/:id
// ===============================
exports.deleteProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found."
            });

        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully."
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};