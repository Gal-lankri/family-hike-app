import express from 'express';
import router from './routes/hikesRoutes.js'; // Adjust the path as necessary
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;
console.log(`Server is running on port ${PORT}`);
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use('/api/hikes', router);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
