import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";
import { functions, inngest } from "./inngest/index.js";
import showRouter from "./routes/showRoutes.js";


const app = express();
const port = 3000;

// Connect DB
await connectDB();

// Middleware
app.use(cors());
app.use(clerkMiddleware());
app.use(express.json()); // only for non-Inngest routes

// API Routes
app.get("/", (req, res) => res.send("Server is Live!!"));
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use('/api/show' , showRouter)


// Start server
app.listen(port, () =>
  console.log(`Server Listening at http://localhost:${port}`)
);
