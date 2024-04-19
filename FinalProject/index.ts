import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import bodyParser from "body-parser";
import cors from "cors";
import basicAuth from "./auth";
import betRoutes from "./routes/routes";

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(basicAuth);

// Routes
app.use("/bets", betRoutes);
app.get('/test', (req: Request, res: Response) => {
    res.json({ message: 'API works' })
});

app.use((req: Request, res: Response) => {
    console.log("passed from here");
    res.json({ something: "meaningful" });
});

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).send({ errors: [{ message: "Something went wrong" }] });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
