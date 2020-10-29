package com.technicaltest.trackingserver.clients;

import com.technicaltest.trackingserver.dto.WarehouseData;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Map;

@FeignClient(name = "warehouse-service")
public interface WarehousesClient {

    @GetMapping
    ResponseEntity<List<WarehouseData>> getWarehouses();
}
