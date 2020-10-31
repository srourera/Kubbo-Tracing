package com.technicaltest.trackingserver.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StockWarehouseData {

    private Long id;

    private Long productId;

    private WarehouseData warehouse;

    private Integer quantity;

    private String status;

    public StockWarehouseData(StockData stockData, WarehouseData warehouseData) {
        this.id= stockData.getId();
        this.quantity = stockData.getQuantity();
        this.status = stockData.getStatus();
        this.productId = stockData.getProductId();
        this.warehouse = warehouseData;
    }
}
