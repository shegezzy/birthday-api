const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.post("/birthday", (req, res) => {
    const name = req.body.name.trim().toLowerCase(); // Normalize input

    if (name === "sanyaolu") {
        res.render("birthday", { 
            message: "Happy Birthday, Mr. Sanyaolu Adefemi Mathew! 🎂",
            subtext: "Wishing you a fantastic day filled with joy and happiness! From the M4Ace Backend Team.",
            showConfetti: true 
        });
    } else {
        res.render("birthday", { 
            message: "Oops! Today is not your birthday 😢",
            subtext: "Check back on your special day!", // Ensure `subtext` exists
            showConfetti: false 
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
