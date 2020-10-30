package com.technicaltest.trackingserver.clients;

import com.technicaltest.trackingserver.dto.WarehouseData;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.Valid;
import java.util.List;

@FeignClient(name = "warehouse-service")
public interface WarehousesClient {

    @GetMapping
    ResponseEntity<List<WarehouseData>> getWarehouses();

    @GetMapping(
            value = "/list"
    )
    ResponseEntity<List<WarehouseData>> getWarehousesByList(@Valid @RequestParam("idList") List<Long> idList);
}
