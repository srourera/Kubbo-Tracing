package com.technicaltest.trackingserver.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StockWarehouseData {

    private Long id;

    private Long productId;

    private WarehouseData warehouseData;

    private Integer quantity;

    private String status;

}
