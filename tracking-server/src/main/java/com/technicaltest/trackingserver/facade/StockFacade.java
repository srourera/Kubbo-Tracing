package com.technicaltest.trackingserver.facade;

import com.technicaltest.trackingserver.dto.StockWarehouseData;
import com.technicaltest.trackingserver.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockFacade {

    @Autowired
    private StockService stockService;

    public List<StockWarehouseData> getByProductId(Long productId) {
        return stockService.getByProductId(productId);
    }
}
