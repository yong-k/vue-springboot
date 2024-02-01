package com.study.web2.security.jwt;

import io.jsonwebtoken.*;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtService {
    private String secretKey = "jsaiojowe12343vjisaj#@!%@$@#$56418654fksdgjvwif#@!$@rheiuhjkdfghl345245416!@#$";

    public String getToken(String key, Object value) {
        Date expirationTime = new Date();
        expirationTime.setTime(expirationTime.getTime() + 1000 * 60 * 10);  // 10분
        byte[] secretByteKey = DatatypeConverter.parseBase64Binary(secretKey);
        Key signKey = new SecretKeySpec(secretByteKey, SignatureAlgorithm.HS256.getJcaName());

        Map<String, Object> headerMap = new HashMap<>();
        headerMap.put("type", "JWT");
        headerMap.put("algorithm", "HS256");

        Map<String, Object> map = new HashMap<>();
        map.put(key, value);

        JwtBuilder builder = Jwts.builder().setHeader(headerMap)
                .setClaims(map)
                .setExpiration(expirationTime)
                .signWith(signKey, SignatureAlgorithm.HS256);

        return builder.compact();
    }

    public Claims getClaims(String token) {
        if (token != null && !token.equals("")) {
            try {
                byte[] secretByteKey = DatatypeConverter.parseBase64Binary(secretKey);
                Key signKey = new SecretKeySpec(secretByteKey, SignatureAlgorithm.HS256.getJcaName());
                return Jwts.parserBuilder().setSigningKey(signKey).build().parseClaimsJws(token).getBody();
            } catch (ExpiredJwtException e) {
                // 토큰 만료
                System.out.println("token was expired");
            } catch (JwtException e) {
                // 토큰 유효하지 않음
                System.out.println("token is not valid");
            }
        }
        return null;
    }

    public boolean isValid(String token) {
        return this.getClaims(token) != null;
    }

    public String getUsername(String token) {
        Claims claims = this.getClaims(token);
        if (claims != null)
            return claims.get("username").toString();
        return null;
    }
}
