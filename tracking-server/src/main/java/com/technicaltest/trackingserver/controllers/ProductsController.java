package com.technicaltest.trackingserver.controllers;

import com.technicaltest.trackingserver.clients.ProductsClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/gui/products")
public class ProductsController {

    @Autowired
    private ProductsClient productsClient;

    @GetMapping
    public ResponseEntity<Map<String, String>> getProducts(){
        return productsClient.getProducts();
    }
}
