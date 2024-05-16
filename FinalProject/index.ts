import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import bodyParser from "body-parser";
import cors from "cors";
import basicAuth from "./auth";
import eventRoutes from "./routes/eventRoutes";
import betRoutes from "./routes/betRoutes";
import { logErrors } from "./utils/logger";
import { MESSAGES, STATUS_CODES } from "./utils/constants";

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
    res.json({ message: MESSAGES.API_WORKS });
});

// 404 Handler
app.use((req: Request, res: Response) => {
    res.status(STATUS_CODES.NOT_FOUND).json({ error: "Route not found" });
});

// Error Handling
app.use(logErrors);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).send({
        errors: [{ message: err.message || "Something went wrong" }]
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
