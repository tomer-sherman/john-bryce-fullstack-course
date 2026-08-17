import z from "zod";
import { ClientError } from "./client-error";
import { StatusCode } from "./enums";

// Order Schema:
const OrderSchema = z.object({
    id: z.number().int().positive().optional(),
    customerId: z.string().length(5),
    employeeId: z.number().int().positive(),
    orderDate: z.coerce.date(),
    requiredDate: z.coerce.date(),
    shippedDate: z.coerce.date().optional(),
    freight: z.number().min(0).max(9999.99),
    shipperId: z.number().int().positive(),
    countryId: z.number().int().positive(),
    cityId: z.number().int().positive(),
    address: z.string().min(2).max(60),
    postalCode: z.string().min(2).max(10)
});

// Order Interface (I = Interface):
type IOrderModel = z.infer<typeof OrderSchema>;

// Order Model:
export class OrderModel implements IOrderModel {

    public id: number;
    public customerId: string;
    public employeeId: number;
    public orderDate: Date;
    public requiredDate: Date;
    public shippedDate: Date;
    public freight: number;
    public shipperId: number;
    public countryId: number;
    public cityId: number;
    public address: string;
    public postalCode: string;

    public constructor(order: OrderModel) { // Copy Constructor
        this.id = order.id;
        this.customerId = order.customerId;
        this.employeeId = +order.employeeId;
        this.orderDate = new Date(order.orderDate);
        this.requiredDate = new Date(order.requiredDate);
        this.shippedDate = order.shippedDate ? new Date(order.shippedDate) : order.shippedDate;
        this.freight = +order.freight;
        this.shipperId = +order.shipperId;
        this.countryId = +order.countryId;
        this.cityId = +order.cityId;
        this.address = order.address;
        this.postalCode = order.postalCode;
    }

    public validate(): void {
        const result = OrderSchema.safeParse(this);
        if (!result.success) {
            const message = result.error.issues[0].path + ": " + result.error.issues[0].message;
            throw new ClientError(StatusCode.UnprocessableContent, message);
        }
    }

}
