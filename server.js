const express = require("express");
const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Landing page - asks for name
app.get("/", (req, res) => {
    res.render("index");
});

// Handles name submission and redirects to birthday check page
app.post("/submit", (req, res) => {
    const name = req.body.name.trim();
    res.redirect(`/birthday?name=${encodeURIComponent(name)}`);
});

// Birthday check page
app.get("/birthday", (req, res) => {
    const name = req.query.name.trim();

    if (name.toLowerCase() === "sanyaolu") {
        res.render("birthday", { name: "Mr Sanyaolu Adefemi", isBirthday: true });
    } else {
        res.render("birthday", { name, isBirthday: false });
    }
});

// Define the port (use Render's environment variable or default to 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
