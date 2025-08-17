import express, { Request, Response } from 'express';

import converterResource from '../resources/converterResource';

const router = express.Router();

router.get('/api/v1/welcome', (req: Request, res: Response) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Converter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            margin-top: 100px;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Api Currency Converter</h1>
        <p>Your Api is up and running!</p>
    </div>
</body>
</html>
`);
});
router.post('/api/v1/convert', converterResource);

export = router;
