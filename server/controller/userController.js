import User from '../models/userSchema.js';

export const userSignUp = async (req, res) => {
    try {

        const user = req.body;

        const exist = await User.findOne({ username: user.username });
        if(exist) {
            return res.status(401).json({message: 'Username is already taken'});
        }

        const newUser = new User(user);
        await newUser.save();

        res.status(200).json({message: user});
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
};

export const userLogin = async (req, res) => {
    try {

        const user = req.body;

        const data = await User.findOne({ username: user.username, password: user.password });
        if(data) {
            return res.status(200).json({data});
        }
        else {
            return res.status(401).json('Invalid username or password!');
        }
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
};