package com.technicaltest.trackingserver.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Map;

@FeignClient(name = "product-service")
public interface ProductsClient {

    @GetMapping
    ResponseEntity<Map<String, String>> getProducts();
}
