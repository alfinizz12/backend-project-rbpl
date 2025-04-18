const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Ini route buat task nanti")
});

module.exports = router;