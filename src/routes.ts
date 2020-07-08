import express from "express";

import CalculateController from "./controllers/CalculateController";

const routes = express.Router();

const calculateController = new CalculateController();

routes.get("/", calculateController.index);

export default routes;
