package com.study.web2.consts;

public enum ResultCode {
    SUCCESS(0),
    DATA_INTEGRITY_VIOLATION(-1),
    DATA_NOT_FOUND(-2),
    UNKNOWN_ERROR(-999);

    private final int value;

    private ResultCode(int value) {
        this.value = value;
    }

    public int value() {
        return value;
    }
}