package com.technicaltest.trackingserver.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StockData {

    private Long id;

    private Long productId;

    private Long warehouseId;

    private Integer quantity;

    private String status;

}
