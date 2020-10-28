package com.technicaltest.trackingserver.controllers;

import com.technicaltest.trackingserver.clients.ProductsClient;
import com.technicaltest.trackingserver.clients.StocksClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/gui/stocks")
public class StocksController {

    @Autowired
    private StocksClient stocksClient;

    @GetMapping
    public ResponseEntity<Map<String, String>> getStocks(){
        return stocksClient.getStocks();
    }
}
