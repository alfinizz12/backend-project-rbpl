import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({
            where: {
                email: email,
            }
        });
        if(!user) return res.json({ msg: "User not found"})

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.json({ msg: "Wrong password" });

        // payload
        const username = user.username;
        const userEmail = user.email;
        const userRole = user.role;

        const accessToken = jwt.sign(
            { username, userEmail, userRole }, 
            process.env.ACCESS_TOKEN_SECRET, 
            { expiresIn: '30s'}
        )

        const refreshToken = jwt.sign(
            { username, userEmail, userRole }, 
            process.env.REFRESH_TOKEN, 
            { expiresIn: '1d'}
        )

        await User.update({ refreshToken: refreshToken}, {
            where: { email: userEmail}
        });

        res.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 3600 * 1000
        })

        return res.status(201).json({accessToken});

    } catch(err){
        res.status(500).json({msg: err});
    }
};