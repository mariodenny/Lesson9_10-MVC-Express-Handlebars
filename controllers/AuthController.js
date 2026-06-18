import User from "../models/UserModel.js";

export const registerPage = (req,res) =>{
    if(req.session.user){
        return res.redirect('/auth/dashboard')
    }
    res.render('auth/register',{
        title : 'Register',
        error: req.session.error || null,
        success : req.session.success || null
    })
}