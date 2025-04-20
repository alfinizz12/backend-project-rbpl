import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Ini route buat task nanti")
});

export default router;