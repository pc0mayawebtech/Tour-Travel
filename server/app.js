import express from 'express';
import connectDB from './db/connection.js';
import cors from 'cors';
import router from './routes/router.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
await connectDB();

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});