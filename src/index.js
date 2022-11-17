import morgan from "morgan";
import express from "express";
import path, { join, dirname } from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import { route } from "./routes/index.js";
//
import { connect } from "./resources/config/db/index.js";
const app = express();
const port = 3000;

//DB
connect();
//define dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname);
//check static file
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));
//termplate engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", join(__dirname, "resources" , "views"));

route(app);

app.listen(port);
