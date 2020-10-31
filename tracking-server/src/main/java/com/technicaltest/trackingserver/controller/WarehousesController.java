package com.technicaltest.trackingserver.controller;

import com.technicaltest.trackingserver.facade.WarehouseFacade;
import com.technicaltest.trackingserver.dto.WarehouseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(
        value = "/gui/warehouses",
        produces = MediaType.APPLICATION_JSON_VALUE
)
public class WarehousesController {

    @Autowired
    private WarehouseFacade warehouseFacade;

    @GetMapping
    public ResponseEntity<List<WarehouseData>> getWarehouses(){
        return new ResponseEntity<>(warehouseFacade.getWarehouses(), HttpStatus.OK);
    }

}
