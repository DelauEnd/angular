import { Dimensions, Person } from "../sharedInterface";

export interface OrderForCreationDto{
    senderId: number;
    destinationId: number;
    cargoes: CargoForCreationDto[]
}

export interface CargoForCreationDto{
    title: string;
    categoryId: number;
    departureDate: Date;
    arrivalDate: Date;
    weight: number;
    dimensions: Dimensions;
    image: number[];
}

export interface CustomerForCreationDto{
    address: string;
    contactPerson: Person;
}