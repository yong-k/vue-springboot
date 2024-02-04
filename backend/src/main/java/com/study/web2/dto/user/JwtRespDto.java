package com.study.web2.dto.user;

import com.study.web2.consts.ResultCode;
import lombok.Data;

@Data
public class JwtRespDto {
    private int code = ResultCode.SUCCESS.value();
    private String message;
    private String username;
}
