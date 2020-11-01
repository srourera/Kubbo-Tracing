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
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<StockData> createStock(@RequestBody StockData stock){
        return new ResponseEntity<>(stockFacade.create(stock),HttpStatus.CREATED);
    }

    @PutMapping(
            value = "/{stockId}",
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<StockData> editStock(@PathVariable Long stockId, @RequestBody StockData stock) throws Exception {
        return new ResponseEntity<>(stockFacade.edit(stockId, stock),HttpStatus.CREATED);
    }

    @DeleteMapping(
            value = "/{stockId}"
    )
    public ResponseEntity deleteStock(@PathVariable Long stockId) {
        stockFacade.delete(stockId);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
