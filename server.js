
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const e = require('express');
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'products'
});


// Route to fetch all products
app.get('/', (req, res) => {
    return res.json("From Backend Side");
});


app.get('/products', (req, res) => {
    const sql = "SELECT id, name, description, price, image, size FROM products";
    db.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        return res.json(data);
    });
});


app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    const sql = `SELECT id, name, description, price, image, size FROM products.products WHERE id = ${productId}`;
    
    
    db.query(sql, [productId], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (data.length === 0) {
            // Product not found
            return res.status(404).json({ error: 'Product not found' });
        }

        return res.json(data[0]);
    });
});






app.listen(PORT, () => {
    console.log('listening');
});
