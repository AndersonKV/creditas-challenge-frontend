import { Request, Response } from "express";

class CalculateController {
  async index(request: Request, response: Response) {
    response.render("index");
  }
}

export default CalculateController;
