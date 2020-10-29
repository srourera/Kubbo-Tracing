package com.technicaltest.trackingserver.clients;

import com.technicaltest.trackingserver.dto.StockData;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Map;

@FeignClient(name = "stock-service")
public interface StocksClient {

    @GetMapping
    ResponseEntity<List<StockData>> getStocks();
}
