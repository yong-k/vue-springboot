package com.study.web2.controller;

import com.study.web2.security.jwt.JwtService;
import com.study.web2.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    UserService userService;

    @Autowired
    JwtService jwtService;

}
