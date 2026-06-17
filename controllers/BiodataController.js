export const indexPage = (req,res) =>{
    res.render("index", {
        username : "mariodenny",
        message : "This message is passed from controller!"
    })
}

export const aboutPage = (req, res) =>{
    res.render("about", {
        message : "This about also come from controller!"
    })
}
