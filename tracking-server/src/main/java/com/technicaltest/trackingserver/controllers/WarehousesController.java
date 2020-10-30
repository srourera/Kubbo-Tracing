package com.technicaltest.trackingserver.controllers;

import com.technicaltest.trackingserver.clients.WarehousesClient;
import com.technicaltest.trackingserver.dto.WarehouseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(
        value = "/gui/warehouses",
        produces = MediaType.APPLICATION_JSON_VALUE
)
public class WarehousesController {

    @Autowired
    private WarehousesClient warehousesClient;

    @GetMapping
    public ResponseEntity<List<WarehouseData>> getWarehouses(){
        return warehousesClient.getWarehouses();
    }

    @GetMapping(
            value = "/list"
    )
    public ResponseEntity<List<WarehouseData>> getWarehousesByList(@RequestParam("idList") List<Long> idList){
        return warehousesClient.getWarehousesByList(idList);
    }
}
