import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common'; // Importing AbstractDocument from common-lib

@Schema({versionKey: false})
export class Order extends AbstractDocument  {
    // Implementing Order interface
    @Prop()
    orderId: string;

    @Prop()
    name: string;

    @Prop()
    customerName: string;

    @Prop()
    totalAmount: number;

    @Prop()
    createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
