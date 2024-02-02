package com.study.web2.security.jwt;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Slf4j
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        log.info("[401] Unauthorized error: {}", authException.getLocalizedMessage());
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "유효한 토큰이 없는 상태에서 접근하여 오류가 발생하였습니다.");
        // https://github.com/bezkoder/spring-boot-spring-security-jwt-authentication/blob/master/src/main/java/com/bezkoder/springjwt/security/jwt/AuthEntryPointJwt.java#L10
    }
}
