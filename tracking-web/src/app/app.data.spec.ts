import { Product } from './models/product.model';
import { Stock } from './models/stock.model';
import { Warehouse } from './models/warehouse.model';

/* PRODUCT */
export const emptyProduct: Product = {} as Product;
export const fullProduct: Product = {
    id: 1,
    name: "name",
    sku: "sku",
    barcode: "barcode",
    image: 1,
    enabled: true,
    price: "35.50"
} as Product;
export const productWithImage: Product = {
    id: 1,
    image: 1,
    imageFile: {} as File
} as Product;

/* WAREHOUSE */
export const emptyWarehouse: Warehouse = {} as Warehouse;
export const fullWarehouse: Warehouse = {
    id: 1,
    name: "name",
    city: "city"
} as Warehouse;

/* STOCK */
export const emptyStock: Stock = {} as Stock;
export const fullStock: Stock = {
    id: 1,
    productId: 1,
    warehouseId: 1,
    warehouse: fullWarehouse,
    quantity: 1,
    status: "AVAILABLE"
} as Stock;


/* PRODUCTS LIST */
export const emptyProductList: Product[] = [];
export const productList: Product[] = [ clone(fullProduct),clone(fullProduct),clone(fullProduct) ];

/* WAREHOUSE LIST */
export const emptyWarehouseList: Warehouse[] = [];
export const warehouseList: Warehouse[] = [ clone(fullWarehouse),clone(fullWarehouse),clone(fullWarehouse) ];

/* STOCK LIST */
export const emptyStockList: Stock[] = [];
export const stockList: Stock[] = [ clone(fullStock),clone(fullStock),clone(fullStock) ];

/* EVENTS */
export const sliderToggleEventTrue = {checked: true};
export const sliderToggleEventFalse = {checked: false};
export const simpleEvent = {stopPropagation:()=>{}} as Event;
export const inputFileEvent = {
    target: {
        files: [
            {

            } as File
        ]
    }
} 

/* DIALOG */
export const fakeProductDialog = {
    componentInstance: {
        save: {
            subscribe: (a)=>{a(clone(fullProduct))}
        },
        closeDialog: ()=>{}
    }
}
export const fakeProductDialogWithImageFile = {
    componentInstance: {
        save: {
            subscribe: (a)=>{
                const p = clone(fullProduct);
                p.imageFile = {} as File;
                a(p);
            }
        },
        closeDialog: ()=>{}
    }
}
export const fakeStockDialog = {
    componentInstance: {
        save: {
            subscribe: (a)=>{a(clone(fullStock))}
        },
        closeDialog: ()=>{}
    }
}

/* CLONE */
export function clone(obj){
    return Object.assign({},obj);
}