import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('testings')
export class Testing {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  testing: string;
}