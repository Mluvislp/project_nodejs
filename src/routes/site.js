import express from "express";
import { SiteController } from "../resources/app/controllers/SiteController.js";

var router = express.Router();

var siteController = new SiteController();

router.get("/", siteController.homePage);

export { router };
