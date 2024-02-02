package com.study.web2.security;

import com.study.web2.mapper.UserMapper;
import com.study.web2.security.PrincipalDetails;
import com.study.web2.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class PrincipalDetailsService implements UserDetailsService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserVo user = userMapper.getUserByUsername(username);
        if (user == null)
            throw new UsernameNotFoundException("Not exist user: username = " + username);
        return new PrincipalDetails(user);
    }
}
