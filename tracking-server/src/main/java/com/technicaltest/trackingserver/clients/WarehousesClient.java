package com.technicaltest.trackingserver.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Map;

@FeignClient(name = "warehouse-service")
public interface WarehousesClient {

    @GetMapping
    ResponseEntity<Map<String, String>> getWarehouses();
}
