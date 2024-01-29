package com.study.web2.service;

import com.study.web2.exception.DataNotFoundException;
import com.study.web2.mapper.UserMapper;
import com.study.web2.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public void createUser(UserVo user) {
        String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        userMapper.createUser(user);
    }

    public List<UserVo> getAllUser(int pageNum, int numOfRows, String username, String email) {
        pageNum = numOfRows * (pageNum - 1);
        return userMapper.getAllUser(pageNum, numOfRows, username, email);
    }

    public int countUser(String username, String email) {
        return userMapper.countUser(username, email);
    }

    public UserVo getUserById(long id) {
        UserVo user = userMapper.getUserById(id);
        if (user == null)
            throw new DataNotFoundException("Not exist user: id = " + id);
        return user;
    }

    public UserVo getUserByUsername(String username) {
        UserVo user = userMapper.getUserByUsername(username);
        if (username == null)
            throw new DataNotFoundException("Not exist user: username = " + username);
        return user;
    }

    public void updateUser(UserVo user) {
        if (!user.getPassword().isEmpty()) {
            String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());
            System.out.println("pw: " + encodedPassword);
            user.setPassword(encodedPassword);
        } else {
            user.setPassword(userMapper.getEncodedPassword(user.getUsername()));
        }
        int result = userMapper.updateUser(user);
        if (result < 1)
            throw new DataNotFoundException("[UPDATE fail] Not exist user: username = " + user.getUsername());
    }

    public void deleteUser(long id) {
        int result = userMapper.deleteUser(id);
        if (result < 1)
            throw new DataNotFoundException("[DELETE fail] Not exist user: id = " + id);
    }

    public int countDuplicateUsername(String username) {
        return userMapper.countDuplicateUsername(username);
    }

    public int countDuplicateEmail(String username, String email) {
        return userMapper.countDuplicateEmail(username, email);
    }

    public boolean isMatchPassword(String username, String inputPassword) {
        String encodedPassword = userMapper.getEncodedPassword(username);
        return bCryptPasswordEncoder.matches(inputPassword, encodedPassword);
    }
}