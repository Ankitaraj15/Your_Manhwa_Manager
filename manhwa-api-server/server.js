require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const manhwaRoutes = require('./routes/manhwaRoutes');
const swaggerDocs = require('./swagger');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Root route to avoid "Cannot GET /"
app.get('/', (req, res) => {
  res.send('🎉 Manhwa API is running! Visit /api-docs for Swagger documentation.');
});

// Routes
app.use('/api/manhwas', manhwaRoutes);

// Swagger
swaggerDocs(app);

// Export app for testing
module.exports = app;

// Start server if this file is run directly
if (require.main === module) {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));
    })
    .catch((err) => console.log(err));
}