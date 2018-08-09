import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CreateFurnitureModel, FurnitureModel } from "./models";

const createUrl = "http://localhost:5000/furniture/create";
const allUrl = "http://localhost:5000/furniture/all";
const detailsUrl = "http://localhost:5000/furniture/details";
const myFurnitureUrl = "http://localhost:5000/furniture/mine";
const deleteUrl = "http://localhost:5000/furniture/delete";
const furnitureById = "http://localhsot:5000/furniture/";
const editFurniture = "http://localhost:5000/furniture/edit";

@Injectable()
export class FurnitureService {
  constructor(private http: HttpClient) {}

  createFurniture = (body: CreateFurnitureModel) =>
    this.http.post(createUrl, body);

  getAllFurniture = () =>
    this.http.get<FurnitureModel[]>(allUrl);

  getFurnitureDetails = (id: string) =>
    this.http.get<FurnitureModel>(`${detailsUrl}/${id}`);

  getMyFurniture = () =>
    this.http.get<FurnitureModel[]>(myFurnitureUrl);

  deleteFurniture = (id: string) =>
    this.http.delete(`${deleteUrl}/${id}`);

  getFurnitureById = (id: string) =>
    this.http.get<FurnitureModel>(furnitureById + id);

  editFurniture = (id: string, body: FurnitureModel) =>
    this.http.put(editFurniture + id, body);
}
