export interface User{
    _id?: string;
    fullname: string;
    username: string;
    email: string;
    country: string;
    age: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
}