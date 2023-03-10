import bcrypt from "bcryptjs";

export const enc_use= async (password)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt);
}