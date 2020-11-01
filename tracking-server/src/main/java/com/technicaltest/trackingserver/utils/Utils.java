package com.technicaltest.trackingserver.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.technicaltest.trackingserver.dto.Exception;
import feign.FeignException;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

public class Utils {

    public static boolean notEmpty(String value) {
        return value != null && !value.isEmpty();
    }
    public static boolean notEmpty(List<Object> value) {
        return value != null && !value.isEmpty();
    }
    public static boolean notEmpty(Object value) {
        return value != null;
    }

    public static void transformException(FeignException exception) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            Exception productException = mapper.readValue(exception.contentUTF8(),
                    Exception.class);

            throw new ResponseStatusException(HttpStatus.valueOf(productException.getStatus()), productException.getMessage());

        } catch (JsonProcessingException jsonException){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
