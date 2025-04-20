import express from 'express';
const router = express.Router();

router.get('/detail/:id', (req, res) => {
    res.json({
        "board_id": req.params.id
    })
})

router.post('/create', (req, res) => {
    const {board_name, owner} = req.body;
    res.status(201).json({
        "board": board_name,
        "owner": owner
    });
})

export default router;