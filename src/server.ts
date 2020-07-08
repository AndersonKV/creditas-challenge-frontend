import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

const app = express();

//set template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("./public"));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000);
