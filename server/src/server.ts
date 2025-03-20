import { Request, Response } from 'express';
import app from './app';

const PORT = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    res.json('Hello');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
