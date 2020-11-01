package com.technicaltest.trackingserver.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.technicaltest.trackingserver.clients.ProductsClient;
import com.technicaltest.trackingserver.clients.WarehousesClient;
import com.technicaltest.trackingserver.dto.Exception;
import com.technicaltest.trackingserver.dto.ProductData;
import com.technicaltest.trackingserver.dto.WarehouseData;
import com.technicaltest.trackingserver.utils.Utils;
import feign.FeignException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductsClient productsClient;

    @Autowired
    private StockService stockService;

    public List<ProductData> getProducts() {
        return productsClient.getProducts().getBody();
    }

    public ProductData getProductById(Long productId) {
        ProductData productData = null;
        try {
            productData = productsClient.getProductById(productId).getBody();
        } catch (FeignException exception) {
            Utils.transformException(exception);
        }
        return productData;
    }

    public ProductData create(ProductData productData) {
        return productsClient.create(productData).getBody();
    }

    public ProductData edit(Long productId, ProductData productData) {
        ProductData productEdited = null;
        try {
            productEdited = productsClient.edit(productId,productData).getBody();
        } catch (FeignException exception) {
            Utils.transformException(exception);
        }
        return productEdited;
    }

    public void activate(Long productId) {
        try {
            productsClient.activateProduct(productId);
        } catch (FeignException exception) {
            Utils.transformException(exception);
        }
    }

    public void deactivate(Long productId) {
        try {
            productsClient.deactivateProduct(productId);
        } catch (FeignException exception) {
            Utils.transformException(exception);
        }
    }

    public void delete(Long productId) {
        try {
            productsClient.deleteProduct(productId);
            stockService.deleteByProductId(productId);
        } catch (FeignException exception) {
            Utils.transformException(exception);
        }
    }

    public Long uploadImage(MultipartFile file) {
        Long id = null;
        try {
            id = productsClient.uploadImage(file).getBody();
        } catch (FeignException exception) {
            Utils.transformException(exception);
        }
        return id;
    }

    public byte[] getImage(Long imageId) {
        return productsClient.getImage(imageId).getBody();
    }

}
