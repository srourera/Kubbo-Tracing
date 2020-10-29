package com.technicaltest.trackingserver.controllers;

import com.technicaltest.trackingserver.clients.StocksClient;
import com.technicaltest.trackingserver.dto.StockData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(
        value = "/gui/stocks",
        produces = MediaType.APPLICATION_JSON_VALUE
)
public class StocksController {

    @Autowired
    private StocksClient stocksClient;

    @GetMapping
    public ResponseEntity<List<StockData>> getStocks(){
        return stocksClient.getStocks();
    }
}
