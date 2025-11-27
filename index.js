import express, { Router } from "express";
import dotenv from "dotenv";
import test_router from "./routes/test.route.js";
import user_router from "./routes/user.route.js";
import dbInstance from "./config/database.js";
dotenv.config();
dbInstance.connect(process.env.MONGODB_URL)

const app = express();

const apiV1 = Router()

apiV1.use("/test", test_router)
apiV1.use("/user", user_router)

app.use("/api/v1", apiV1)

app.listen(8000, () => {
	console.log("http://localhost:8000");
    console.log("Server is running on port 8000");
});