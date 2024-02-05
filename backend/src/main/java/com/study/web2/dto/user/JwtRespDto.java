package com.study.web2.dto.user;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.study.web2.consts.ResultCode;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class JwtRespDto {
    private int code = ResultCode.SUCCESS.value();
    private String message;
    private String username;
}
