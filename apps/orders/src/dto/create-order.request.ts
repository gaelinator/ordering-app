import { 
    IsNotEmpty,
    IsPositive,
    IsPhoneNumber,
    IsString,
 } from "class-validator";
 import { Prop } from "@nestjs/mongoose";


export class CreateOrderRequest {
    // Add properties for the order details here
    // For example:
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsPositive()
    price: number;

    @IsPhoneNumber()
    phoneNumber: string;
    
    // public customerId: string;
    // public products: string[];
    // public shippingAddress: string;
}
