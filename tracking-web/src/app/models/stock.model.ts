import { Warehouse } from './warehouse.model';

export interface Stock {
    id: number;
    productId: number;
    warehouse: Warehouse;
    quantity: number;
    status: string;
}