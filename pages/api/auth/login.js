import db from '@app/database/db';
import { allowMethod } from '@app/libs/helper';
import bcrypt from 'bcryptjs';

export default async (req, res)=>{
    allowMethod(res,'POST')
    const { user, pass } = req.body;
    const checkUser = await db('users').where({ user }).first();
    if(!checkUser) return res.status(401).end();
    const checkPass = await bcrypt.compare(pass, checkUser.pass);
    if(!checkPass) return res.status(401).end();
    const token = jwt.sign({
        id: checkUser.id,
        user: checkUser.user
    }, 'hillzacky', {
        expiresIn: '7d'
    })
    res.status(200)
    res.json({
        message: "success"
    })
}