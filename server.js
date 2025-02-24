require('dotenv').config();

process.env.ATLAS_URI = "mongodb+srv://Teddy:Teddy@nodejs.xkiuw.mongodb.net/?retryWrites=true&w=majority&appName=NODEJS";
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');

    const uri = process.env.ATLAS_URI;

    (async () => {
        try {
            await mongoose.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            const connection = mongoose.connection;
            connection.once('open', () => {
                console.log('MongoDB database connection established successfully');
            });

            const app = express();
            const port = process.env.PORT || 5000;

            app.use(cors());
            app.use(express.json());

            app.get('/', (req, res) => {
                res.send('MERN app is running');
            });

            app.listen(port, () => {
                console.log(`Server is running on port: ${port}`);
            });
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    })();