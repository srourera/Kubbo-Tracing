package com.technicaltest.trackingserver.controller;

import com.technicaltest.trackingserver.clients.WarehousesClient;
import com.technicaltest.trackingserver.dto.StockData;
import com.technicaltest.trackingserver.dto.StockWarehouseData;
import com.technicaltest.trackingserver.dto.WarehouseData;
import com.technicaltest.trackingserver.facade.StockFacade;
import com.technicaltest.trackingserver.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(
        value = "/gui/stocks",
        produces = MediaType.APPLICATION_JSON_VALUE
)
public class StocksController {

    @Autowired
    private StockFacade stockFacade;

    @GetMapping(
            value = "/{productId}"
    )
    public ResponseEntity<List<StockWarehouseData>> getStockByProductId(@PathVariable Long productId){
        return new ResponseEntity<>(stockFacade.getByProductId(productId), HttpStatus.OK);
    }
}
