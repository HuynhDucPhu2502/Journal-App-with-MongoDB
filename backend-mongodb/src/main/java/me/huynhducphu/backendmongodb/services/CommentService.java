package me.huynhducphu.backendmongodb.services;

import me.huynhducphu.backendmongodb.dao.CommentRepository;
import me.huynhducphu.backendmongodb.dao.UserRepository;
import me.huynhducphu.backendmongodb.models.Comment;
import me.huynhducphu.backendmongodb.models.User;
import me.huynhducphu.backendmongodb.responsemodels.CommentResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

    public Comment createComment(String content, String articleId, String userId) {
        Comment comment = new Comment(
                content,
                LocalDateTime.now(),
                articleId,
                userId
        );
        return commentRepository.save(comment);
    }

    public List<CommentResponse> getCommentsByArticleId(String articleId) {
        List<Comment> comments = commentRepository.findByArticleId(articleId);

        return comments.stream()
                .map(comment -> new CommentResponse(
                        comment.getContent(),
                        comment.getCommentDate(),
                        getUserNameByUserId(comment.getUserId()),
                        comment.getArticleId()
                ))
                .collect(Collectors.toList());
    }


    private String getUserNameByUserId(String userId) {
        Optional<User> user = userRepository.findByUserId(userId);
        return user.map(User::getFullName).orElse("Người dùng ẩn danh");
    }
}
