const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// User routes
app.use('/api/users', userRoutes);

// Default route for '/'
app.get('/', (req, res) => {
    res.send('Welcome to the User Management System!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
