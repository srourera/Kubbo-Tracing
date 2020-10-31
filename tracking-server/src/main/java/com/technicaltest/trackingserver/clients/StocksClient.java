package com.technicaltest.trackingserver.clients;

import com.technicaltest.trackingserver.dto.StockData;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Map;

@FeignClient(name = "stock-service")
public interface StocksClient {

    @GetMapping(
            value = "/{productId}"
    )
    ResponseEntity<List<StockData>> getStockByProductId(@PathVariable Long productId);
}
