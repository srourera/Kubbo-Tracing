package com.technicaltest.trackingserver.clients;

import com.technicaltest.trackingserver.dto.ProductData;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Map;

@FeignClient(name = "product-service")
public interface ProductsClient {

    @GetMapping
    ResponseEntity<List<ProductData>> getProducts();
}
