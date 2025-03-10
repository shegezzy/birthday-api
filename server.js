const express = require("express");
const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Define a GET route for birthday wishes
app.get("/birthday", (req, res) => {
    const name = req.query.name;

    if (name === "Sanyaolu") {
        res.render("birthday", { name, isBirthday: true });
    } else {
        res.render("birthday", { name, isBirthday: false });
    }
});

// Define the port (use Render's environment variable or default to 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
