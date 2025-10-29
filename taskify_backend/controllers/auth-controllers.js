import User from "../models/user.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {

    try{

        const {name, email, password } = req.body;
        const existingUser = await User.findOne({ email});

        if(existingUser){
            return res.status(400).json({ message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ ...req.body, password: hashedPassword });

        res.status(201).json({ message: "Verification Email Has Been Sent To Your Account, Please Check!", user });

        //To do 
        //Send verification email logic here
    }
    catch(err){
        console.error(err);
        res.status(500).json({message: "Server Error"});
    }
};


const loginUser = async (req, res) =>{
    try{
 
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("+password");

        if(!user){
            return res.status(400).json({ message: "Invalid email or password"});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(400).json({ message: "Invalid email or password"});
        }
        res.status(200).json({ message: "Login Successful", user});
    }
    catch(err){
        console.error(err);
        res.status(500).json({message: "Server Error"});
    }
};



export {

    registerUser,
    loginUser,
};