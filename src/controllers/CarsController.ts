import { Request, Response } from "express";
import { CarsServices } from "../services/CarsServices";

export class CarsController {
  private carsServices = new CarsServices();

  public create = async (req: Request, res: Response) => {
    const response = await this.carsServices.create(req.body);
    return res.status(201).json(response);
  };

  public getMany = async (_: Request, res: Response) => {
    const response = await this.carsServices.findMany();
    return res.status(200).json(response);
  };

  public getById = async (req: Request, res: Response) => {
    const carId = String(req.params.id);
    const response = await this.carsServices.findById(carId);

    return res.status(200).json(response);
  };

  public update = async (req: Request, res: Response) => {
    const carId = String(req.params.id);
    const body = req.body;
    const response = await this.carsServices.update(carId, body);

    return res.status(200).json(response);
  };

  public delete = async (req: Request, res: Response) => {
    const carId = String(req.params.id);

    await this.carsServices.delete(carId);

    return res.status(204).json();
  };
}
