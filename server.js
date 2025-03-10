const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index'); // Homepage where user enters name
});

app.get('/birthday', (req, res) => {
    const { name } = req.query;

    if (name && name.toLowerCase() === "sanyaolu") {
        res.render('birthday', { isBirthday: true });
    } else {
        res.render('birthday', { isBirthday: false });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🎂 Server running on http://localhost:${PORT}`));
