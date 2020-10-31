package com.technicaltest.trackingserver.service;

import com.technicaltest.trackingserver.clients.ProductsClient;
import com.technicaltest.trackingserver.clients.WarehousesClient;
import com.technicaltest.trackingserver.dto.ProductData;
import com.technicaltest.trackingserver.dto.WarehouseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductsClient productsClient;

    public List<ProductData> getProducts() {
        return productsClient.getProducts().getBody();
    }

    public ProductData getProductById(Long productId) {
        return productsClient.getProductById(productId).getBody();
    }

    public ProductData create(ProductData productData) {
        return productsClient.create(productData).getBody();
    }

    public ProductData edit(Long productId, ProductData productData) {
        return productsClient.edit(productId,productData).getBody();
    }

    public void activate(Long productId) {
        productsClient.activateProduct(productId);
    }

    public void deactivate(Long productId) {
        productsClient.deactivateProduct(productId);
    }
}
