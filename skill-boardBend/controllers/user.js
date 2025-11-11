import { createUser } from "../models/user.js";

export const createUserController = async(req, res)=>{
    console.log(req.body);
    try {
     const newUser = await createUser(req);
     console.log(newUser)   
    } catch (error) {
        console.log(error);
    }
}