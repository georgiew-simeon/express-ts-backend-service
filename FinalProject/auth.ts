import { Request, Response, NextFunction } from "express";

// Middleware for Basic Authentication
const basicAuth = (req: Request, res: Response, next: NextFunction) => {
    // Parse the Authorization header
    const authHeader = req.headers["authorization"];

    // Check if Authorization header is present
    if (authHeader) {
        // The authHeader is expected to be "Basic encodedstring"
        const base64Credentials = authHeader.split(' ')[1]; // Split to get the encoded part only
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii'); // Decode the base64 string
        const [username, password] = credentials.split(':'); // Split at the colon to get username and password

        // Check if the credentials match
        if (username === "username" && password === "password") {
            // If credentials are correct, move to the next middleware
            return next();
        }
    }

    // If no authorization header is present, or credentials do not match
    return res.status(401).send("Authentication Required");
};

export default basicAuth;
