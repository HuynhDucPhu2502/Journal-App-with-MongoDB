package me.huynhducphu.backendmongodb.models;

import org.springframework.format.annotation.DateTimeFormat;
import java.time.LocalDateTime;

public class Comment {
    private String content;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime commentDate;

    private String articleId; // Dùng String thay vì ObjectId
    private String userId; // Dùng String thay vì ObjectId

    public Comment(String content, LocalDateTime commentDate, String articleId, String userId) {
        this.content = content;
        this.commentDate = commentDate;
        this.articleId = articleId;
        this.userId = userId;
    }

    public Comment() {
    }

    // Getters và Setters
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getCommentDate() {
        return commentDate;
    }

    public void setCommentDate(LocalDateTime commentDate) {
        this.commentDate = commentDate;
    }

    public String getArticleId() {
        return articleId;
    }

    public void setArticleId(String articleId) {
        this.articleId = articleId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
