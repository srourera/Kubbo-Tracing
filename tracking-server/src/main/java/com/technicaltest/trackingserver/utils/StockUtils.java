package com.technicaltest.trackingserver.utils;

import com.technicaltest.trackingserver.dto.StockData;
import com.technicaltest.trackingserver.dto.StockWarehouseData;
import com.technicaltest.trackingserver.dto.WarehouseData;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class StockUtils {

    public List<StockWarehouseData> getStockWarehouseList(List<StockData> stockDataList, List<WarehouseData> warehouseDataList){
        Map<Long, WarehouseData> warehouseDataMap = warehouseDataList.stream()
                .collect(Collectors.toMap(w -> w.getId(), w -> w));

        List<StockWarehouseData> stockWarehouseDataList = new ArrayList<>();

        for(StockData stockData : stockDataList) {
            WarehouseData warehouseData = warehouseDataMap.get(stockData.getWarehouseId());

            if(Utils.notEmpty(warehouseData)) {
                stockWarehouseDataList.add(new StockWarehouseData(stockData,warehouseData));
            }
        }

        return stockWarehouseDataList;
    }

    public List<Long> getWarehouseIds(List<StockData> stockDataList){
        return stockDataList.stream().map(stockData -> stockData.getWarehouseId()).collect(Collectors.toList());
    }

}
