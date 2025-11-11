import db from "../config/db.js";

export const createUser = (req, res)=>{
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        throw new Error("Missing mandatory fields");        
    }
    const exist = 'select email from users where email = ?';
    const emailValue = [email];

    return new Promise((resolve, reject) => {
        const [result1] = db.query(exist, emailValue,(err, res)=>{
            if(err){
                throw err;
            }
            resolve(res);
        });
        const [result2] = db.query('insert into users(name, email, password) values(?, ?, ?)',[name, email, password], (err, result)=>{
            if(err){
                throw err;
            }
            resolve(result);
        })
        return (result1, result2);
    })
    // console.log(existUser);
    // if(existUser.length > 0) {
    //     throw new Error("Email already existed");
    // } 
    // return existUser;
}