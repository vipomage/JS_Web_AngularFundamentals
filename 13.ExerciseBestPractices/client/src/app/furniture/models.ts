export interface CreateFurnitureModel {
  make: string;
  model: string;
  year: number;
  description: string;
  price: number;
  image: string;
  material?: string;
}
export class FurnitureModel {
  constructor(
    public id: string,
    public make: string,
    public model: string,
    public year: number,
    public description: string,
    public price: number,
    public image: string,
    public createdBy: string
  ) {}
}
