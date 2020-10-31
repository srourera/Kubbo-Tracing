import { Warehouse } from './warehouse.model';

export interface Stock {
    id: number;
    productId: number;
    warehouseId: number;
    warehouse: Warehouse;
    quantity: number;
    status: string;
}