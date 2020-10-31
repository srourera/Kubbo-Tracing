package com.technicaltest.trackingserver.facade;

import com.technicaltest.trackingserver.dto.WarehouseData;
import com.technicaltest.trackingserver.service.WarehouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WarehouseFacade {

    @Autowired
    private WarehouseService warehouseService;

    public List<WarehouseData> getWarehouses() {
        return warehouseService.getWarehouses();
    }
}
