const express = require('express');
const apiRoutes = require('./routes/api');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
