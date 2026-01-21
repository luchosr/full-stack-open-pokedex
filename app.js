import express from 'express';
import console from 'console';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5001;

app.use(express.static('dist'));

// SPA fallback - serve index.html for all routes not matching static files
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
