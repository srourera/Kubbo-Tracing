package com.technicaltest.trackingserver.facade;

import com.technicaltest.trackingserver.dto.ProductData;
import com.technicaltest.trackingserver.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductFacade {

    @Autowired
    private ProductService productService;

    public List<ProductData> getProducts() {
        return productService.getProducts();
    }

    public ProductData getProductById(Long productId) {
        return productService.getProductById(productId);
    }
}
