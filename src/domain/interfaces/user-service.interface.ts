import { IUser } from "./user.interface";
import { CreateUserDto } from "../dtos/user/create.dto";

export interface IuserService {
    findAll(): Promise<IUser[]>;
    findById(id: number): Promise<IUser>;
    create(UserDto: CreateUserDto): Promise<IUser>;
    update(id: number, UserDto: CreateUserDto): Promise<IUser>;
    delete(id: number): Promise<void>;
}