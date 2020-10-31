import { Warehouse } from './warehouse.model';

export interface Stock {
    id: number;
    productId: number;
    warehouseData: Warehouse;
    quantity: number;
    status: string;
}