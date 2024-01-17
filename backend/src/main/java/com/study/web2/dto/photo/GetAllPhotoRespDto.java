package com.study.web2.dto.photo;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.study.web2.consts.ResultCode;
import com.study.web2.utils.Pagination;
import com.study.web2.vo.PhotoVo;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class GetAllPhotoRespDto {
    private int code = ResultCode.SUCCESS.value();
    private String message;
    private List<PhotoVo> photoList;
    private Pagination page;
}