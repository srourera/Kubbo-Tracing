package com.technicaltest.trackingserver.controllers;

import com.technicaltest.trackingserver.clients.ProductsClient;
import com.technicaltest.trackingserver.dto.ProductData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(
        value = "/gui/products",
        produces = MediaType.APPLICATION_JSON_VALUE
)
public class ProductsController {

    @Autowired
    private ProductsClient productsClient;

    @GetMapping
    public ResponseEntity<List<ProductData>> getProducts(){
        return productsClient.getProducts();
    }
}
