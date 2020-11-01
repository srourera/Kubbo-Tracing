package com.technicaltest.trackingserver.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Exception {
    private String timestamp;
    private int status;
    private String error;
    private String message;
    private String path;
}
