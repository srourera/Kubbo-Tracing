package com.technicaltest.trackingserver.clients;

import com.technicaltest.trackingserver.dto.ProductData;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;

@FeignClient(name = "product-service")
public interface ProductsClient {

    @GetMapping
    ResponseEntity<List<ProductData>> getProducts();

    @GetMapping(
            value = "/{productId}"
    )
    ResponseEntity<ProductData> getProductById(@Valid @PathVariable Long productId);

    @PostMapping(
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    ResponseEntity<ProductData> create(@RequestBody ProductData product);

    @PutMapping(
            value = "/{productId}",
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    ResponseEntity<ProductData> edit(@Valid @PathVariable Long productId, @RequestBody ProductData product);

    @PutMapping(
            value = "/activate/{productId}"
    )
    ResponseEntity activateProduct(@PathVariable Long productId);

    @PutMapping(
            value = "/deactivate/{productId}"
    )
    ResponseEntity deactivateProduct(@PathVariable Long productId);

    @DeleteMapping(
            value = "/{productId}"
    )
    ResponseEntity deleteProduct(@PathVariable Long productId);

    @PostMapping(
            value = "/image",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    ResponseEntity<Long> uploadImage(@RequestPart("imageFile") MultipartFile file);

    @GetMapping(
            value = "/image/{imageId}"
    )
    ResponseEntity<byte[]> getImage(@PathVariable Long imageId);
}
