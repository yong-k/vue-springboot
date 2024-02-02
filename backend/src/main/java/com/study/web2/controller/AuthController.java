package com.study.web2.controller;

import com.study.web2.dto.CommonRespDto;
import com.study.web2.dto.user.LoginReqDto;
import com.study.web2.dto.user.LoginRespDto;
import com.study.web2.security.jwt.JwtUtils;
import com.study.web2.service.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.WebUtils;

@Slf4j
@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    AuthenticationManagerBuilder authenticationManagerBuilder;

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public LoginRespDto login(@RequestBody LoginReqDto loginReqDto, HttpServletResponse response) {
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(
                new UsernamePasswordAuthenticationToken(loginReqDto.getUsername(), loginReqDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtUtils.createToken(authentication);

        Cookie cookie = new Cookie("accessToken", jwt);
        cookie.setMaxAge(7 * 24 * 60 * 60);
        cookie.setSecure(true);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        response.addCookie(cookie);

        System.out.println("=========== IN login() =====================");
        System.out.println("jwt = " + jwt);
        System.out.println("cookie.getValue() = " + cookie.getValue());
        System.out.println(jwtUtils.getUsernameFromJwtToken(jwt));
        System.out.println("===============================================");

        return new LoginRespDto(jwtUtils.getUsernameFromJwtToken(jwt));
    }

    @PostMapping("/logout")
    public CommonRespDto logout(HttpServletResponse response, HttpServletRequest request) {
        CommonRespDto commonRespDto = new CommonRespDto();

        Cookie cookie = new Cookie("accessToken", null);
        cookie.setMaxAge(0);
        cookie.setSecure(true);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        response.addCookie(cookie);

        SecurityContextHolder.clearContext();

        return commonRespDto;
    }
}
