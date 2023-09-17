import bcrypt from 'bcryptjs'

import User from "../models/userModel.js"

export const login = async (req, res) => {
    const { username, password } = req.body

    try {
        const oldUser = await User.findOne({ username })

        if(!oldUser) return res.status(404).json({ message: "User does not exist" })

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

        if(!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' })

        return res.status(200).json({ result: oldUser })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}

export const createAdmin = async (req, res) => {
    const { username, password } = req.body

    try {
        const oldUser = await User.findOne({ username });
    
        if (oldUser) return res.status(400).json({ message: "User already exists" });
    
        const hashedPassword = await bcrypt.hash(password, 12);
    
        const result = await User.create({ username, password: hashedPassword });
    
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        
        console.log(error);
    }
}
