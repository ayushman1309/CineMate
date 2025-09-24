import express from "express"

import cors from "cors"

import "dotenv/config"
import connectDB from "./config/db.js";
import { serve } from "inngest/express"
import { clerkMiddleware } from '@clerk/express'
import { functions, inngest } from "./inngest/index.js";

const app = express();
const port = 3000;


await connectDB()
//middleWare

app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())


//API ROUTE
app.get('/' , (req , res) => res.send("Server is Live!!"))
app.use('/api/inngest' , ser({ client : inngest , functions}))

app.listen(port , () => console.log(`Server Listening at http://localhost:${port}`)
);