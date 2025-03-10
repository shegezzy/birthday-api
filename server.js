app.post("/birthday", (req, res) => {
    const { name } = req.body;
    
    if (name.toLowerCase() === "sanyaolu") {
        res.render("birthday", { 
            message: "Happy Birthday, Mr. Sanyaolu Adefemi Mathew! 🎂 Wishing you a fantastic day filled with joy and happiness! From the M4Ace Backend Team." 
        });
    } else {
        res.render("birthday", { 
            message: "Oops! Today is not your birthday. 🎈" 
        });
    }
});
