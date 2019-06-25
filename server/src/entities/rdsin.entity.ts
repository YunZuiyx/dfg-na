import { Entity, Column,  PrimaryColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Inventory } from './inventory.entity';
// import { SupperEntity } from '../base';

@Entity('dfg_na_rdsins')
export class RdsIn{
  @PrimaryColumn()
  id:number;
  @Column()
  rdate:Date;
  @Column()
  cinvcode:string;
  @Column()
  qty:number;
  @Column()
  unitcost:number
  @ManyToOne(type=>Inventory)
  @JoinColumn({ name: 'cinvcode', referencedColumnName: 'cinvcode' })
  inv:Inventory;
  @Column()
  rn:number
}