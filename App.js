import express from 'express'
import Lab5 from "./Lab5.js";
import CourseRoutes from "./src/Kanbas/courses/routes.js";
import ModuleRoutes from "./src/Kanbas/modules/routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
app.listen(process.env.PORT || 4000);
