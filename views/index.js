<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enter Your Name</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #ff758c, #ff7eb3);
            text-align: center;
            padding: 50px;
            color: white;
        }
        .container {
            background: rgba(255, 255, 255, 0.2);
            padding: 20px;
            border-radius: 15px;
            display: inline-block;
        }
        h1 {
            font-size: 2.5rem;
        }
        input {
            padding: 10px;
            font-size: 1.2rem;
            border: none;
            border-radius: 5px;
        }
        button {
            padding: 10px 15px;
            font-size: 1.2rem;
            background-color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: lightgray;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎉 Enter Your Name 🎂</h1>
        <form action="/submit" method="POST">
            <input type="text" name="name" placeholder="Your Name" required>
            <button type="submit">Check Birthday</button>
        </form>
    </div>
</body>
</html>
