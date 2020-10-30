package com.technicaltest.trackingserver.clients;

import com.technicaltest.trackingserver.dto.ProductData;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@FeignClient(name = "product-service")
public interface ProductsClient {

    @GetMapping
    ResponseEntity<List<ProductData>> getProducts();

    @GetMapping(
            value = "/{productId}"
    )
    ResponseEntity<ProductData> getProductById(@Valid @PathVariable Long productId);
}
