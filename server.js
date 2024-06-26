const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
    user: 'yourusername',
    host: 'localhost',
    database: 'yourdatabase',
    password: 'yourpassword',
    port: 5432,
});

app.use(express.static('public'));

app.get('/getData', (req, res) => {
    const filter = req.query.filter;

    let query = '';

    if (filter === 'filter1') {
        query = 'SELECT * FROM your_table WHERE condition1';
    } else if (filter === 'filter2') {
        query = 'SELECT * FROM your_table WHERE condition2';
    } else if (filter === 'filter3') {
        query = 'SELECT * FROM your_table WHERE condition3';
    }

    pool.query(query, (error, results) => {
        if (error) {
            throw error;
        }
        const labels = results.rows.map(row => row.label_column);
        const values = results.rows.map(row => row.value_column);
        res.json({ labels, values });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
