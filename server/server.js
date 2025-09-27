import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";
import { functions, inngest } from "./inngest/index.js";
import showRouter from "./routes/showRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import userRouter from "./routes/userRoutes.js";
import { stripeWebhooks } from "./controllers/stripeWebhooks.js";


const app = express();
const port = 3000;

// Connect DB
await connectDB();

//stripe webhook route
app.use('/api/stripe' , express.raw({type:'application/json'}) , stripeWebhooks)


// Middleware
app.use(cors());
app.use(clerkMiddleware());
app.use(express.json()); // only for non-Inngest routes

// API Routes
app.get("/", (req, res) => res.send("Server is Live!!"));
app.use("/api/inngest", serve({ client: inngest, functions }));

app.use('/api/show' , showRouter)
app.use('/api/booking' , bookingRouter)
app.use('/api/admin' , adminRouter)
app.use('/api/user' , userRouter);

// Start server
app.listen(port, () =>
  console.log(`Server Listening at http://localhost:${port}`)
);