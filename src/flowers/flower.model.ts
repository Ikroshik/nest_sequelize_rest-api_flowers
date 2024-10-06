import { Column, Model, Table } from 'sequelize-typescript';
import { InferAttributes } from 'sequelize/types/model';

@Table
export class flowers extends Model<InferAttributes<flowers>> {
  @Column
  name: string;
  
  @Column
  color: string;

  @Column
  price: number;

}