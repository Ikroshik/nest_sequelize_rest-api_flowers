import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class flowers extends Model {
  @Column
  name: string;

  @Column
  color: string;

  @Column
  price: number;
}