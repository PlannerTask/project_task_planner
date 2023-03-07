import { ReactNode } from "react";

export interface IUser {
    email: string;
    password: string;
    id?: number;
    name?: string;
    img?: string;
}

export interface IUserProviderProps{
    children: React.ReactNode;
}

export interface IUserContext{
    user: IUser|null;
    loginUser: (data: IUser) => Promise<void>;
    registerUser: (data: IUser) => Promise<void>;
    logout: () => void;
    
}