import { Dimensions, Person } from "./sharedInterface";

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

export interface CargoDto{
    id: number;
    title: string;
    category: string;
    departureDate: Date;
    arrivalDate: Date;
    weight: number;
    dimensions: Dimensions;
    image: number[];
}

export interface CargoCategoryDto{
    id: number;
    title: string;
}