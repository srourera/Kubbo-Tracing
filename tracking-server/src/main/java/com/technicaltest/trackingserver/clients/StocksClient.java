package com.technicaltest.trackingserver.clients;

import com.technicaltest.trackingserver.dto.StockData;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@FeignClient(name = "stock-service")
public interface StocksClient {

    @GetMapping(
            value = "/{productId}"
    )
    ResponseEntity<List<StockData>> getStockByProductId(@PathVariable Long productId);

    @PostMapping(
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    ResponseEntity<StockData> createStock(@RequestBody StockData stock);

    @PutMapping(
            value = "/{stockId}",
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    ResponseEntity<StockData> editStock(@PathVariable Long stockId, @RequestBody StockData stock);
}
