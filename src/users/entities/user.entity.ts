import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')

export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    username: string;

    @Column({ nullable: true })
    displayName: string;
}