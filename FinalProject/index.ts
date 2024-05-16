import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import bodyParser from "body-parser";
import cors from "cors";
import basicAuth from "./auth";
import eventRoutes from "./routes/eventRoutes";
import betRoutes from "./routes/betRoutes";
import { logErrors } from "./middlewares/logger";

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(basicAuth);

// Routes
app.use("/events", eventRoutes);
app.use("/bets", betRoutes);
app.get('/test', (req: Request, res: Response) => {
    res.json({ message: 'API works' });
});

// 404 Handler
app.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Route not found" });
});

// Error Handling
app.use(logErrors);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).send({
        errors: [{ message: err.message || "Something went wrong" }]
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
