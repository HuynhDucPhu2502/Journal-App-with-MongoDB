package me.huynhducphu.backendmongodb.controller;


import me.huynhducphu.backendmongodb.dao.CommentRepository;
import me.huynhducphu.backendmongodb.models.Comment;
import me.huynhducphu.backendmongodb.responsemodels.CommentResponse;
import me.huynhducphu.backendmongodb.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/comments")
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/create")
    public ResponseEntity<Comment> createComment(@RequestBody Comment comment) {
        Comment savedComment = commentService.createComment(
                comment.getContent(),
                comment.getArticleId(),
                comment.getUserId()
        );

        return ResponseEntity.status(201).body(savedComment);
    }

    @GetMapping("/byArticle/{articleId}")
    public ResponseEntity<List<CommentResponse>> getCommentsByArticleId(@PathVariable String articleId) {
        List<CommentResponse> comments = commentService.getCommentsByArticleId(articleId);
        return ResponseEntity.ok(comments);
    }
}