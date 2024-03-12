import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  otpCode: number;

  @Column()
  isActive: boolean;

  @Column({default:'client'})
  role: string;

  @Column({default: null})
  logo: string;
}