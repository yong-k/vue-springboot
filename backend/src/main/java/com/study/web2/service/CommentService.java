package com.study.web2.service;

import com.study.web2.exception.DataNotFoundException;
import com.study.web2.mapper.CommentMapper;
import com.study.web2.vo.CommentVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentMapper commentMapper;

    public void createComment(CommentVo comment) {
        commentMapper.createComment(comment);
    }

    public List<CommentVo> getAllComment(int pageNum, int numOfRows, Long postId, String name, String email, String body) {
        pageNum = numOfRows * (pageNum - 1);
        return commentMapper.getAllComment(pageNum, numOfRows, postId, name, email, body);
    }

    public int countComment(Long postId, String name, String email, String body) {
        return commentMapper.countComment(postId, name, email, body);
    }

    public CommentVo getCommentById(long id) {
        CommentVo comment = commentMapper.getCommentById(id);
        if (comment == null)
            throw new DataNotFoundException("Not exist comment: id = " + id);
        return comment;
    }

    public void updateComment(CommentVo comment) {
        int result = commentMapper.updateComment(comment);
        if (result < 1)
            throw new DataNotFoundException("[UPDATE fail] Not exist comment: id = " + comment.getId());
    }

    public void deleteComment(long id) {
        int result = commentMapper.deleteComment(id);
        if (result < 1)
            throw new DataNotFoundException("[DELETE fail] Not exist comment: id = " + id);
    }
}