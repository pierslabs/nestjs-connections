import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pgoal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'bool', default: true })
  frequency: boolean;

  @Column({ type: 'text', array: true, default: ['low'] })
  priority: string[];
}
