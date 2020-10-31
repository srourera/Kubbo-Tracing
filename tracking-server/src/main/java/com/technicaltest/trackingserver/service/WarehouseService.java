package com.technicaltest.trackingserver.service;

import com.technicaltest.trackingserver.clients.WarehousesClient;
import com.technicaltest.trackingserver.dto.WarehouseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WarehouseService {

    @Autowired
    private WarehousesClient warehousesClient;

    public List<WarehouseData> getWarehouses() {
        return warehousesClient.getWarehouses().getBody();
    }

    public List<WarehouseData> getWarehousesByList(List<Long> idList) {
        return warehousesClient.getWarehousesByList(idList).getBody();
    }
}
