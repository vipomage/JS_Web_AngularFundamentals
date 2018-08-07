export interface CreateFurnitureModel {
    make: string,
    model: string,
    year: number,
    description: string,
    price: number,
    image: string,
    material?: string
}
export class FurnitureModel {
  constructor(
    private id: number,
    private make: string,
    private model: string,
    private year: number,
    private description: string,
    private price: number,
    private image: string,
    private createdBy: string
  ) {}
}
