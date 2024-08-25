const express = require('express');
const router = express.Router();

// Helper function to process data
const processData = (data) => {
    const numbers = [];
    const alphabets = [];
    let highest_lowercase_alphabet = '';

    data.forEach(item => {
        if (/^\d+$/.test(item)) {
            numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
            if (item === item.toLowerCase() && item > highest_lowercase_alphabet) {
                highest_lowercase_alphabet = item;
            }
        }
    });

    return {
        numbers,
        alphabets,
        highest_lowercase_alphabet: highest_lowercase_alphabet ? [highest_lowercase_alphabet] : []
    };
};

// POST Route
router.post('/', (req, res) => {
    try {
        const { data } = req.body;  // Destructure data from the request body

        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, error: 'Data should be an array.' });
        }

        const { numbers, alphabets, highest_lowercase_alphabet } = processData(data);

        const response = {
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            numbers,
            alphabets,
            highest_lowercase_alphabet
        };

        res.json(response);
    } catch (error) {
        res.status(400).json({ is_success: false, error: error.message });
    }
});


// GET Route
router.get('/', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

module.exports = router;
