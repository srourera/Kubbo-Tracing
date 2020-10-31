package com.technicaltest.trackingserver.utils;

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
}
