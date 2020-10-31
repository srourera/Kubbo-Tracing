package com.technicaltest.trackingserver.service;

import com.technicaltest.trackingserver.clients.StocksClient;
import com.technicaltest.trackingserver.dto.StockData;
import com.technicaltest.trackingserver.dto.StockWarehouseData;
import com.technicaltest.trackingserver.dto.WarehouseData;
import com.technicaltest.trackingserver.utils.StockUtils;
import com.technicaltest.trackingserver.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StockService {

    @Autowired
    private StockUtils stockUtils;

    @Autowired
    private StocksClient stocksClient;

    @Autowired
    private WarehouseService warehouseService;

    public List<StockWarehouseData> getByProductId(Long productId) {
        List<StockData> stockDataList = stocksClient.getStockByProductId(productId).getBody();

        if(!Utils.notEmpty(stockDataList)) {
            return new ArrayList<>();
        }

        List<Long> warehouseIds = stockUtils.getWarehouseIds(stockDataList);

        List<WarehouseData> warehouseDataList = warehouseService.getWarehousesByList(warehouseIds);

        return stockUtils.getStockWarehouseList(stockDataList,warehouseDataList);
    }
}
