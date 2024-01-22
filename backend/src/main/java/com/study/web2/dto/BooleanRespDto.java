package com.study.web2.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.study.web2.consts.ResultCode;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BooleanRespDto {
    private boolean isTrue;
    private String message;
}