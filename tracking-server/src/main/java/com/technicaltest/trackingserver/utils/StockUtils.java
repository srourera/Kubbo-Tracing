package com.technicaltest.trackingserver.utils;

import com.technicaltest.trackingserver.dto.StockData;
import com.technicaltest.trackingserver.dto.StockWarehouseData;
import com.technicaltest.trackingserver.dto.WarehouseData;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StockUtils {

    public List<StockWarehouseData> getStockWarehouseList(List<StockData> stockDataList, List<WarehouseData> warehouseDataList){
        List<StockWarehouseData> stockWarehouseDataList = new ArrayList<>();
        for(StockData stockData : stockDataList) {
            StockWarehouseData stockWarehouseData = new StockWarehouseData();
            WarehouseData warehouseData = warehouseDataList.stream().filter(w -> w.getId() == stockData.getWarehouseId()).findFirst().orElse(null);
            if(Utils.notEmpty(warehouseData)) {
                stockWarehouseData.setId(stockData.getId());
                stockWarehouseData.setQuantity(stockData.getQuantity());
                stockWarehouseData.setStatus(stockData.getStatus());
                stockWarehouseData.setProductId(stockData.getProductId());
                stockWarehouseData.setWarehouseData(warehouseData);
                stockWarehouseDataList.add(stockWarehouseData);
            }
        }
        return stockWarehouseDataList;
    }

    public List<Long> getWarehouseIds(List<StockData> stockDataList){
        return stockDataList.stream().map(stockData -> stockData.getWarehouseId()).collect(Collectors.toList());
    }

}
