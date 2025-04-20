import User from '../models/user.js';

export const getUser = async(req, res) => {
    try {
        const result = await User.findAll();
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: "Terjadi kesalahan"})
    }
}