import { Person } from "./sharedInterface";

export interface OrderDto{
    id: number;
    status: string;
    sender: string;
    destination: string;
}

export interface CustomerDto{
    id: number;
    address: string;
    contactPerson: Person;
}