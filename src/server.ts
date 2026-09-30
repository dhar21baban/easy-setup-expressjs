import  express,{ Request,Response } from "express";
import dotenv from 'dotenv'
import helmet from "helmet";
import cors from 'cors'
import morgan from 'morgan';
import rootRouter from "./routes";
import path from "path";

dotenv.config();

// settimezone
process.env.TZ = 'UTC';

const app=express();
const APP_PORT=process.env.APP_PORT

console.log(APP_PORT);

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

app.use(express.static(path.join(__dirname, "../public")));

// Apply security headers
app.use(helmet())

// Enable CORS for all routes and origins
const corsOptions = {
  origin: 'https://myfrontend.com', // Only allow this domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow cookies/authorization headers
};
app.use(cors(corsOptions));

// Use predefined 'dev' format
app.use(morgan('dev'));

// MUST BE ADDED BEFORE YOUR ROUTES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // Start the BullMQ Email Worker process
// startAllWorkers();

// ============



// 5. System Health Check Route
app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({
      status: 'OK',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    });
  });


  // routes setup

  app.use(rootRouter)

  app.listen(APP_PORT,()=>{
    console.log(`🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${APP_PORT}`);
  })


