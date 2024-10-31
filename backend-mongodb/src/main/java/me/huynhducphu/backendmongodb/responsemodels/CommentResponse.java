package me.huynhducphu.backendmongodb.responsemodels;

import java.time.LocalDateTime;

public class CommentResponse {
    private String content;
    private LocalDateTime commentDate;
    private String userName;
    private String articleId;

    public CommentResponse(String content, LocalDateTime commentDate, String userName, String articleId) {
        this.content = content;
        this.commentDate = commentDate;
        this.userName = userName;
        this.articleId = articleId;
    }

    // Getters and Setters
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getArticleId() {
        return articleId;
    }

    public void setArticleId(String articleId) {
        this.articleId = articleId;
    }
}