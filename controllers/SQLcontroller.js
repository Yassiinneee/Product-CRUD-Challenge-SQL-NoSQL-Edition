const pool = require("../config/mysql");

// ===============================
// Create Product
// POST /api/mysql/products
// ===============================
exports.createProduct = async (req, res) => {

    try {

        const {
            name,
            price,
            category,
            inStock = true
        } = req.body;

        if (!name || price === undefined) {
            return res.status(400).json({
                success: false,
                message: "Name and price are required."
            });
        }

        const sql = `
            INSERT INTO products
            (name, price, category, inStock)
            VALUES (?, ?, ?, ?)
        `;

        const [result] = await pool.execute(sql, [
            name,
            price,
            category,
            inStock
        ]);

        const [rows] = await pool.execute(
            "SELECT * FROM products WHERE id = ?",
            [result.insertId]
        );

        res.status(201).json({
            success: true,
            message: "Product created successfully.",
            data: rows[0]
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
// GET /api/mysql/products
// ===============================
exports.getProducts = async (req, res) => {

    try {

        const [rows] = await pool.execute(
            "SELECT * FROM products ORDER BY id DESC"
        );

        res.status(200).json({
            success: true,
            count: rows.length,
            data: rows
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ===============================
// Get One Product
// GET /api/mysql/products/:id
// ===============================
exports.getProduct = async (req, res) => {

    try {

        const [rows] = await pool.execute(
            "SELECT * FROM products WHERE id = ?",
            [req.params.id]
        );

        if (rows.length === 0) {

            return res.status(404).json({
                success: false,
                message: "Product not found."
            });

        }

        res.status(200).json({
            success: true,
            data: rows[0]
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
// PUT /api/mysql/products/:id
// ===============================
exports.updateProduct = async (req, res) => {

    try {

        const {
            name,
            price,
            category,
            inStock
        } = req.body;

        const sql = `
            UPDATE products
            SET
                name = ?,
                price = ?,
                category = ?,
                inStock = ?
            WHERE id = ?
        `;

        const [result] = await pool.execute(sql, [
            name,
            price,
            category,
            inStock,
            req.params.id
        ]);

        if (result.affectedRows === 0) {

            return res.status(404).json({
                success: false,
                message: "Product not found."
            });

        }

        const [rows] = await pool.execute(
            "SELECT * FROM products WHERE id = ?",
            [req.params.id]
        );

        res.status(200).json({
            success: true,
            message: "Product updated successfully.",
            data: rows[0]
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
// DELETE /api/mysql/products/:id
// ===============================
exports.deleteProduct = async (req, res) => {

    try {

        const [result] = await pool.execute(
            "DELETE FROM products WHERE id = ?",
            [req.params.id]
        );

        if (result.affectedRows === 0) {

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