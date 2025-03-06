const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors()); // Enable CORS if accessing from another origin
app.use(express.json()); // Middleware to parse JSON bodies

const data = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "Johndoe@gmail.com",
        "mobile": "123456"
    },
    {
        "id": 2,
        "name": "jhonny",
        "email": "Jhonnny@gmail.com",
        "mobile": "123453"
    },
    {
        "id": 3,
        "name": "saa",
        "email": "saa@gmail.com",
        "mobile": "3333333"
    },
    {
        "id": 4,
        "name": "qaq",
        "email": "qaq@gmail.com",
        "mobile": "111111"
    },
    {
        "id": 5,
        "name": "abc",
        "email": "abc@gmail.com",
        "mobile": "125566"
    }
];

app.get('/', (req, res) => {
    res.json(data);
});

app.post('/', (req, res) => {
    const newData = req.body;
    newData.id = data.length + 1; // Assign a new ID
    data.push(newData);
    res.status(201).json(newData);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
